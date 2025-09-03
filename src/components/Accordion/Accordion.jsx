import Panel from "./Panel";
import data from "../../data.js";
import styles from "./Accordion.module.css";

export default function Accordion() {
  return (
    <div className={styles.container}>
      {data.map(({ id, heading, text }) => (
        <Panel
          key={id}
          heading={heading}
          text={text}
        />
      ))}
    </div>
  );
}
