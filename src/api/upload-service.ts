/**
 * Upload Service
 * Handles video uploads with progress tracking
 */

import { httpClient } from "./http-client";
import { API_CONFIG } from "./config";
import type { UploadRequest, UploadResponse, UploadProgress } from "./types";

type UploadProgressCallback = (progress: UploadProgress) => void;

class UploadService {
  private activeUploads: Map<string, AbortController> = new Map();

  /**
   * Upload a video file with progress tracking
   */
  async uploadVideo(
    data: UploadRequest,
    onProgress?: UploadProgressCallback
  ): Promise<UploadResponse> {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      if (data.description) {
        formData.append("description", data.description);
      }
      formData.append("file", data.file);

      let lastReportedProgress = 0;

      const response = await httpClient.postFormData<UploadResponse>(
        API_CONFIG.ENDPOINTS.UPLOAD.VIDEO,
        formData,
        (progressEvent) => {
          if (!progressEvent.lengthComputable) return;

          const percentCompleted = Math.round(
            (progressEvent.loaded * 100) / progressEvent.total
          );

          // Avoid reporting same progress multiple times
          if (percentCompleted > lastReportedProgress) {
            lastReportedProgress = percentCompleted;
            
            if (onProgress) {
              onProgress({
                uploadId: "", // Will be set from response
                progress: percentCompleted,
                uploadedBytes: progressEvent.loaded,
                totalBytes: progressEvent.total,
                status: "uploading",
              });
            }
          }
        }
      );

      // Store upload ID for potential cancellation/tracking
      if (response.uploadId) {
        this.activeUploads.set(response.uploadId, new AbortController());
      }

      return response;
    } catch (error) {
      console.error("Video upload failed:", error);
      throw error;
    }
  }

  /**
   * Get upload progress for a specific upload
   */
  async getUploadProgress(uploadId: string): Promise<UploadProgress> {
    try {
      const response = await httpClient.get<UploadProgress>(
        `${API_CONFIG.ENDPOINTS.UPLOAD.PROGRESS}/${uploadId}`
      );
      return response;
    } catch (error) {
      console.error("Failed to fetch upload progress:", error);
      throw error;
    }
  }

  /**
   * Poll upload progress at intervals
   */
  pollUploadProgress(
    uploadId: string,
    onProgress: UploadProgressCallback,
    intervalMs: number = 1000
  ): () => void {
    const interval = setInterval(async () => {
      try {
        const progress = await this.getUploadProgress(uploadId);
        onProgress(progress);

        // Stop polling when upload completes or fails
        if (progress.status === "completed" || progress.status === "failed") {
          clearInterval(interval);
          this.activeUploads.delete(uploadId);
        }
      } catch (error) {
        console.error("Error polling upload progress:", error);
        clearInterval(interval);
      }
    }, intervalMs);

    // Return cleanup function
    return () => clearInterval(interval);
  }

  /**
   * Cancel an ongoing upload
   */
  cancelUpload(uploadId: string): void {
    const controller = this.activeUploads.get(uploadId);
    if (controller) {
      controller.abort();
      this.activeUploads.delete(uploadId);
    }
  }

  /**
   * Retry failed upload
   */
  async retryUpload(
    data: UploadRequest,
    onProgress?: UploadProgressCallback
  ): Promise<UploadResponse> {
    return this.uploadVideo(data, onProgress);
  }

  /**
   * Upload video in chunks (for large files)
   */
  async uploadVideoChunked(
    data: UploadRequest,
    chunkSize: number = 5 * 1024 * 1024, // 5MB chunks
    onProgress?: UploadProgressCallback
  ): Promise<UploadResponse> {
    try {
      const totalChunks = Math.ceil(data.file.size / chunkSize);
      
      for (let i = 0; i < totalChunks; i++) {
        const start = i * chunkSize;
        const end = Math.min(start + chunkSize, data.file.size);
        const chunk = data.file.slice(start, end);

        const formData = new FormData();
        formData.append("title", data.title);
        if (data.description && i === 0) {
          formData.append("description", data.description);
        }
        formData.append("file", chunk);
        formData.append("chunkIndex", i.toString());
        formData.append("totalChunks", totalChunks.toString());

        const response = await httpClient.postFormData<UploadResponse>(
          API_CONFIG.ENDPOINTS.UPLOAD.VIDEO,
          formData
        );

        if (onProgress) {
          const percentCompleted = Math.round((i + 1) / totalChunks * 100);
          onProgress({
            uploadId: response.uploadId || "",
            progress: percentCompleted,
            uploadedBytes: end,
            totalBytes: data.file.size,
            status: i === totalChunks - 1 ? "completed" : "uploading",
          });
        }

        // Only return on last chunk
        if (i === totalChunks - 1) {
          return response;
        }
      }

      throw new Error("Upload incomplete");
    } catch (error) {
      console.error("Chunked upload failed:", error);
      throw error;
    }
  }

  /**
   * Get maximum file size allowed for upload (in bytes)
   */
  async getMaxFileSize(): Promise<number> {
    try {
      const response = await httpClient.get<{ maxSize: number }>(
        `${API_CONFIG.ENDPOINTS.UPLOAD.VIDEO}/limits`
      );
      return response.maxSize;
    } catch (error) {
      console.error("Failed to fetch upload limits:", error);
      // Return default 5GB if error
      return 5 * 1024 * 1024 * 1024;
    }
  }
}

export const uploadService = new UploadService();
