import React from "react";
import Styles from "./QuestionnariesForms.module.scss";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";

const FirstForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };
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
          <div className={Styles.first_form_left_block}>
            <p className={Styles.left_text}>
              Размеры А*В (ширина*высота) или D
            </p>
          </div>
          <div className={Styles.first_form_right_block}>
            <p className={Styles.right_text}>Количество</p>
          </div>
        </div>
        <div className={Styles.first_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите что-нибудь"}
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
                title={"Введите что-нибудь"}
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.first_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Тип клапана</h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border}`}
          >
            <RadioBoxContainer title={"Нормально открытый"} />
            <RadioBoxContainer title={"Нормально закрытый"} />
            <RadioBoxContainer title={"Дымовой"} />
            <RadioBoxContainer title={"Двойного действия"} />
          </div>
        </div>
        <div className={Styles.first_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Исполнение</h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border}`}
          >
            <RadioBoxContainer title={"Общепромышленное"} />
            <RadioBoxContainer title={"Взрывозащищенное"} />
            <RadioBoxContainer title={"Коррозионностойкое"} />
            <RadioBoxContainer
              title={"Взрывозащищенное и коррозионностойкое"}
            />
            <RadioBoxContainer title={"Морозостойкое"} />
            <RadioBoxContainer title={"Морозостойкое и коррозионностойкое"} />
            <RadioBoxContainer title={"Морозостойкое и взрывозащищенное"} />
            <RadioBoxContainer
              title={"Морозостойкое и взрывозащищенное и коррозионностойкое"}
            />
          </div>
        </div>
        <div className={Styles.first_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Использование</h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border}`}
          >
            <RadioBoxContainer title={"Стеновое (1 фланец) *"} />
            <RadioBoxContainer title={"Канальное (2 фланца) *"} />
            <RadioBoxContainer
              title={"Ниппельное (только для круглого сечения)"}
            />
          </div>
        </div>
        <div className={Styles.first_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>
              Тип исполнительного механизма
            </h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border}`}
          >
            <RadioBoxContainer title={"Электропривод"} />
            <RadioBoxContainer title={"Электромагнитный привод"} />
          </div>
        </div>
        <div className={Styles.first_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Комплектующие</h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border}`}
          >
            <CheckboxWithLabel
              name={"private_police"}
              id={"private_police_id"}
              title={"Клеемная коробка"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"police_id"}
              id={"police_id"}
              title={"Клеммная колодка"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"e"}
              id={"e"}
              title={"Решётка РОН"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"r"}
              id={"r"}
              title={"Антивандальная сетка"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
          </div>
        </div>
        <div className={Styles.first_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Монтажная рама</h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border}`}
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
        <div className={Styles.first_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>
              Переходник на круглое сечение
            </h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border} ${Styles.right_flex}`}
          >
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите диаметр"}
                className={Styles.input__item}
                value={""}
              />
            </div>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите количество"}
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.first_form_textarea}>
          <textarea placeholder="Дополнительные условия" />
        </div>
        <div className={Styles.first_form_button}>
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { FirstForm };
