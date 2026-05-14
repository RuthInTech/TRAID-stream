/**
 * API Configuration
 * Centralized configuration for backend API connections
 */

export const API_CONFIG = {
  // Base URL for the API - will use environment variables or default
  BASE_URL: import.meta.env.VITE_API_URL || "http://localhost:8080/api/v1",
  
  // API Endpoints
  ENDPOINTS: {
    // User Management
    USER: {
      REGISTER: "/user/new_user",
      LOGIN: "/user/login",
      PROFILE: "/user/profile",
    },
    
    // Video/Player
    PLAYER: {
      AUTH_VID: "/player/auth/vid",
      GET_SEGMENT: "/player/segment",
      LIST_VIDEOS: "/videos",
      GET_VIDEO: "/videos/:id",
    },
    
    // Upload
    UPLOAD: {
      VIDEO: "/upload/video",
      PROGRESS: "/upload/progress",
    },
    
    // Watch History
    WATCH: {
      HISTORY: "/watch/history",
      ADD_HISTORY: "/watch/add",
      GET_WATCH_STATUS: "/watch/:id",
    },
  },
  
  // Request/Response timeouts (ms)
  TIMEOUT: 30000,
  
  // Retry configuration
  RETRY: {
    MAX_RETRIES: 3,
    RETRY_DELAY: 1000, // ms
  },
};

// Token storage keys
export const TOKEN_STORAGE_KEYS = {
  ACCESS_TOKEN: "streaming_access_token",
  REFRESH_TOKEN: "streaming_refresh_token",
  USER_ID: "streaming_user_id",
};
