import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";

import { Button } from "components/button";
import { CheckboxWithLabel } from "components/checkbox";

const NinthForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };
  return (
    <div className={Styles.ninth_form}>
      <div className={Styles.ninth_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования: ЧИЛЛЕР
          (ВОДООХЛАЖДАЮЩАЯ ХОЛОДИЛЬНАЯ МАШИНА)
        </p>
      </div>
      <div className={Styles.ninth_form_inputs_container}>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
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
          <div className={Styles.ninth_form_right_block}>
            <textarea placeholder="Объект" />
          </div>
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
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
          <div className={Styles.ninth_form_right_block}>
            <textarea placeholder="Адрес объекта" />
          </div>
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
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
          <div className={Styles.ninth_form_right_block}>
            <div className={Styles.ninth_form_right_block}>
              <div className={Styles.ninth_form_right_block_middle_input}>
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
        <div className={`${Styles.ninth_form_radios} ${Styles.border_bottom}`}>
          <RadioBoxContainer title={"Проектировщик"} />
          <RadioBoxContainer title={"Заказчик"} />
          <RadioBoxContainer title={"Строительно-монтажная организация"} />
        </div>
        <div className={Styles.ninth_form_top_title}>
          <p>Характеристики установки</p>
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
            <h3>Требуемая холодильная мощность (при заданных ниже условиях)</h3>
          </div>
          <div
            className={`${Styles.ninth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Мощность в кВт"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
            <h3>Тип хладагента</h3>
          </div>
          <div
            className={`${Styles.ninth_form_right_block} ${Styles.right_border}`}
          >
            <RadioBoxContainer title={"R407C"} />
            <RadioBoxContainer title={"R134"} />
          </div>
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
            <h3>Процентное содержание воды </h3>
          </div>
          <div
            className={`${Styles.ninth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Содержание в %"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
            <h3>Процентное содержание этиленгликоля</h3>
          </div>
          <div
            className={`${Styles.ninth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Содержание в %"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
            <h3>Процентное содержание пропиленгликоля</h3>
          </div>
          <div
            className={`${Styles.ninth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Содержание в %"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.ninth_form_top_title}>
          <p>Параметры работы блока в режиме охлаждения:</p>
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
            <h3>Температура наружного воздуха, 0C (стандартно +300C)</h3>
          </div>
          <div
            className={`${Styles.ninth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Температура воздуха 0C"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
            <h3>
              Температура охлажденной жидкости на выходе* (от -70C, стандартно
              +70C)
            </h3>
          </div>
          <div
            className={`${Styles.ninth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Температура воздуха 0C"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
            <h3>
              Температура жидкости на входе* (не более +200C, стандартно +120C)
            </h3>
          </div>
          <div
            className={`${Styles.ninth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Температура воздуха 0C"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.ninth_form_top_title}>
          <p>Тип чиллера (необходимо выбрать только один!)</p>
        </div>
        <div className={Styles.ninth_form_columns_block_last}>
          <div className={Styles.input_and_title}>
            <p>
              <b>Режим работы:</b> только холод
            </p>
          </div>
          <CheckboxWithLabel
            name={"rcr"}
            id={"rcr"}
            title={"Воздушного охлаждения с осевыми вентиляторами"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"ere"}
            id={"ere"}
            title={"С водяным охлаждением"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"reert"}
            id={"reert"}
            title={"Для работы с выносным конденсатором"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
        </div>
        <div
          className={`${Styles.ninth_form_top_title} ${Styles.border_top_title}`}
        >
          <p>Дополнительные опции (по желанию заказчика)</p>
        </div>
        <div className={Styles.ninth_form_columns_block_last}>
          <CheckboxWithLabel
            name={"rxcr"}
            id={"rxcr"}
            title={"Антивибрационные опоры"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"xere"}
            id={"xere"}
            title={
              "Регулятор скорости вращения вентилятора в режиме охлаждения до -50C"
            }
            onChangeData={() => handleOnchangeCheckbox()}
          />
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}>
            <h3>Насосная станция</h3>
          </div>
          <div
            className={`${Styles.ninth_form_right_block} ${Styles.right_border}`}
          >
            <RadioBoxContainer title={"Да"} />
            <RadioBoxContainer title={"Нет"} />
          </div>
        </div>
        <div className={Styles.ninth_form_inputs}>
          <div className={Styles.ninth_form_left_block}></div>
          <div
            className={`${Styles.ninth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.input_width}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Расход жидкости (по проекту) л/с"}
                value={""}
              />
            </div>
            <div className={Styles.input_width}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Напор на сеть (по проекту) Па"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.textarea_block}>
          <div className={Styles.third_form_textarea}>
            <textarea placeholder="Дополнительные требования заказчика" />
          </div>
        </div>
        <div
          className={`${Styles.ninth_form_button} ${Styles.border_top_title}`}
        >
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { NinthForm };
