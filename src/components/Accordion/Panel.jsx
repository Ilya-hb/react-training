import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import styles from "./Accordion.module.css";

export default function Panel({ heading, text }) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div className="">
      <h2 onClick={() => setIsOpened(!isOpened)}>
        {heading}
        <FaChevronDown
          className={`${styles.icon} ${isOpened && styles.icon_clicked}`}
        />
      </h2>
      <p className={isOpened ? styles.visible : styles.hidden}>{text}</p>
    </div>
  );
}
