import React from "react";
import styles from "../styles/components/SideBar.module.css";

function SideBar({ children, closeModal, isOpen }) {
  return (
    <div className={isOpen ? styles.overlayOpen : styles.overlayClosed} onClick={closeModal}>
      <div className={styles.sideBarContainer} onClick={(e) => e.stopPropagation()}>
        <button type="button" onClick={closeModal}>
          <img src="/icons/close.svg" alt="close modal" width="50" />
        </button>
        <div className={styles.sideBarContent}>{children}</div>
      </div>
    </div>
  );
}

export default SideBar;
