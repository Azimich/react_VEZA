import React from "react";
import Styles from "./QuestionnariesForms.module.scss";
import { InputUsually } from "components/input";

const FirstForm = () => {
  return (
    <div className={Styles.first_form}>
      <div className={Styles.first_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования: КЛАПАН
          ПРОТИВОПОЖАРНЫЙ УНИВЕРСАЛЬНЫЙ КПУ-1Н
        </p>
      </div>
      <div className={Styles.first_form_top_first}>
        <div className={Styles.first_top}>
          Маркировка клапана (согласно каталогу на противопожарные клапаны ООО
          "ВЕЗА"): КПУ-1Н
          <span className={Styles.input}>
            <InputUsually name={"email"} id={"email_id"} title={""} />
          </span>
          (если известно)
        </div>
        <p>
          (при заказе клапанов различных габаритов одинаковой комплектации
          размеры АхВ или D и их количество указывать в нижеприведенной таблице)
        </p>
      </div>
    </div>
  );
};

export { FirstForm };
