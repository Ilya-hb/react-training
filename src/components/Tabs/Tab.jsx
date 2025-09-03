import React from "react";
import s from "./Tab.module.css";

export default function Tab({ index, active, heading, onClick }) {
  return (
    <div
      className={`${s.tab_container} ${active && s.tab_container_active}`}
      onClick={() => onClick(index)}
    >
      <h2 className={s.heading}>{heading}</h2>
    </div>
  );
}
