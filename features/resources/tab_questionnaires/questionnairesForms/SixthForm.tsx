import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";

import { Button } from "components/button";
import { CheckboxWithLabel } from "components/checkbox";

const SixthForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };
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
        <div className={Styles.sixth_form_flex}>
          <div className={Styles.sixth_form_flex_left}>
            <div className={Styles.sixth_form_flex_left_block}>
              <p>Свободное пространство от края ворот (вид из помещения):</p>
              <div className={Styles.sixth_form_left_flex_element}>
                <p className={Styles.fifth_form_air_P}>Cлева от ворот</p>
                <div className={Styles.third_form_columns_block_right}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"bл = мм"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                </div>
              </div>
              <div className={Styles.sixth_form_left_flex_element}>
                <p className={Styles.fifth_form_air_P}>Cправа от ворот</p>
                <div className={Styles.third_form_columns_block_right}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"bп = мм"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                </div>
              </div>
              <div className={Styles.sixth_form_left_flex_element}>
                <p className={Styles.fifth_form_air_P}>Над проемом</p>
                <div className={Styles.third_form_columns_block_right}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"h = мм"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                </div>
              </div>
              <div className={Styles.sixth_form_left_flex_element}>
                <p className={Styles.fifth_form_air_P}>Размеры проема:</p>
                <div className={Styles.third_form_columns_block_right}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"Ширина В = мм"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"Высота Н = мм"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.sixth_form_img_1}>
            <div>
              <img src="/images/vkz1.webp" alt={"title"} />
            </div>
          </div>
        </div>
        <div className={Styles.sixth_form_top_title}>
          <p>Расположение завесы</p>
        </div>
        <div className={Styles.sixth_form_flex}>
          <div className={Styles.sixth_form_flex_left}>
            <div className={Styles.sixth_form_flex_left_block}>
              <p>В плане:</p>
              <div className={Styles.sixth_form_left_flex_element}>
                <p className={Styles.fifth_form_air_P}>У края ворот</p>
                <div className={Styles.third_form_columns_block_right}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"a = мм"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                </div>
              </div>
              <div className={Styles.sixth_form_left_flex_element}>
                <p className={Styles.fifth_form_air_P}>За колоннами</p>
                <div className={Styles.third_form_columns_block_right}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"a = мм"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                </div>
              </div>
              <div className={Styles.sixth_form_left_flex_element}>
                <p className={Styles.fifth_form_air_P}>Над проемом</p>
                <div className={Styles.third_form_columns_block_right}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"a1 = мм"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                </div>
              </div>
              <div className={Styles.sixth_form_left_flex_element}>
                <p className={Styles.fifth_form_air_P}>Размеры проема:</p>
                <div className={Styles.third_form_columns_block_right}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"a2 = мм"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Styles.sixth_form_img_1} ${Styles.sixth_form_img_2}`}
          >
            <div>
              <img src="/images/vkz2.webp" alt={"title"} />
            </div>
            <div>
              <img src="/images/vkz3.webp" alt={"title"} />
            </div>
          </div>
        </div>
        <div className={Styles.sixth_form_radios}>
          <RadioBoxContainer
            title={"Слева от проема&nbsp&nbsp&nbsp&nbsp&nbsp"}
          />
          <RadioBoxContainer
            title={"Справа от проема&nbsp&nbsp&nbsp&nbsp&nbsp"}
          />
          <RadioBoxContainer title={"С двух сторон от проема"} />
        </div>
        <div
          className={`${Styles.sixth_form_img_1} ${Styles.sixth_form_img_3}`}
        >
          <div>
            <img src="/images/vkz4.webp" alt={"title"} />
          </div>
          <div>
            <img src="/images/vkz5.webp" alt={"title"} />
          </div>
        </div>
        <div
          className={`${Styles.fifth_form_top_title} ${Styles.border_top_title}`}
        >
          <p>Горизонтально над проемом (вид из помещения):</p>
        </div>
        <div className={Styles.sixth_form_radios}>
          <RadioBoxContainer
            title={"С обслуживанием справа&nbsp&nbsp&nbsp&nbsp&nbsp"}
          />
          <RadioBoxContainer
            title={"С обслуживанием слева&nbsp&nbsp&nbsp&nbsp&nbsp"}
          />
          <RadioBoxContainer title={"Двойная"} />
        </div>
        <div className={Styles.sixth_form_img_4}>
          <div className={Styles.sixth_form_top_images}>
            <img src="/images/vkz6.webp" alt={"title"} />
            <img src="/images/vkz7.webp" alt={"title"} />
          </div>
          <div className={Styles.sixth_form_bottom_images}>
            <img src="/images/vkz8.webp" alt={"title"} />
          </div>
        </div>
        <div
          className={`${Styles.fifth_form_top_title} ${Styles.border_top_title}`}
        >
          <p>Параметры теплоносителя</p>
        </div>
        <div className={Styles.sixth_form_flex_inputs}>
          <div className={Styles.sixth_form_flex_inputs_block}>
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Теплоноситель, наименование"}
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
          <div className={Styles.sixth_form_left_flex_element}>
            <p className={Styles.p}>Температура на входе в теплообменник</p>
            <div>
              <div className={Styles.input}>
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"Tвх = oC"}
                  className={Styles.input__item}
                  value={""}
                />
              </div>
            </div>
          </div>
          <div className={Styles.sixth_form_left_flex_element}>
            <p className={Styles.p}>Температура на выходе из теплообменника</p>
            <div>
              <div className={Styles.input}>
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"Tвых = oC"}
                  className={Styles.input__item}
                  value={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${Styles.fifth_form_top_title} ${Styles.border_top_title}`}
        >
          <p>Параметры воздуха</p>
        </div>
        <div className={Styles.sixth_form_flex_inputs}>
          <div className={Styles.sixth_form_left_flex_element}>
            <p className={Styles.p}>Температура воздуха в помещении</p>
            <div>
              <div className={Styles.input}>
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"Tп = oC"}
                  className={Styles.input__item}
                  value={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${Styles.fifth_form_top_title} ${Styles.border_top_title}`}
        >
          <p>Шумоглушение</p>
        </div>
        <div className={Styles.sixth_form_radios}>
          <RadioBoxContainer title={"Да"} />
          <RadioBoxContainer title={"Нет"} />
        </div>
        <div className={Styles.fifth_form_top_title}>
          <p>Упаковка</p>
        </div>
        <div className={Styles.sixth_form_radios}>
          <RadioBoxContainer title={"Деревянная обрешетка"} />
          <RadioBoxContainer
            title={"Обтяжка полиэтиленовой пленкой на поддоне"}
          />
          <RadioBoxContainer title={"Сплошной ящик"} />
        </div>
        <div className={Styles.sixth_form_top_title}>
          <p>Автоматика</p>
        </div>
        <div className={Styles.sixth_form_columns_block_last}>
          <CheckboxWithLabel
            name={"eegc"}
            id={"eegc"}
            title={"Концевой выключатель открытия ворот"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"eefc"}
            id={"eefc"}
            title={"Регулятор оборотов вращения электродвигателя вентилятора"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"eedc"}
            id={"eedc"}
            title={"Защита от размораживания теплообменника"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"ecsed"}
            id={"ecsed"}
            title={"Датчик температуры воздуха в зоне ворот"}
            onChangeData={() => handleOnchangeCheckbox()}
          />{" "}
          <CheckboxWithLabel
            name={"esed"}
            id={"esed"}
            title={"Термостат"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"eecd"}
            id={"eecd"}
            title={"Шкаф автоматики"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
        </div>
        <div
          className={`${Styles.sixth_form_button} ${Styles.border_top_title}`}
        >
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { SixthForm };
