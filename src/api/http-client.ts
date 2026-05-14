/**
 * HTTP Client
 * Axios instance with interceptors for auth, error handling, and retries
 */

import axios, { 
  AxiosInstance, 
  AxiosError, 
  InternalAxiosRequestConfig,
  AxiosResponse 
} from "axios";
import { API_CONFIG, TOKEN_STORAGE_KEYS } from "./config";

class HttpClient {
  private axiosInstance: AxiosInstance;
  private retryCount: Record<string, number> = {};

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_CONFIG.BASE_URL,
      timeout: API_CONFIG.TIMEOUT,
      headers: {
        "Content-Type": "application/json",
      },
    });

    this.setupInterceptors();
  }

  private setupInterceptors() {
    // Request interceptor: Add auth token
    this.axiosInstance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        const token = localStorage.getItem(TOKEN_STORAGE_KEYS.ACCESS_TOKEN);
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
      },
      (error: AxiosError) => {
        return Promise.reject(error);
      }
    );

    // Response interceptor: Handle errors and retries
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // Reset retry count on success
        if (response.config.url) {
          this.retryCount[response.config.url] = 0;
        }
        return response;
      },
      async (error: AxiosError) => {
        const config = error.config as InternalAxiosRequestConfig & { _retry?: number };
        
        if (!config) {
          return Promise.reject(error);
        }

        const url = config.url || "";
        const retryCount = this.retryCount[url] || 0;

        // Handle 401 Unauthorized - token expired
        if (error.response?.status === 401) {
          localStorage.removeItem(TOKEN_STORAGE_KEYS.ACCESS_TOKEN);
          localStorage.removeItem(TOKEN_STORAGE_KEYS.REFRESH_TOKEN);
          localStorage.removeItem(TOKEN_STORAGE_KEYS.USER_ID);
          
          // Redirect to login
          window.location.href = "/auth/viewer";
          return Promise.reject(error);
        }

        // Retry logic for specific status codes (5xx, 429)
        if (
          retryCount < API_CONFIG.RETRY.MAX_RETRIES &&
          (error.response?.status === 429 || 
           (error.response?.status && error.response.status >= 500))
        ) {
          this.retryCount[url] = retryCount + 1;
          
          const delay = API_CONFIG.RETRY.RETRY_DELAY * Math.pow(2, retryCount);
          await new Promise(resolve => setTimeout(resolve, delay));
          
          return this.axiosInstance(config);
        }

        return Promise.reject(error);
      }
    );
  }

  public getInstance(): AxiosInstance {
    return this.axiosInstance;
  }

  public get<T = any>(url: string, config?: any): Promise<T> {
    return this.axiosInstance.get<T>(url, config).then(res => res.data);
  }

  public post<T = any>(url: string, data?: any, config?: any): Promise<T> {
    return this.axiosInstance.post<T>(url, data, config).then(res => res.data);
  }

  public put<T = any>(url: string, data?: any, config?: any): Promise<T> {
    return this.axiosInstance.put<T>(url, data, config).then(res => res.data);
  }

  public patch<T = any>(url: string, data?: any, config?: any): Promise<T> {
    return this.axiosInstance.patch<T>(url, data, config).then(res => res.data);
  }

  public delete<T = any>(url: string, config?: any): Promise<T> {
    return this.axiosInstance.delete<T>(url, config).then(res => res.data);
  }

  public postFormData<T = any>(
    url: string, 
    formData: FormData, 
    onUploadProgress?: (progressEvent: ProgressEvent) => void
  ): Promise<T> {
    return this.axiosInstance.post<T>(url, formData, {
      headers: { "Content-Type": "multipart/form-data" },
      onUploadProgress,
    }).then(res => res.data);
  }
}

export const httpClient = new HttpClient();
