/**
 * API Types and DTOs
 * Shared types and data transfer objects for API communication
 */

// ============= Auth & User Types =============

export interface User {
  id: string;
  userName: string;
  email: string;
  isStudio: boolean;
  createdDate: string;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthResponse {
  accessToken: string;
  refreshToken?: string;
  user: User;
}

export interface UserProfile extends User {
  subscription?: Subscription;
}

// ============= Video Types =============

export interface Video {
  id: string;
  title: string;
  description: string;
  posterUrl?: string;
  duration?: number;
  uploadedBy: string;
  createdDate: string;
  updatedDate?: string;
  isPublished: boolean;
  viewCount?: number;
  status: "pending" | "processing" | "ready" | "failed";
}

export interface VideoListResponse {
  items: Video[];
  total: number;
  page: number;
  pageSize: number;
}

export interface VideoDetailsResponse extends Video {
  segments?: VideoSegment[];
  streamUrl?: string;
  hlsPlaylistUrl?: string;
}

export interface VideoSegment {
  id: string;
  segmentNumber: number;
  duration: number;
  url: string;
}

// ============= Watch History Types =============

export interface WatchHistory {
  id: string;
  userId: string;
  videoId: string;
  lastWatchedSegment: number;
  lastWatchedTime: number; // in seconds
  watchedDate: string;
  totalWatchTime: number;
  completed: boolean;
}

export interface AddWatchHistoryRequest {
  videoId: string;
  segmentNumber: number;
  watchTime: number;
}

// ============= Upload Types =============

export interface UploadRequest {
  title: string;
  description?: string;
  file: File;
}

export interface UploadResponse {
  videoId: string;
  uploadId: string;
  status: "initiated" | "processing" | "completed";
  progress: number;
}

export interface UploadProgress {
  uploadId: string;
  progress: number;
  uploadedBytes: number;
  totalBytes: number;
  status: "uploading" | "processing" | "completed" | "failed";
  message?: string;
}

// ============= Subscription Types =============

export interface Subscription {
  id: string;
  userId: string;
  plan: "free" | "basic" | "premium";
  startDate: string;
  endDate?: string;
  isActive: boolean;
  autoRenew: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  features: string[];
  maxConcurrentStreams: number;
  maxVideoQuality: "480p" | "720p" | "1080p" | "4k";
}

// ============= Error Types =============

export interface ApiError {
  code: string;
  message: string;
  details?: Record<string, any>;
  timestamp: string;
}

export interface ValidationError extends ApiError {
  fieldErrors: Record<string, string[]>;
}

// ============= Player Types =============

export interface AuthVidRequest {
  request_uri: string;
  current_frame: number;
}

export interface AuthVidResponse {
  segmentNumber: number;
  videoLocation: string;
  isAllowed: boolean;
  message?: string;
}

export interface SegmentRequest {
  videoId: string;
  segmentNumber: number;
}

export interface SegmentResponse {
  url: string;
  duration: number;
  contentType: string;
}
