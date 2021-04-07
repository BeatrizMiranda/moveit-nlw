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
    <div className={styles.switcherContainer}>
      <input className={styles.toggle} type="checkbox" onClick={switchTheme} />
    </div>
  );
};

export default Switcher;
