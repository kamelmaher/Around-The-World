/** @format */
type ThemeContext = {
  theme: "dark" | "light";
  changeTheme: () => void;
};
import { createContext, useContext } from "react";
export const themeContext = createContext<ThemeContext | null>(null);

export const useTheme = () => {
  const context = useContext(themeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
