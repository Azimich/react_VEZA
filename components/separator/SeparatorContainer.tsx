import { FC } from "react";
import Styles from "./Separator.module.scss";

interface ISeparatorProps {
  title: string;
}

const SeparatorContainer: FC<ISeparatorProps> = ({ title = "" }) => {
  return (
    <section className={Styles.separator}>
      <h2 className={Styles.separator_title}>{title}</h2>
    </section>
  );
};

export { SeparatorContainer };
