import React, { useState } from "react";
import { useContext } from "react";
import { AiOutlineSetting } from "react-icons/ai";
import { CountDownContext } from "../contexts/CountDownContext";
import styles from "../styles/components/Configurations.module.css";
import SideBar from "./SideBar";

function Configurations() {
  const { defaultTime, changeTime } = useContext(CountDownContext);

  const [newTime, setNewTime] = useState(defaultTime / 60);
  const [isOpenSideBar, setIsOpenSideBar] = useState(false);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setNewTime(Number(newValue));
  };

  const handleSave = () => {
    setIsOpenSideBar(false);
    changeTime(newTime * 60);
  };

  return (
    <>
      <SideBar closeModal={() => setIsOpenSideBar(false)} isOpen={isOpenSideBar}>
        <div className={styles.sideBarTimeSelector}>
          <div>
            <input type="number" value={newTime} onChange={handleChange} min="5" />
            <span style={{ marginLeft: "10px" }}>Mins</span>
          </div>
          <button type="button" onClick={handleSave}>
            Save
          </button>
        </div>
      </SideBar>

      <AiOutlineSetting
        size="38"
        className={`${styles.svg} ${isOpenSideBar ? styles.open : styles.close}`}
        onClick={() => setIsOpenSideBar(!isOpenSideBar)}
      />
    </>
  );
}

export default Configurations;
