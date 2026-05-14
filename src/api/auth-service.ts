/**
 * Auth Service
 * Handles authentication, login, registration, and token management
 */

import { httpClient } from "./http-client";
import { API_CONFIG, TOKEN_STORAGE_KEYS } from "./config";
import type {
  AuthRequest,
  AuthResponse,
  RegisterRequest,
  User,
  UserProfile,
} from "./types";

class AuthService {
  private isAuthenticated = false;
  private currentUser: User | null = null;
  private initPromise: Promise<void> | null = null;

  constructor() {
    this.initPromise = this.initializeFromStorage();
  }

  /**
   * Initialize auth state from localStorage
   */
  private async initializeFromStorage(): Promise<void> {
    const token = localStorage.getItem(TOKEN_STORAGE_KEYS.ACCESS_TOKEN);

    if (!token) {
      this.clearState();
      return;
    }

    try {
      this.isAuthenticated = true;

      // Fetch real user profile (IMPORTANT FIX)
      const profile = await this.fetchProfile();
      this.currentUser = profile as unknown as User;
    } catch (error) {
      console.error("Session invalid, logging out...", error);
      this.logout();
    }
  }

  /**
   * Register a new user
   */
  async register(data: RegisterRequest): Promise<void> {
    try {
      await httpClient.post<void>(
        API_CONFIG.ENDPOINTS.USER.REGISTER,
        {
          name: data.name,
          email: data.email,
          password: data.password,
        }
      );

      console.log("Registration successful");
    } catch (error) {
      console.error("Registration failed:", error);
      throw error;
    }
  }

  /**
   * Login user and store auth tokens
   */
  async login(credentials: AuthRequest): Promise<AuthResponse> {
    try {
      const response = await httpClient.post<AuthResponse>(
        API_CONFIG.ENDPOINTS.USER.LOGIN,
        {
          email: credentials.email,
          password: credentials.password,
        }
      );

      this.storeAuthResponse(response);

      return response;
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    }
  }

  /**
   * Store auth response (tokens and user data)
   */
  private storeAuthResponse(response: AuthResponse) {
    localStorage.setItem(
      TOKEN_STORAGE_KEYS.ACCESS_TOKEN,
      response.accessToken
    );

    if (response.refreshToken) {
      localStorage.setItem(
        TOKEN_STORAGE_KEYS.REFRESH_TOKEN,
        response.refreshToken
      );
    }

    localStorage.setItem(TOKEN_STORAGE_KEYS.USER_ID, response.user.id);

    this.isAuthenticated = true;
    this.currentUser = response.user;
  }

  /**
   * Logout user and clear auth data
   */
  logout(): void {
    this.clearState();
  }

  /**
   * Clear everything (centralized fix)
   */
  private clearState() {
    localStorage.removeItem(TOKEN_STORAGE_KEYS.ACCESS_TOKEN);
    localStorage.removeItem(TOKEN_STORAGE_KEYS.REFRESH_TOKEN);
    localStorage.removeItem(TOKEN_STORAGE_KEYS.USER_ID);

    this.isAuthenticated = false;
    this.currentUser = null;
  }

  /**
   * Get auth status
   */
  getAuthStatus(): boolean {
    return this.isAuthenticated;
  }

  /**
   * Get access token
   */
  getAccessToken(): string | null {
    return localStorage.getItem(TOKEN_STORAGE_KEYS.ACCESS_TOKEN);
  }

  /**
   * Get current user (FIXED)
   */
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  /**
   * Get user ID
   */
  getUserId(): string | null {
    return localStorage.getItem(TOKEN_STORAGE_KEYS.USER_ID);
  }

  /**
   * Fetch user profile
   */
  async fetchProfile(): Promise<UserProfile> {
    const response = await httpClient.get<UserProfile>(
      API_CONFIG.ENDPOINTS.USER.PROFILE
    );
    return response;
  }

  /**
   * Set current user manually
   */
  setCurrentUser(user: User) {
    this.currentUser = user;
    this.isAuthenticated = true;
  }

  /**
   * Wait until auth initialization is complete
   * (IMPORTANT for frontend rendering)
   */
  async waitForInit(): Promise<void> {
    if (this.initPromise) {
      await this.initPromise;
    }
  }
}

export const authService = new AuthService();