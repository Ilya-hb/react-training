import React, { useState } from "react";
import s from "./Input.module.css";
import useDebounce from "../../utils/useDebounce";

export default function Input() {
  const [text, setText] = useState("");
  const debouncedText: string = useDebounce(text, 250);
  return (
    <div className={s.container}>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
      />
      <p>
        Displaying text: <span>{text}</span>
      </p>
      <p>
        Displaying with <strong>Debounce</strong>: <span>{debouncedText}</span>
      </p>
    </div>
  );
}
