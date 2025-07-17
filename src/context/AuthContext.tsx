import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import App from "../App";

interface AuthContextType {
  user: string | null; // Token or user identifier (e.g., email or JWT)
  login: (accessToken: string, refreshToken?: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize user from access token cookie
  const [user, setUser] = useState<string | null>(Cookies.get("accessToken") || null);

  const login = (accessToken: string, refreshToken?: string) => {
    // Set access token cookie
    Cookies.set("accessToken", accessToken, {
      secure: true, // Only send over HTTPS
      sameSite: "strict", // Prevent CSRF
      expires: 1 / 24, // 1 hour expiration (adjust as needed)
    });

    // Set refresh token cookie if provided
    if (refreshToken) {
      Cookies.set("refreshToken", refreshToken, {
        secure: true,
        sameSite: "strict",
        expires: 7, // 7 days expiration
      });
    }

    setUser(accessToken);
  };

  const logout = () => {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children} {/* Render children instead of App to avoid nesting issues */}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);