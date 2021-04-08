import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styles from "../styles/components/Switcher.module.css";

const Switcher = () => {
  const { theme, switchTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") return document.body.classList.add("darkmode");

    document.body.classList.remove("darkmode");
  }, [theme]);

  return (
    <input
      className={styles.toggle}
      checked={theme === "light"}
      type="checkbox"
      onClick={switchTheme}
    />
  );
};

export default Switcher;
