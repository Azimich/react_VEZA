import { Interaction } from "./Interaction";
import { FC } from "react";
import Styles from "./Interaction.module.scss";

const InteractionItem: FC<Interaction> = (props) => {
  return (
    <li className={Styles.interaction_items_item}>
      <h2>{props.title}</h2>
      <div className={Styles.interaction_items_item_box}>
        <p>
          Севис:<span>Тел: {props.service_tel}</span>
        </p>
        <p>
          Логистика:<span>Тел: {props.logistic_tel}</span>
        </p>
        <p>
          Адрес:<span>{props.address}</span>
        </p>
      </div>
    </li>
  );
};
export { InteractionItem };
