import React, { useRef, useState } from "react";

export const useRefExample = () => {
  const [stateValue, setStateValue] = useState(""); // через useState
  const refValue = useRef(""); // через useRef
  const renders = useRef(0); // считаем ререндеры

  renders.current++;

  return (
    <div style={{ fontFamily: "sans-serif", lineHeight: "1.6" }}>
      <h2>Сравнение useState vs useRef</h2>
      <p>Количество ререндеров: {renders.current}</p>

      <div style={{ marginBottom: "20px" }}>
        <h3>useState</h3>
        <input
          type="text"
          value={stateValue}
          onChange={(e) => setStateValue(e.target.value)}
          placeholder="Введи текст"
        />
        <p>Значение в state: {stateValue}</p>
      </div>

      <div>
        <h3>useRef</h3>
        <input
          type="text"
          onChange={(e) => (refValue.current = e.target.value)}
          placeholder="Введи текст"
        />
        <p>Значение в ref (через .current): {refValue.current}</p>
      </div>
    </div>
  );
};
