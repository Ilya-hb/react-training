import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";
import styles from "./Accordion.module.css";
import type { IData } from "../../interfaces/index.ts";

export default function Panel({
  heading,
  text,
}: Pick<IData, "heading" | "text">) {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <div>
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
