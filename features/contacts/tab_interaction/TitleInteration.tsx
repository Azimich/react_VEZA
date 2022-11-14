import Styles from "./Interaction.module.scss";
import { FC } from "react";
import { SeparatorContainer } from "components/separator/SeparatorContainer";

const TitleInteration: FC = () => {
  return (
    <div className={Styles.interaction_container_title}>
      <SeparatorContainer title={"СВЯЖИТЕСЬ С НАМИ"} />
      <p>
        Чтобы получить ответы на ваши вопросы и быть в курсе всего происходящего
      </p>
    </div>
  );
};
export { TitleInteration };
