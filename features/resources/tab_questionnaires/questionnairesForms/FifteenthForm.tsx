import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";

import { Button } from "components/button";
import { CheckboxWithLabel } from "components/checkbox";

const FifteenthForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };

  return (
    <div className={Styles.fifteenth_form}>
      <div className={Styles.fifteenth_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования: ВОЗДУШНЫЕ
          КОНДЕНСАТОРЫ МАВО.К
        </p>
      </div>
      <div className={Styles.fifteenth_form_inputs_container}>
        <div className={Styles.fifteenth_form_inputs}>
          <div className={Styles.fifteenth_form_left_block}>
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
          <div className={Styles.fifteenth_form_right_block}>
            <textarea placeholder="Объект" />
          </div>
        </div>
        <div className={Styles.fifteenth_form_inputs}>
          <div className={Styles.fifteenth_form_left_block}>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Email *"}
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
          <div className={Styles.fifteenth_form_right_block}>
            <textarea placeholder="Адрес объекта" />
          </div>
        </div>
        <div className={Styles.fifteenth_form_inputs}>
          <div className={Styles.fifteenth_form_left_block}>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Регион (город) *"}
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
          <div className={Styles.fifteenth_form_right_block}>
            <div className={Styles.fifteenth_form_right_block}>
              <div className={Styles.fifteenth_form_right_block_middle_input}>
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
        <div className={Styles.fifteenth_form_radios}>
          <RadioBoxContainer title={"Проектировщик"} />
          <RadioBoxContainer title={"Заказчик"} />
          <RadioBoxContainer title={"Строительно-монтажная организация"} />
        </div>
        <div
          className={`${Styles.fifteenth_form_top_title} ${Styles.border_title}`}
        >
          <p>Параметры работы холодильной машины</p>
        </div>
        <div className={Styles.fifteenth_form_inputs}>
          <div className={`${Styles.fifteenth_form_right_block}`}>
            <div className={Styles.inputs_row}>
              <p>Типоразмер драйкуллера (если известен) МАВО.К</p>
              <LayoutInput name={""} id={""} title={"Типоразмер"} value={""} />
            </div>
            <div className={Styles.inputs_row}>
              <p>Количество:</p>
              <LayoutInput name={""} id={""} title={"Количество:"} value={""} />
            </div>
            <div className={Styles.inputs_row}>
              <p>Хладагент, наименование:</p>
              <LayoutInput
                name={""}
                id={""}
                title={"Наименование"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <p>Теплопроизводительность кВт:</p>
              <LayoutInput name={""} id={""} title={"кВт"} value={""} />
            </div>
            <div className={Styles.inputs_row}>
              <p>Температура конденсации хладогента, 0С</p>
              <LayoutInput
                name={""}
                id={""}
                title={"Температура 0С"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <p>Конечная температура теплоносителя, 0С</p>
              <LayoutInput
                name={""}
                id={""}
                title={"Температура 0С"}
                value={""}
              />
            </div>
            <p>Параметры окружающего воздуха:</p>
            <div className={Styles.inputs_row}>
              <p>Температура воздуха охлаждающая конденсатор, 0С</p>
              <LayoutInput
                name={""}
                id={""}
                title={"Температура 0С"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <p>Высота над уровнем моря, м: </p>
              <LayoutInput
                name={""}
                id={""}
                title={"Введите высоту"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={`${Styles.fifteenth_form_top_title}`}>
          <p>Исполнение агрегата и дополнительные возможности комплектации</p>
        </div>
        <div className={Styles.fifteenth_form_inputs}>
          <div className={Styles.fifteenth_form_left_block}>
            <h3>Положение агрегата:</h3>
            <RadioBoxContainer title={"Горизонтальное"} />
            <RadioBoxContainer title={"Вертикальное"} />
          </div>
          <div
            className={`${Styles.fifteenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <CheckboxWithLabel
                name={"add"}
                id={"add"}
                title={"Взрывозащищенное исполнение"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"1ExdllCT4"} />
              <RadioBoxContainer title={"1ExdllBT4"} />
              <RadioBoxContainer title={"1ExdellCT4"} />
              <RadioBoxContainer title={"1ExdlleBT4"} />
            </div>
          </div>
        </div>
        <div className={Styles.fifteenth_form_inputs}>
          <div className={`${Styles.fifteenth_form_right_block}`}>
            <p className={Styles.kanal}>Упаковка</p>
            <div className={Styles.inputs_row}>
              <RadioBoxContainer
                title={"Обтяжка полиэтиленовой пленкой на поддоне"}
              />
              <RadioBoxContainer title={"Деревянная упаковка (обрешетка)"} />
            </div>
            <CheckboxWithLabel
              name={"vv"}
              id={"vv"}
              title={
                "Поставка без вентиляторов (для комплектации заказчиком собственными вентиляторами)"
              }
              onChangeData={() => handleOnchangeCheckbox()}
            />
          </div>
        </div>
        <div className={Styles.textarea_block}>
          <div className={Styles.fifteenth_form_textarea}>
            <textarea placeholder="Дополнительные сведения" />
          </div>
        </div>
        <div className={Styles.fifteenth_form_button}>
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { FifteenthForm };
