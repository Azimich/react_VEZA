import { Interaction } from "./Interaction";
import { FC } from "react";
import Styles from "./Interaction.module.scss";

const InteractionItem: FC<Interaction> = ({
  logistic_tel,
  secretary_tel,
  service_tel,
  object,
}) => {
  return (
    <li className={Styles.interaction_items_item}>
      <h2>{object.name}</h2>
      <div className={Styles.interaction_items_item_box}>
        <p>
          Севис:
          <span>
            {service_tel.map((e, i) => {
              return (
                <span key={i}>
                  <a href={"tel:" + e}>
                    {i > 0 ? "" : "Тел:"} {e}
                  </a>
                </span>
              );
            })}
          </span>
        </p>
        <p>
          Логистика:
          <span>
            {logistic_tel.map((e, i) => {
              return (
                <span key={i}>
                  <a href={"tel:" + e}>
                    {i > 0 ? "" : "Тел:"} {e}
                  </a>
                </span>
              );
            })}
          </span>
        </p>

        {secretary_tel && (
          <p>
            Секритариат:
            <p>
              {secretary_tel?.map((e, i) => {
                return (
                  <span key={i}>
                    <a href={"tel:" + e}>
                      {i > 0 ? "" : "Тел:"} {e}
                    </a>
                  </span>
                );
              })}
            </p>
          </p>
        )}

        <p>
          Почта:
          <span>
            <a href={"email:" + object.email}>{object.email}</a>
          </span>
        </p>
        <p>
          Адрес:<span>{object.address}</span>
        </p>
      </div>
    </li>
  );
};

export { InteractionItem };
