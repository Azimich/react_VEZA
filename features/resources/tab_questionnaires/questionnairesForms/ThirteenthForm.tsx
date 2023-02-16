import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";

import { Button } from "components/button";
import { CheckboxWithLabel } from "components/checkbox";

const ThirteenthForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };

  return (
    <div className={Styles.thirteenth_form}>
      <div className={Styles.twelfth_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования: КЛАПАН
          ПРОТИВОПОЖАРНЫЙ УНИВЕРСАЛЬНЫЙ КПУ-2Н
        </p>
      </div>
      <div className={Styles.twelfth_form_top_first}>
        <div className={Styles.middle_block}>
          Маркировка клапана (согласно каталогу на противопожарные клапаны ООО
          ВЕЗА): КПУ-2Н
          <div className={Styles.input}>
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Введите данные"}
              className={Styles.input__item}
              value={""}
            />
          </div>
          (если известно)
        </div>
        <p>
          (при заказе клапанов различных габаритов одинаковой комплектации
          размеры АхВ или D и их количество указывать в нижеприведенной таблице)
        </p>
      </div>
      <div className={Styles.inputs}>
        <div className={Styles.twelfth_form_inputs}>
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
      <div className={Styles.twelfth_form_inputs_container}>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
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
          <div className={Styles.twelfth_form_right_block}>
            <textarea placeholder="Объект" />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
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
          <div className={Styles.twelfth_form_right_block}>
            <textarea placeholder="Адрес объекта" />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
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
          <div className={Styles.twelfth_form_right_block}>
            <div className={Styles.twelfth_form_right_block}>
              <div className={Styles.twelfth_form_right_block_middle_input}>
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
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3 className={Styles.eleventh_form_h3}>
              Размеры А*В (ширина*высота) или D
            </h3>
          </div>
          <div
            className={`${Styles.eleventh_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <h3 className={Styles.eleventh_form_h3}>Количество</h3>
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.twelfth_form_left_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Введите размер"}
              value={""}
            />
          </div>
          <div
            className={`${Styles.twelfth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <LayoutInput
              name={""}
              id={""}
              title={"Введите количество"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3 className={Styles.eleventh_form_h3}>Тип клапана</h3>
          </div>
          <div
            className={`${Styles.eleventh_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <RadioBoxContainer title={"Нормально открытый"} />
            <RadioBoxContainer title={"Нормально закрытый"} />
            <RadioBoxContainer title={"Дымовой"} />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3 className={Styles.eleventh_form_h3}>Исполнение</h3>
          </div>
          <div
            className={`${Styles.eleventh_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <RadioBoxContainer title={"Общепромышленное"} />
            <RadioBoxContainer title={"Взрывозащищенное"} />
            <RadioBoxContainer title={"Коррозионностойкое"} />
            <RadioBoxContainer
              title={"Взрывозащищенное и коррозионностойкое"}
            />
            <RadioBoxContainer
              title={"Морозостойкое, морозостойкое и коррозионностойкое"}
            />
            <RadioBoxContainer title={"Морозостойкое и взрывозащищенное"} />
            <RadioBoxContainer
              title={"Морозостойкое и взрывозащищенное и коррозионностойкое"}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3 className={Styles.eleventh_form_h3}>Использование</h3>
          </div>
          <div
            className={`${Styles.eleventh_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <RadioBoxContainer title={"Стеновое (1 фланец) *"} />
            <RadioBoxContainer title={"Канальное (2 фланца) *"} />
            <RadioBoxContainer
              title={"Ниппельное (только для круглого сечения)"}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3 className={Styles.eleventh_form_h3}>
              Тип исполнительного механизма
            </h3>
          </div>
          <div
            className={`${Styles.eleventh_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <RadioBoxContainer title={"Электропривод"} />
            <RadioBoxContainer title={"Электромагнитный привод"} />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3 className={Styles.eleventh_form_h3}>Комплектующие</h3>
          </div>
          <div
            className={`${Styles.eleventh_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <CheckboxWithLabel
              name={"сс"}
              id={"сс"}
              title={"Клеемная коробка"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"ссс"}
              id={"ссс"}
              title={"Клеммная колодка"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"ыы"}
              id={"ыы"}
              title={"Решётка РОН"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"ss"}
              id={"ss"}
              title={"Решётка Р50"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"ff"}
              id={"ff"}
              title={"Антивандальная сетка"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3 className={Styles.eleventh_form_h3}>Монтажная рама</h3>
          </div>
          <div
            className={`${Styles.eleventh_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <RadioBoxContainer
              title={
                "Для присоединения к стене (только для канальных клапанов)"
              }
            />
            <RadioBoxContainer
              title={"Для заделки в стену (только для стеновых клапанов)"}
            />
          </div>
        </div>
        <div className={Styles.twelfth_form_inputs}>
          <div className={Styles.eleventh_form_left_block}>
            <h3 className={Styles.eleventh_form_h3}>
              Переходник на круглое сечение
            </h3>
          </div>
          <div
            className={`${Styles.eleventh_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <div className={Styles.inputs_row}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Диаметр"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"Количество"}
                value={""}
              />
            </div>
          </div>
        </div>

        <div className={Styles.textarea_block}>
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

export { ThirteenthForm };
