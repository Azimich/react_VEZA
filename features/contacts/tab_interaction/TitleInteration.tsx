import Styles from "./Interaction.module.scss";
import { FC } from "react";

const TitleInteration: FC = () => {
  return (
    <div className={Styles.interaction_container_title}>
      <h1>СВЯЖИТЕСЬ С НАМИ</h1>
      <p>
        Чтобы получить ответы на ваши вопросы и быть в курсе всего происходящего
      </p>
    </div>
  );
};
export { TitleInteration };
