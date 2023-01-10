import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";

import { Button } from "components/button";

const SixthForm = () => {
  return (
    <div className={Styles.sixth_form}>
      <div className={Styles.sixth_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования: ВОЗДУШНАЯ
          ЗАВЕСА AERO BLAST ВКЗ
        </p>
      </div>
      <div className={Styles.sixth_form_inputs_container}>
        <div className={Styles.sixth_form_inputs}>
          <div className={Styles.fourth_form_left_block}>
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
          <div className={Styles.fourth_form_right_block}>
            <textarea placeholder="Объект" />
          </div>
        </div>
        <div className={Styles.sixth_form_inputs}>
          <div className={Styles.fourth_form_left_block}>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Регион (город) *"}
                className={Styles.input__item}
                value={""}
              />
            </div>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Тел./факс *"}
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
          <div className={Styles.fourth_form_right_block}>
            <textarea placeholder="Адрес объекта" />
          </div>
        </div>
        <div className={Styles.sixth_form_inputs}>
          <div className={Styles.fourth_form_left_block}>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Email *"}
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
          <div className={Styles.fourth_form_right_block}>
            <textarea placeholder="Система" />
            <div className={Styles.fourth_form_right_block}>
              <div className={Styles.fourth_form_right_block_middle_input}>
                <LayoutInput
                  name={"data"}
                  id={"email_id"}
                  title={"Дата *"}
                  className={Styles.input__item}
                  value={""}
                  type={"date"}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.sixth_form_radios}>
          <RadioBoxContainer title={"Проектировщик"} />
          <RadioBoxContainer title={"Заказчик"} />
          <RadioBoxContainer title={"Строительно-монтажная организация"} />
        </div>
        <div className={Styles.sixth_form_top_title}>
          <p>Размеры помещения в зоне установки завесы</p>
        </div>
        <div className={Styles.sixth_form_inputs}>
          <div className={Styles.sixth_form_left_flex}>
            <p>Свободное пространство от края ворот (вид из помещения):</p>
            <div className={Styles.sixth_form_left_flex_element}>
              <p className={Styles.fifth_form_air_P}>Cлева от ворот</p>
              <div className={Styles.third_form_columns_block_right}>
                <RadioBoxContainer title={"ЕС (мотор-колесо)"} />
                <RadioBoxContainer title={"С прямым приводом (ВЕЗА-ВОСК)"} />
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className={Styles.fourth_form_textarea}>
            <textarea placeholder="Дополнительные сведения" />
          </div>
        </div>
        <div className={Styles.fifth_form_button}>
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { SixthForm };
