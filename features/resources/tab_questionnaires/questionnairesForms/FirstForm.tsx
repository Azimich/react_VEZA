import React from "react";
import Styles from "./QuestionnariesForms.module.scss";
import { LayoutInput } from "components/input";

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
        <div className={Styles.middle_block}>
          Маркировка клапана (согласно каталогу на противопожарные клапаны ООО
          "ВЕЗА"): КПУ-1Н (если известно)
          <div className={Styles.input}>
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Введите данные"}
              className={Styles.input__item}
              value={""}
            />
          </div>
        </div>
        <p>
          (при заказе клапанов различных габаритов одинаковой комплектации
          размеры АхВ или D и их количество указывать в нижеприведенной таблице)
        </p>
      </div>
      <div className={Styles.top_content_last_block}>
        <p>допускается указывать аналог другого производителя:</p>
        <div className={Styles.input}>
          <LayoutInput
            name={"email"}
            id={"email_id"}
            title={"Введите почту *"}
            className={Styles.input__item}
            value={""}
          />
        </div>
      </div>
      <div className={Styles.first_form_inputs_container}>
        <div className={Styles.first_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Организация *"}
                className={Styles.input__item}
                value={""}
              />
            </div>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Контактное лицо *"}
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
          <div className={Styles.first_form_right_block}>
            <textarea placeholder="Объект" />
          </div>
        </div>
        <div className={Styles.first_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Тел *"}
                className={Styles.input__item}
                value={""}
              />
            </div>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"E-mail *"}
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
          <div className={Styles.first_form_right_block}>
            <textarea placeholder="Адрес объекта" />
          </div>
        </div>
        <div className={Styles.first_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Регион *"}
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
          <div className={Styles.first_form_right_block}>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Дата *"}
                className={Styles.input__item}
                value={""}
                type={"date"}
              />
            </div>
          </div>
        </div>
        <div className={Styles.first_form_text}>
          <p className={Styles.left_text}>Размеры А*В (ширина*высота) или D</p>
          <p className={Styles.right_text}>количество</p>
        </div>
      </div>
    </div>
  );
};

export { FirstForm };
