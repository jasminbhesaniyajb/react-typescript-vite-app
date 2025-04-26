import { createContext, useContext, useEffect, useState } from "react";
import { Theme, ThemeProviderProps, ThemeProviderState } from "../types";

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
  }

const ThemeProviderContext = createContext<ThemeProviderState>(initialState);

export function ThemeProvider({
  children,
  defaultTheme = "system",
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || defaultTheme
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove("theme-blue", "theme-gray", "theme-red");
    
    if (theme !== "system") {
      root.classList.add(`theme-${theme}`);
    }
    
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme);
    },
  };

  return (
    <ThemeProviderContext.Provider value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
    const context = useContext(ThemeProviderContext)
   
    if (context === undefined)
      throw new Error("useTheme must be used within a ThemeProvider")
   
    return context
  }
