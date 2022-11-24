import { FC } from "react";
import Styles from "./Separator.module.scss";

interface ISeparatorProps {
  title: string;
  classNameProps?: string;
}

const SeparatorContainer: FC<ISeparatorProps> = ({
  title = "",
  classNameProps = "",
  ...attrs
}) => {
  return (
    <section
      className={`${Styles.separator__title__container} ${classNameProps}`}
      {...attrs}
    >
      <h2 className={Styles.separator_title}>{title}</h2>
    </section>
  );
};

export { SeparatorContainer };
