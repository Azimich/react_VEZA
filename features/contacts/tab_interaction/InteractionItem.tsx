import { IInteraction } from "./Interaction";
import { FC } from "react";
import Styles from "./Interaction.module.scss";

const InteractionItem: FC<IInteraction> = ({
  logistic_tel,
  secretary_tel,
  service_tel,
  object,
}) => {
  return (
    <li className={Styles.interaction_items_item}>
      <h2>{object.name}</h2>
      <div className={Styles.interaction_items_item_box}>
        <div>
          Севис:
          <span>
            {service_tel.map((e: string, i) => {
              return (
                <span key={i}>
                  <a href={"tel:" + e}>{e}</a>
                </span>
              );
            })}
          </span>
        </div>
        <div>
          Логистика:
          <span>
            {logistic_tel.map((e: string, i) => {
              return (
                <span key={i}>
                  <a href={"tel:" + e}>{e}</a>
                </span>
              );
            })}
          </span>
        </div>

        {secretary_tel && (
          <div>
            Секритариат:
            <p>
              {secretary_tel?.map((e: string, i) => {
                return (
                  <span key={i}>
                    <a href={"tel:" + e}>{e}</a>
                  </span>
                );
              })}
            </p>
          </div>
        )}

        <div>
          Почта:
          <span>
            <a href={"email:" + object.email}>{object.email}</a>
          </span>
        </div>
        <div>
          Адрес:<span>{object.address}</span>
        </div>
      </div>
    </li>
  );
};

export { InteractionItem };
