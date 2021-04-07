import React, { createContext, useState } from "react";

type TThemeContext = {
  theme: string;
  switchTheme: () => void;
};

export const ThemeContext = createContext({} as TThemeContext);

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState("dark");

  const switchTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return <ThemeContext.Provider value={{ theme, switchTheme }}>{children}</ThemeContext.Provider>;
};
