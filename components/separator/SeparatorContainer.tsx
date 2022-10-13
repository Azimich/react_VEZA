import { FC } from "react";
import Styles from "./Separator.module.scss";

interface ISeparatorProps {
  title: string;
  fontSize?: string;
}

const SeparatorContainer: FC<ISeparatorProps> = ({
  title = "",
  fontSize = "50px",
}) => {
  return (
    <section className={Styles.separator}>
      <h2 style={{ fontSize: fontSize }} className={Styles.separator_title}>
        {title}
      </h2>
    </section>
  );
};

export { SeparatorContainer };
