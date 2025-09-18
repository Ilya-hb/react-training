import s from "./Tab.module.css";

interface TabProps {
  index: number;
  active: boolean;
  heading: string;
  onClick: (index: number) => void;
}

export default function Tab({ index, active, heading, onClick }: TabProps) {
  return (
    <div
      className={`${s.tab_container} ${active && s.tab_container_active}`}
      onClick={() => onClick(index)}
    >
      <h2 className={s.heading}>{heading}</h2>
    </div>
  );
}
