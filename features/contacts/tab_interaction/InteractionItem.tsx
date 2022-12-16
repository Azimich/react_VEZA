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
          <span>
            {service_tel.map((e, i) => {
              return (
                <span>
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
                <span>
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
                  <span>
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
            <a href={"email:" + email}>{email}</a>
          </span>
        </p>
        <p>
          Адрес:<span>{address}</span>
        </p>
      </div>
    </li>
  );
};

export { InteractionItem };
