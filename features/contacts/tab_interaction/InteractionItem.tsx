import { Interaction } from "./Interaction";
import { FC } from "react";
import Styles from "./Interaction.module.scss";

const InteractionItem: FC<Interaction> = ({
  address,
  email,
  logistic_tel,
  secretary_tel,
  service_tel,
  title,
}) => {
  return (
    <li className={Styles.interaction_items_item}>
      <h2>{title}</h2>
      <div className={Styles.interaction_items_item_box}>
        <p>
          Севис:
          <span>Тел: {service_tel.map((e) => e)}</span>
        </p>
        <p>
          Логистика:
          <span>Тел: {logistic_tel.map((e) => e)}</span>
        </p>

        <p>
          Секретарь:<span>Тел: {secretary_tel.map((e) => e)}</span>
        </p>

        <p>
          Почта:<span>{email}</span>
        </p>
        <p>
          Адрес:<span>{address}</span>
        </p>
      </div>
    </li>
  );
};

export { InteractionItem };
