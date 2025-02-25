import axios, { AxiosInstance } from "axios";

/** Request payload for sign in */
export interface SignInRequest {
  email: string;
  password: string;
}

/** Request payload for sign up */
export interface SignUpRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phone: string;
}

/** Response payload for authentication endpoints */
export interface AuthResponse {
  accessToken: string;
  refreshToken: string;
  tokenType: string;
  userId: string;
  username: string;
  email: string;
  roles: string[];
}

/**
 * CommercifyAuth provides methods to sign in, sign up, and refresh tokens.
 */
export class CommercifyAuth {
  private axiosInstance: AxiosInstance;
  private basePath: string = "/auth";

  /**
   * @param baseURL Base URL for the API (default: http://localhost:6091)
   */
  constructor(private baseURL: string = "http://localhost:6091/api/v2") {
    this.axiosInstance = axios.create({
      baseURL: `${this.baseURL}${this.basePath}`,
      headers: { "Content-Type": "application/json" },
    });
  }

  /**
   * Sign in a user.
   * @param credentials The user's email and password.
   * @returns A promise that resolves to an authentication response.
   */
  async signIn(credentials: SignInRequest): Promise<AuthResponse> {
    const response = await this.axiosInstance.post<AuthResponse>(
      "/signin",
      credentials
    );
    return response.data;
  }

  /**
   * Sign up a new user.
   * @param userDetails The new user's details.
   * @returns A promise that resolves to an authentication response.
   */
  async signUp(userDetails: SignUpRequest): Promise<AuthResponse> {
    const response = await this.axiosInstance.post<AuthResponse>(
      "/signup",
      userDetails
    );
    return response.data;
  }

  /**
   * Refresh the access token using the refresh token.
   * @param refreshToken The refresh token.
   * @returns A promise that resolves to an authentication response.
   */
  async refresh(refreshToken: string): Promise<AuthResponse> {
    const response = await this.axiosInstance.post<AuthResponse>("/refresh", {
      refreshToken,
    });
    return response.data;
  }
}
