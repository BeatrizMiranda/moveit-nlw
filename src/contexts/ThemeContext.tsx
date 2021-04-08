import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

type TThemeContext = {
  theme: string;
  switchTheme: () => void;
};

type TThemeProvider = {
  theme: string;
};

export const ThemeContext = createContext({} as TThemeContext);

export const ThemeProvider: React.FC<TThemeProvider> = ({ children, theme: themeCookie }) => {
  const [theme, setTheme] = useState(themeCookie ?? "dark");

  useEffect(() => {
    Cookies.set("theme", `${theme}`);
  }, [theme]);

  const switchTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return <ThemeContext.Provider value={{ theme, switchTheme }}>{children}</ThemeContext.Provider>;
};
