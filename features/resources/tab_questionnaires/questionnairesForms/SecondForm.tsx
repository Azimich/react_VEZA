import React from "react";
import Styles from "./QuestionnariesForms.module.scss";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";

const SecondForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };

  return (
    <div className={Styles.second_form}>
      <div className={Styles.second_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования: ЛЮК
          ДЫМОУДАЛЕНИЯ
        </p>
      </div>
      <div className={Styles.second_form_inputs_container}>
        <div className={Styles.second_form_inputs}>
          <div className={Styles.second_form_left_block}>
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
        <div className={Styles.second_form_inputs}>
          <div className={Styles.second_form_left_block}>
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
          <div className={Styles.first_form_right_block}>
            <textarea placeholder="Адрес объекта" />
          </div>
        </div>
        <div className={Styles.second_form_inputs}>
          <div className={Styles.second_form_left_block}>
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
          <div className={Styles.second_form_right_block}>
            <div className={Styles.input}>
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
        <div className={Styles.second_form_radios}>
          <RadioBoxContainer title={"Проектировщик"} />
          <RadioBoxContainer title={"Заказчик"} />
          <RadioBoxContainer title={"Строительно-монтажная организация"} />
        </div>
        <div className={Styles.second_form_middle_title}>
          <p>Характеристики люков дымоудаления</p>
        </div>
        <div className={Styles.second_form_radios}>
          <RadioBoxContainer title={"Кровельный (горизонтальный)"} />
          <RadioBoxContainer title={"Стеновой (жалюзийный"} />
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h2 className={Styles.second_form_h3}>Номер люка</h2>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <h2 className={Styles.second_form_h3}>
              Размеры проема в кровле (стене), А х В, мм**
            </h2>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 1</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 2</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 3</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 4</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 5</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 6</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title}>
          <p>Тип крышки (только для кровельного)</p>
        </div>
        <div className={Styles.second_form_radios}>
          <RadioBoxContainer title={"Светопрозрачная (поликарбонат)"} />
          <RadioBoxContainer title={"Непрозрачная (стальная с утеплением)"} />
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h2>Количество зон дымоудаления</h2>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h2>Номер зоны</h2>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <h2>Количество люков</h2>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 1</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 2</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 3</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 4</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 5</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 6</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_radio_block}>
          <div className={Styles.second_form_left_title_block}>
            <h3>Необходимость поставки автоматики*</h3>
          </div>
          <div
            className={`${Styles.second_form_right_radio} ${Styles.right_border}`}
          >
            <div className={Styles.second_form_radios_wrapp}>
              <RadioBoxContainer title={"Да"} />
              <RadioBoxContainer title={"Нет"} />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_radio_block}>
          <div className={Styles.second_form_left_title_block}>
            <h3>Наличие функции проветривания*</h3>
          </div>
          <div
            className={`${Styles.second_form_right_radio} ${Styles.right_border}`}
          >
            <div className={Styles.second_form_radios_wrapp}>
              <RadioBoxContainer title={"Да"} />
              <RadioBoxContainer title={"Нет"} />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h2>Регион снеговой нагрузки ( I - IV )*</h2>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <h2>Город, где планируется установка люков*</h2>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 1</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 2</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 3</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 4</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 5</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h3>№ 6</h3>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Введите данные"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.second_form_middle_radio_block}>
          <div className={Styles.second_form_left_title_block}>
            <h3>Дополнительная комплектация *</h3>
          </div>
          <div
            className={`${Styles.second_form_right_radio} ${Styles.right_border}`}
          >
            <div
              className={`${Styles.second_form_radios_wrapp} ${Styles.phone_screen_column}`}
            >
              <CheckboxWithLabel
                name={"police_id"}
                id={"police_id"}
                title={"Решетка безопасности"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"police"}
                id={"police"}
                title={"Защита от примерзания крышки"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
          </div>
        </div>
        <div className={Styles.first_form_button}>
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { SecondForm };
