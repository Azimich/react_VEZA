import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";

import { Button } from "components/button";
import { CheckboxWithLabel } from "components/checkbox";

const SeventhForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };

  return (
    <div className={Styles.seventh_form}>
      <div className={Styles.seventh_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования: АГРЕГАТЫ
          ВОЗДУШНОГО ОТОПЛЕНИЯ АВО
        </p>
      </div>
      <div className={Styles.seventh_form_inputs_container}>
        <div className={Styles.seventh_form_inputs}>
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
        <div className={Styles.seventh_form_inputs}>
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
        <div className={Styles.seventh_form_inputs}>
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
        <div className={Styles.seventh_form_radios}>
          <RadioBoxContainer title={"Проектировщик"} />
          <RadioBoxContainer title={"Заказчик"} />
          <RadioBoxContainer title={"Строительно-монтажная организация"} />
        </div>
        <div className={Styles.seventh_form_top_title}>
          <p>Размеры помещения в зоне установки завесы</p>
        </div>
        <div className={Styles.seventh_form_middle_blocks}>
          <div className={Styles.seventh_form_middle_blocks_left}>
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Типоразмер АВО"}
              className={Styles.input__item}
              value={""}
            />
          </div>
          <div className={Styles.seventh_form_middle_blocks_right}>
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Количество, шт"}
              className={Styles.input__item}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.seventh_form_inputs}>
          <div className={Styles.seventh_form_left_block}>
            <h3 className={Styles.seventh_form_h3}>Комплектация АВО</h3>
          </div>
          <div
            className={`${Styles.seventh_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <p>Технические характеристики</p>
              <div className={Styles.radios_middle_bottom_checkbox_column}>
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"tн = 0С"}
                  className={Styles.input__item}
                  value={""}
                />
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"Tн (Ts) = 0С."}
                  className={Styles.input__item}
                  value={""}
                />
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"Tк = 0С"}
                  className={Styles.input__item}
                  value={""}
                />
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"Q = КВт."}
                  className={Styles.input__item}
                  value={""}
                />
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"Теплоноситель"}
                  className={Styles.input__item}
                  value={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.seventh_form_inputs}>
          <div className={Styles.seventh_form_left_block}>
            <h3 className={Styles.seventh_form_h3}>Дополнительно</h3>
          </div>
          <div
            className={`${Styles.seventh_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <p>Упаковка</p>
              <div
                className={`${Styles.radios_middle_bottom_checkbox_column} ${Styles.middle_checkbox_column}`}
              >
                <CheckboxWithLabel
                  name={"us"}
                  id={"us"}
                  title={"Коробки из гофрированного картона с обрешеткой"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"au"}
                  id={"au"}
                  title={"Коробки из гофрированного картона без обрешетки"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"ssu"}
                  id={"ssu"}
                  title={"Сплошной ящик"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"uas"}
                  id={"uas"}
                  title={"Обтяжка полиэтиленовой пленкой на поддоне"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${Styles.seventh_form_button} ${Styles.border_top_title}`}
        >
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { SeventhForm };
