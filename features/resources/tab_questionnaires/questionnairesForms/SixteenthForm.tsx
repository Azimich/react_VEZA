import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";

import { Button } from "components/button";
import { CheckboxWithLabel } from "components/checkbox";

const SixteenthForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };

  return (
    <div className={Styles.sixteenth_form}>
      <div className={Styles.sixteenth_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования:
          ВЕНТИЛЯТОРЫ ИНДУСТРИАЛЬНЫЕ РАДИАЛЬНЫЕ ВИР
        </p>
      </div>
      <div className={Styles.inputs}>
        <div className={Styles.sixteenth_form_inputs}>
          <p>Маркировка вентилятор индустриальный радиальный ВИР</p>
          <LayoutInput
            name={"email"}
            id={"email_id"}
            title={"Введите данные"}
            className={Styles.input__item}
            value={""}
          />
          (если известно)
        </div>
      </div>
      <div className={Styles.inputs}>
        <div className={Styles.sixteenth_form_inputs}>
          <p>допускается указывать аналог другого производителя:</p>
          <LayoutInput
            name={"email"}
            id={"email_id"}
            title={"Указать аналог"}
            className={Styles.input__item}
            value={""}
          />
        </div>
      </div>
      <div className={Styles.sixteenth_form_inputs_container}>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
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
          <div className={Styles.sixteenth_form_right_block}>
            <textarea placeholder="Объект" />
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
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
          <div className={Styles.sixteenth_form_right_block}>
            <textarea placeholder="Адрес объекта" />
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
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
          <div className={Styles.sixteenth_form_right_block}>
            <div className={Styles.sixteenth_form_right_block}>
              <div className={Styles.sixteenth_form_right_block_middle_input}>
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
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Производительность Q, м3/час </h3>
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите производительность"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Давление полное Pv, Па (при t = 20oC)</h3>
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите давление"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Давление статическое Psv, Па (при t = 20oC)</h3>
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите давление"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Исполнение</h3>
          </div>
          <div
            className={`${Styles.sixteenth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <div className={`${Styles.sixteenth_form_right_block}`}>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"Н - общепромышленное"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"Ж - теплостойкое"} />
              </div>
              <div className={Styles.inputs_row}>
                <p>Максимальная температура перемещаемой среды:</p>
                <LayoutInput name={""} id={""} title={"t = oC"} value={""} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"К1 - коррозионностойкое"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"К1Ж - коррозионно-теплостойкое"} />
              </div>
              <div className={Styles.inputs_row}>
                <p>Максимальная температура перемещаемой среды:</p>
                <LayoutInput name={""} id={""} title={"t = oC"} value={""} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"В - взрывозащинное"} />
              </div>
              <div className={Styles.inputs_row}>
                <p>Максимальная температура перемещаемой среды:</p>
                <LayoutInput name={""} id={""} title={"t = oC"} value={""} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer
                  title={"ВК1 - взрывозащищенное коррозионностойкое"}
                />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer
                  title={"ВКЗ - взрывозащищенное коррозионностойкое"}
                />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer
                  title={"ВК1Ж - взрывозащищенное коррозионно-теплостойкое"}
                />
              </div>
              <div className={Styles.inputs_row}>
                <p>Максимальная температура перемещаемой среды:</p>
                <LayoutInput name={""} id={""} title={"t = oC"} value={""} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"С - сейсмостойкое"} />
              </div>
              <div className={Styles.inputs_row}>
                <p>
                  Класс безопасности по ОПБ-88/97, категория сейсмостойкости по
                  ПНАЭГ-5-006-87:
                </p>
                <LayoutInput
                  name={""}
                  id={""}
                  title={"Класс безопасности"}
                  value={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Температура перемещаемой среды, oC</h3>
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите температуру"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Агрессивные компоненты</h3>
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите данные"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Концентрация, мг/м3</h3>
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите данные"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Климатическое исполнение </h3>
          </div>
          <div
            className={`${Styles.sixteenth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <div className={`${Styles.sixteenth_form_right_block}`}>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"У1"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"У2"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"У3"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"УХЛ1"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"УХЛ2"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"УХЛ3"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"Т1"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"Т2"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"Т3"} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Установочная мощность двигателя, кВт</h3>
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput name={""} id={""} title={"Введите кВт"} value={""} />
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Частота вращения двигателя, мин-1</h3>
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Вращения двигателя"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Напряжение двигателя, В</h3>
          </div>
          <div
            className={`${Styles.sixteenth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <div className={`${Styles.sixteenth_form_right_block}`}>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"220 / 380"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"380 / 660"} />
              </div>
              <div className={Styles.inputs_row}>
                <LayoutInput name={""} id={""} title={"Другое"} value={""} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>
              Необходимость поставки пускового оборудования или частотного
              преобразователя
            </h3>
          </div>
          <div
            className={`${Styles.sixteenth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <div className={`${Styles.sixteenth_form_right_block}`}>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"Да"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"Нет"} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>
              Категория перемещаемой среды по взрывоопасности (если имеют место
              взрывоопасные смеси) по ГОСТ 12.1.011-78
            </h3>
          </div>
          <div
            className={`${Styles.sixteenth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <div className={`${Styles.sixteenth_form_right_block}`}>
              <div className={Styles.inputs_row}>
                <LayoutInput
                  name={""}
                  id={""}
                  title={"Введите категорию"}
                  value={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Конструктивное исполнение</h3>
          </div>
          <div
            className={`${Styles.sixteenth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <div className={`${Styles.sixteenth_form_right_block}`}>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"1 (прямой привод)"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer
                  title={"3 (прямой привод, с подшипниками)"}
                />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"5 (ременной привод)"} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.sixteenth_form_images_container}>
          <div className={Styles.sixteenth_form_images_block}>
            <p className={Styles.kanal}>
              Направление вращение рабочего колеса и разворот корпуса
              вентилятора (со стороны двигателя)
            </p>
            <RadioBoxContainer title={"LG"} />
            <img src="/images/vir_1.webp" alt={"title"} />
          </div>
          <div className={Styles.sixteenth_form_images_block}>
            <RadioBoxContainer title={"RD"} />
            <img src="/images/vir_1.webp" alt={"title"} />
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>Дополнительная комплектация:</h3>
          </div>
          <div
            className={`${Styles.sixteenth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <div className={`${Styles.sixteenth_form_right_block}`}>
              <div className={Styles.inputs_row}>
                <CheckboxWithLabel
                  name={"jj"}
                  id={"jj"}
                  title={"Гибкая вставка вход"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
              <div className={Styles.inputs_row}>
                <CheckboxWithLabel
                  name={"hh"}
                  id={"hh"}
                  title={"Гибкая вставка на выход"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
              <div className={Styles.inputs_row}>
                <CheckboxWithLabel
                  name={"bb"}
                  id={"bb"}
                  title={"Фланец ответный вход"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
              <div className={Styles.inputs_row}>
                <CheckboxWithLabel
                  name={"ff"}
                  id={"ff"}
                  title={"Фланец ответный выход"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
              <div className={Styles.inputs_row}>
                <CheckboxWithLabel
                  name={"gg"}
                  id={"gg"}
                  title={"Виброизоляторы"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
              <div className={Styles.inputs_row}>
                <CheckboxWithLabel
                  name={"aa"}
                  id={"aa"}
                  title={"Дренаж улитки"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
              <div className={Styles.inputs_row}>
                <CheckboxWithLabel
                  name={"ss"}
                  id={"ss"}
                  title={"Динспекционная дверь"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
              <div className={Styles.inputs_row}>
                <CheckboxWithLabel
                  name={"dd"}
                  id={"dd"}
                  title={"Направляющий аппарат"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
              <div className={Styles.inputs_row}>
                <CheckboxWithLabel
                  name={"fbf"}
                  id={"fbf"}
                  title={"Защитная сетка вход"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer
                  title={"3 (прямой привод, с подшипниками)"}
                />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"5 (ременной привод)"} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.sixteenth_form_inputs}>
          <div className={Styles.sixteenth_form_left_block}>
            <h3>
              Необходимость поставки пускового оборудования или частотного
              преобразователя
            </h3>
          </div>
          <div
            className={`${Styles.sixteenth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <div className={`${Styles.sixteenth_form_right_block}`}>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"Да"} />
              </div>
              <div className={Styles.inputs_row}>
                <RadioBoxContainer title={"Нет"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={Styles.third_form_textarea}>
            <textarea placeholder="Дополнительные сведения" />
          </div>
        </div>
        <div className={Styles.twelfth_form_button}>
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { SixteenthForm };
