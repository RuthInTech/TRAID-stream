/**
 * Custom Hooks for API Integration
 * React hooks for common API operations
 */

import { useState, useCallback } from "react";
import { authService, videoService, uploadService } from "./index";
import type {
  AuthRequest,
  RegisterRequest,
  Video,
  VideoListResponse,
  VideoDetailsResponse,
  WatchHistory,
  UploadRequest,
  UploadProgress,
} from "./types";

/**
 * Hook for authentication (login/register)
 */
export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = useCallback(async (data: RegisterRequest) => {
    setLoading(true);
    setError(null);
    try {
      await authService.register(data);
      return true;
    } catch (err: any) {
      const message = err.response?.data?.message || "Registration failed";
      setError(message);
      return false;
    } finally {
      setLoading(false);
    }
  }, []);

  const login = useCallback(async (credentials: AuthRequest) => {
    setLoading(true);
    setError(null);
    try {
      const response = await authService.login(credentials);
      return response;
    } catch (err: any) {
      const message = err.response?.data?.message || "Login failed";
      setError(message);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    authService.logout();
  }, []);

  return {
    register,
    login,
    logout,
    loading,
    error,
    isAuthenticated: authService.getAuthStatus(),
    user: authService.getCurrentUser(),
  };
}

/**
 * Hook for video listing
 */
export function useVideoList() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState(0);

  const fetchVideos = useCallback(async (page: number = 1, pageSize: number = 20) => {
    setLoading(true);
    setError(null);
    try {
      const response = await videoService.listVideos(page, pageSize);
      setVideos(response.items);
      setTotal(response.total);
    } catch (err: any) {
      const message = err.response?.data?.message || "Failed to load videos";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    videos,
    loading,
    error,
    total,
    fetchVideos,
  };
}

/**
 * Hook for video details
 */
export function useVideoDetails(videoId: string | null) {
  const [video, setVideo] = useState<VideoDetailsResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchVideo = useCallback(async () => {
    if (!videoId) return;

    setLoading(true);
    setError(null);
    try {
      const response = await videoService.getVideoDetails(videoId);
      setVideo(response);
    } catch (err: any) {
      const message = err.response?.data?.message || "Failed to load video";
      setError(message);
    } finally {
      setLoading(false);
    }
  }, [videoId]);

  return {
    video,
    loading,
    error,
    fetchVideo,
  };
}

/**
 * Hook for watch history
 */
export function useWatchHistory(videoId: string | null) {
  const [history, setHistory] = useState<WatchHistory | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchHistory = useCallback(async () => {
    if (!videoId) return;

    setLoading(true);
    try {
      const response = await videoService.getWatchHistory(videoId);
      setHistory(response);
    } catch (err) {
      console.error("Failed to fetch watch history:", err);
    } finally {
      setLoading(false);
    }
  }, [videoId]);

  const addHistory = useCallback(async (segmentNumber: number, watchTime: number) => {
    if (!videoId) return;

    try {
      const response = await videoService.addWatchHistory({
        videoId,
        segmentNumber,
        watchTime,
      });
      setHistory(response);
    } catch (err) {
      console.error("Failed to add watch history:", err);
    }
  }, [videoId]);

  return {
    history,
    loading,
    fetchHistory,
    addHistory,
  };
}

/**
 * Hook for video upload
 */
export function useVideoUpload() {
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const [uploadId, setUploadId] = useState<string | null>(null);

  const upload = useCallback(async (data: UploadRequest) => {
    setUploading(true);
    setError(null);
    setProgress(0);

    try {
      const response = await uploadService.uploadVideo(data, (progressData) => {
        setProgress(progressData.progress);
      });

      setUploadId(response.uploadId);
      return response;
    } catch (err: any) {
      const message = err.response?.data?.message || "Upload failed";
      setError(message);
      throw err;
    } finally {
      setUploading(false);
    }
  }, []);

  const cancel = useCallback(() => {
    if (uploadId) {
      uploadService.cancelUpload(uploadId);
      setUploading(false);
      setProgress(0);
    }
  }, [uploadId]);

  return {
    upload,
    cancel,
    uploading,
    progress,
    error,
    uploadId,
  };
}

/**
 * Hook for video authentication (before playback)
 */
export function useVideoAuth() {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const authVideo = useCallback(async (videoId: string, segment: number = 0) => {
    setLoading(true);
    setError(null);

    try {
      const response = await videoService.authVideoRequest(videoId, segment);
      setAuthorized(response.isAllowed);
      return response;
    } catch (err: any) {
      const message = err.response?.data?.message || "Authorization failed";
      setError(message);
      setAuthorized(false);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    authorized,
    loading,
    error,
    authVideo,
  };
}
