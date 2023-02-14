import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";

import { Button } from "components/button";
import { CheckboxWithLabel } from "components/checkbox";

const EleventhForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };

  return (
    <div className={Styles.eleventh_form}>
      <div className={Styles.eleventh_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования:
          КОНДИЦИОНЕР AIRMATE
        </p>
      </div>
      <div className={Styles.eleventh_form_inputs_container}>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
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
          <div className={Styles.eleventh_form_right_block}>
            <textarea placeholder="Объект" />
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
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
          <div className={Styles.tenth_form_right_block}>
            <textarea placeholder="Адрес объекта" />
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
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
          <div className={Styles.eleventh_form_right_block}>
            <div className={Styles.eleventh_form_right_block}>
              <div className={Styles.eleventh_form_right_block_middle_input}>
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
        <div className={Styles.eleventh_form_radios}>
          <RadioBoxContainer title={"Проектировщик"} />
          <RadioBoxContainer title={"Заказчик"} />
          <RadioBoxContainer title={"Строительно-монтажная организация"} />
        </div>
        <div
          className={`${Styles.eleventh_form_top_title} ${Styles.border_title}`}
        >
          <p>Характеристики установки</p>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={`${Styles.eleventh_form_right_block}`}>
            <p className={Styles.p}>Тип кондиционера:</p>
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"airmate 800"} />
              <RadioBoxContainer title={"airmate 1200"} />
              <RadioBoxContainer title={"airmate 2000"} />
              <RadioBoxContainer title={"airmate 4000"} />
              <RadioBoxContainer title={"airmate 6000"} />
            </div>
            <div className={Styles.inputs_row}>
              <LayoutInput
                name={""}
                id={""}
                title={"Количество, шт"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <p>Сторона обслуживания:</p>
              <RadioBoxContainer title={"Сверху"} />
              <RadioBoxContainer title={"Снизу"} />
            </div>
            <div className={Styles.inputs_row}>
              <p>Подвод теплоносителя:</p>
              <RadioBoxContainer title={"Справа"} />
              <RadioBoxContainer title={"Слева"} />
            </div>
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3 className={Styles.eleventh_form_h3}>Состав кондиционера</h3>
          </div>
          <div
            className={`${Styles.eleventh_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <h3 className={Styles.eleventh_form_h3}>
              Технические характеристики
            </h3>
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3>Воздухозаборный клапан</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <p>Управление:</p>
              <RadioBoxContainer title={"Электроприводом"} />
              <RadioBoxContainer title={"Ручной привод"} />
            </div>
            <div className={Styles.inputs_row}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Рециркуляция:"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tвн = oC"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tвв = oC"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"φвн = %"}
                value={""}
              />
            </div>
            <p>или</p>
            <div className={Styles.inputs_row}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tсм = oC"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"φсм = %"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"Гибкая вставка"} />
            </div>
            <div></div>
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3>Фильтр грубой очистки ячейковый G3 (плоский)</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"G3"} />
            </div>
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3>Фильтр грубой и тонкой очистки карманный G4 … F9</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <CheckboxWithLabel
                name={"сс"}
                id={"сс"}
                title={"G4"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"ссс"}
                id={"ссс"}
                title={"F5"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"ыы"}
                id={"ыы"}
                title={"F6"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"ss"}
                id={"ss"}
                title={"F7"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"ff"}
                id={"ff"}
                title={"F8"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"gg"}
                id={"gg"}
                title={"F9"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3>Теплообменник: нагреватель водяной</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <p>Температура воздуха:</p>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tнар = oC"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tвых = oC"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <p>Температура воды:</p>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tжн = oC"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tжк = oC"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <p>Обводной канал управление:</p>
              <RadioBoxContainer title={"Электропривод"} />
              <RadioBoxContainer title={"Ручной привод"} />
            </div>
            <div className={Styles.inputs_row}>
              <p>Мощность (не обязательно):</p>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Введите мощность"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3>Теплообменник: нагреватель электрический</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <p>Температура воздуха:</p>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tвх = oC"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tвых = oC"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <p>Мощность (не обязательно):</p>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Введите мощность"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3>Теплообменник: охладитель</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <p>Температура воздуха:</p>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tнар = oC"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tк = oC"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"Pн = oC"}
                value={""}
              />
              <LayoutInput name={"email"} id={""} title={"φк = %"} value={""} />
            </div>
            <div className={Styles.inputs_row}>
              <p>Тип хладагента:</p>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Введите тип"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tжн = oC"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"Tж = oC"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <p>Мощность (не обязательно):</p>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Введите мощность"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3>Вентилятор</h3>
          </div>
          <div
            className={`${Styles.eleventh_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <p>Введите производительность:</p>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Производительность"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <p>Свободное давление (в сеть):</p>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Введите давление"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3>Шумоглушитель</h3>
          </div>
          <div
            className={`${Styles.eleventh_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <p>Длина пластин (мм):</p>
              <CheckboxWithLabel
                name={"add"}
                id={"add"}
                title={"500"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"dd"}
                id={"dd"}
                title={"1000"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
          </div>
        </div>
        <div className={Styles.eleventh_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Комплект автоматики</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <RadioBoxContainer
                title={
                  "Да (необходимо заполнить опросный лист для комплекта автоматики)"
                }
              />
            </div>
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"Нет"} />
            </div>
          </div>
        </div>
        <div className={Styles.textarea_block}>
          <div className={Styles.third_form_textarea}>
            <textarea placeholder="Дополнительные сведения" />
          </div>
        </div>
        <div className={Styles.eleventh_form_button}>
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { EleventhForm };
