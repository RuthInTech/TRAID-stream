/**
 * Video Service
 * Handles video listing, details, segments, and metadata
 */

import { httpClient } from "./http-client";
import { API_CONFIG } from "./config";
import type {
  Video,
  VideoListResponse,
  VideoDetailsResponse,
  VideoSegment,
  AuthVidResponse,
  SegmentResponse,
  WatchHistory,
  AddWatchHistoryRequest,
} from "./types";

class VideoService {
  /**
   * Get list of all available videos
   */
  async listVideos(page: number = 1, pageSize: number = 20): Promise<VideoListResponse> {
    try {
      const response = await httpClient.get<VideoListResponse>(
        `${API_CONFIG.ENDPOINTS.PLAYER.LIST_VIDEOS}?page=${page}&pageSize=${pageSize}`
      );
      return response;
    } catch (error) {
      console.error("Failed to fetch video list:", error);
      throw error;
    }
  }

  /**
   * Get video details by ID
   */
  async getVideoDetails(videoId: string): Promise<VideoDetailsResponse> {
    try {
      const url = API_CONFIG.ENDPOINTS.PLAYER.GET_VIDEO.replace(":id", videoId);
      const response = await httpClient.get<VideoDetailsResponse>(url);
      return response;
    } catch (error) {
      console.error("Failed to fetch video details:", error);
      throw error;
    }
  }

  /**
   * Authenticate video request (check if user can watch)
   */
  async authVideoRequest(
    videoId: string,
    currentSegment: number
  ): Promise<AuthVidResponse> {
    try {
      const response = await httpClient.post<AuthVidResponse>(
        API_CONFIG.ENDPOINTS.PLAYER.AUTH_VID,
        {
          videoId,
          currentSegment,
          timestamp: new Date().toISOString(),
        }
      );
      return response;
    } catch (error) {
      console.error("Video authentication failed:", error);
      throw error;
    }
  }

  /**
   * Get a specific video segment
   */
  async getSegment(videoId: string, segmentNumber: number): Promise<SegmentResponse> {
    try {
      const response = await httpClient.post<SegmentResponse>(
        API_CONFIG.ENDPOINTS.PLAYER.GET_SEGMENT,
        {
          videoId,
          segmentNumber,
        }
      );
      return response;
    } catch (error) {
      console.error(`Failed to fetch segment ${segmentNumber}:`, error);
      throw error;
    }
  }

  /**
   * Get HLS playlist URL for streaming
   */
  getHLSPlaylistUrl(videoId: string): string {
    return `${API_CONFIG.BASE_URL}/videos/${videoId}/playlist.m3u8`;
  }

  /**
   * Get video thumbnail/poster URL
   */
  getVideoPosterUrl(videoId: string): string {
    return `${API_CONFIG.BASE_URL}/videos/${videoId}/poster.jpg`;
  }

  /**
   * Add watch history entry
   */
  async addWatchHistory(data: AddWatchHistoryRequest): Promise<WatchHistory> {
    try {
      const response = await httpClient.post<WatchHistory>(
        API_CONFIG.ENDPOINTS.WATCH.ADD_HISTORY,
        data
      );
      return response;
    } catch (error) {
      console.error("Failed to add watch history:", error);
      throw error;
    }
  }

  /**
   * Get watch history for a specific video
   */
  async getWatchHistory(videoId: string): Promise<WatchHistory | null> {
    try {
      const url = API_CONFIG.ENDPOINTS.WATCH.GET_WATCH_STATUS.replace(":id", videoId);
      const response = await httpClient.get<WatchHistory>(url);
      return response;
    } catch (error) {
      console.error("Failed to fetch watch history:", error);
      return null;
    }
  }

  /**
   * Get user's complete watch history
   */
  async getUserWatchHistory(): Promise<WatchHistory[]> {
    try {
      const response = await httpClient.get<WatchHistory[]>(
        API_CONFIG.ENDPOINTS.WATCH.HISTORY
      );
      return response;
    } catch (error) {
      console.error("Failed to fetch user watch history:", error);
      throw error;
    }
  }

  /**
   * Search videos by title or description
   */
  async searchVideos(query: string, page: number = 1): Promise<VideoListResponse> {
    try {
      const response = await httpClient.get<VideoListResponse>(
        `${API_CONFIG.ENDPOINTS.PLAYER.LIST_VIDEOS}/search?q=${encodeURIComponent(query)}&page=${page}`
      );
      return response;
    } catch (error) {
      console.error("Failed to search videos:", error);
      throw error;
    }
  }

  /**
   * Get trending videos
   */
  async getTrendingVideos(limit: number = 10): Promise<Video[]> {
    try {
      const response = await httpClient.get<Video[]>(
        `${API_CONFIG.ENDPOINTS.PLAYER.LIST_VIDEOS}/trending?limit=${limit}`
      );
      return response;
    } catch (error) {
      console.error("Failed to fetch trending videos:", error);
      throw error;
    }
  }

  /**
   * Get recently added videos
   */
  async getRecentVideos(limit: number = 10): Promise<Video[]> {
    try {
      const response = await httpClient.get<Video[]>(
        `${API_CONFIG.ENDPOINTS.PLAYER.LIST_VIDEOS}/recent?limit=${limit}`
      );
      return response;
    } catch (error) {
      console.error("Failed to fetch recent videos:", error);
      throw error;
    }
  }
}

export const videoService = new VideoService();
