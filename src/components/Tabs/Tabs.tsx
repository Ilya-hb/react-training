import s from "./Tab.module.css";
import data from "../../data.js";
import Tab from "./Tab.js";
import React from "react";
import { useState } from "react";

export default function Tabs() {
  const [active, setActive] = useState<number>(1);

  const handleClick = (index: number) => {
    setActive(index);
  };
  const activeData = data[active];

  return (
    <div>
      <div className={s.container}>
        {data.map(({ id, heading }, index) => (
          <React.Fragment key={id}>
            <Tab
              index={index}
              active={active === index}
              heading={heading}
              onClick={handleClick}
            />
          </React.Fragment>
        ))}
      </div>
      <div className={`${s.paragraph}`}>
        <p>{activeData?.text}</p>
      </div>
    </div>
  );
}
