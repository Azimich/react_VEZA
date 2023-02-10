import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";

const FourthForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };

  return (
    <div className={Styles.fourth_form}>
      <div className={Styles.fourth_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования: УСТАНОВКИ
          ВЕНТИЛЯЦИОННЫЕ ПРИТОЧНО-ВЫТЯЖНЫЕ «АКВАРИС»
        </p>
      </div>
      <div className={Styles.fourth_form_inputs_container}>
        <div className={Styles.fourth_form_inputs}>
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
        <div className={Styles.fourth_form_inputs}>
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
        <div className={Styles.fourth_form_inputs}>
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
        <div className={Styles.fourth_form_radios}>
          <RadioBoxContainer title={"Проектировщик"} />
          <RadioBoxContainer title={"Заказчик"} />
          <RadioBoxContainer title={"Строительно-монтажная организация"} />
        </div>
        <div className={Styles.fourth_form_top_title}>
          <p>Характеристики установки</p>
        </div>
        <div className={Styles.fourth_form_inputs}>
          <div className={Styles.input}>
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Количество, шт"}
              className={Styles.input__item}
              value={""}
            />
          </div>
          <div className={`${Styles.input} ${Styles.radio_column}`}>
            <p>Сторона обслуживания:</p>
            <RadioBoxContainer title={"Слева"} />
            <RadioBoxContainer title={"Справа"} />
          </div>
        </div>
        <div className={Styles.fourth_form_schemes}>
          <p className={Styles.p}>Схема исполнения</p>
          <div className={Styles.fourth_form_schemes_images_block}>
            <div className={Styles.fourth_form_schemes_images_block_img}>
              <img src="/images/shema_1.webp" alt={"shema"} />
              <div>
                <RadioBoxContainer title={"Схема-1"} />
              </div>
            </div>
            <div className={Styles.fourth_form_schemes_images_block_img}>
              <img src="/images/shema_2.webp" alt={"shema"} />
              <div>
                <RadioBoxContainer title={"Схема-2"} />
              </div>
            </div>
            <div className={Styles.fourth_form_schemes_images_block_img}>
              <img src="/images/shema_3.webp" alt={"shema"} />
              <div>
                <RadioBoxContainer title={"Схема-3"} />
              </div>
            </div>
            <div className={Styles.fourth_form_schemes_images_block_img}>
              <img src="/images/shema_4.webp" alt={"shema"} />
              <div>
                <RadioBoxContainer title={"Схема-4"} />
              </div>
            </div>
            <div className={Styles.fourth_form_schemes_images_block_img}>
              <img src="/images/shema_5.webp" alt={"shema"} />
              <div>
                <RadioBoxContainer title={"Схема-5"} />
              </div>
            </div>
            <div className={Styles.fourth_form_schemes_images_block_img}>
              <img src="/images/shema_6.webp" alt={"shema"} />
              <div>
                <RadioBoxContainer title={"Схема-6"} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.fourth_form_inputs}>
          <div className={`${Styles.input} ${Styles.radio_column}`}>
            <p>Расход воздуха, м3/ч:</p>
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Приток:"}
              className={Styles.input__item}
              value={""}
            />
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Вытяжка:"}
              className={Styles.input__item}
              value={""}
            />
          </div>
          <div className={`${Styles.input} ${Styles.radio_column}`}>
            <p>Давление в сети, Па:</p>
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Приток:"}
              className={Styles.input__item}
              value={""}
            />
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Вытяжка:"}
              className={Styles.input__item}
              value={""}
            />
          </div>
        </div>
        <h3 className={Styles.center_title}>Расчётные параметры воздуха</h3>
        <div className={Styles.fourth_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Наружный воздух</h3>
          </div>
          <div
            className={`${Styles.third_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <div
                className={`${Styles.third_form_air} ${Styles.radio_column_parent}`}
              >
                <div className={`${Styles.input} ${Styles.radio_column}`}>
                  <p>Зима:</p>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Приток:"}
                    className={Styles.input__item}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Вытяжка:"}
                    className={Styles.input__item}
                    value={""}
                  />
                </div>
                <div className={`${Styles.input} ${Styles.radio_column}`}>
                  <p>Лето:</p>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Приток:"}
                    className={Styles.input__item}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Вытяжка:"}
                    className={Styles.input__item}
                    value={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.fourth_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Удаляемый воздух</h3>
          </div>
          <div
            className={`${Styles.third_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <div
                className={`${Styles.third_form_air} ${Styles.radio_column_parent}`}
              >
                <div className={`${Styles.input} ${Styles.radio_column}`}>
                  <p>Зима:</p>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Приток:"}
                    className={Styles.input__item}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Вытяжка:"}
                    className={Styles.input__item}
                    value={""}
                  />
                </div>
                <div className={`${Styles.input} ${Styles.radio_column}`}>
                  <p>Лето:</p>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Приток:"}
                    className={Styles.input__item}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Вытяжка:"}
                    className={Styles.input__item}
                    value={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.fourth_form_top_title}>
          <p>Воздухонагреватель</p>
        </div>
        <div className={Styles.fourth_form_inputs}>
          <div className={`${Styles.input} ${Styles.radio_column}`}>
            <p>Тип:</p>
            <RadioBoxContainer title={"Жидкостный"} />
            <RadioBoxContainer title={"Электрический"} />
          </div>
        </div>
        <div className={Styles.fourth_form_inputs}>
          <div className={Styles.fourth_form_columns_block_right}>
            <LayoutInput
              name={""}
              id={""}
              title={"Температура воздуха °С"}
              value={""}
            />
            <LayoutInput
              name={""}
              id={""}
              title={"Влажность воздуха %"}
              value={""}
            />
            <p>
              Температура теплоносителя, °С: (для жидкостного
              воздухонагревателя)
            </p>
            <LayoutInput name={""} id={""} title={"Вход:"} value={""} />
            <LayoutInput name={""} id={""} title={"Выход:"} value={""} />
          </div>
        </div>
        <div className={Styles.fourth_form_top_title}>
          <p>Дополнительные опции</p>
        </div>
        <div className={Styles.fourth_form_inputs}>
          <div className={Styles.fourth_form_columns_block_right}>
            <div className={Styles.fourth_form_grid_checkbox}>
              <CheckboxWithLabel
                name={"u"}
                id={"u"}
                title={'Опция "РЦ" (охлаждение приточного воздуха летом)'}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"wee"}
                id={"wee"}
                title={
                  'Опции "КВпс" и "КВпр" (подключение доп. воздушного конденсатора)'
                }
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"eew"}
                id={"eew"}
                title={'Опция "ПУ" (комплектация панелью управления)'}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"wrr"}
                id={"wrr"}
                title={'Опции "КЖпс" и "КЖпр" (подогрев воды в бассейне)'}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
            <div className={Styles.fourth_form_columns_block_right}>
              <LayoutInput
                name={""}
                id={""}
                title={"Температура воды °С: Вход "}
                value={""}
              />
              <LayoutInput name={""} id={""} title={"Выход:"} value={""} />
              <LayoutInput
                name={""}
                id={""}
                title={"Расход воды кг/ч:"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.fourth_form_top_title}>
          <p>Характеристики бассейна</p>
        </div>
        <div className={Styles.fourth_form_inputs_variant}>
          <div>
            <p className={Styles.p}>Тип бассейна</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fourth_form_grid_checkbox}>
                <CheckboxWithLabel
                  name={"u1"}
                  id={"u1"}
                  title={"Частный"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"wee1"}
                  id={"wee1"}
                  title={"Общественный"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"eew1"}
                  id={"eew1"}
                  title={"Школьный"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"wrr1"}
                  id={"wrr1"}
                  title={"Спортивный"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"eew11"}
                  id={"eew11"}
                  title={"Аквапарк"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"wrr11"}
                  id={"wrr11"}
                  title={"Другое"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
            </div>
          </div>
          <div className={Styles.fourth_form_inputs_}>
            <p>
              При наличии постоянно действующих аттракционов, необходимо
              отметить их тип и кол-во
            </p>
            <div
              className={`${Styles.fourth_form_grid_checkbox} ${Styles.fourth_form_grid_checkbox_gap}`}
            >
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u13"}
                  id={"u13"}
                  title={"Водяная горка-труба"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u12"}
                  id={"u12"}
                  title={"Водяной гриб"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u14"}
                  id={"u14"}
                  title={"Устройство противотока"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u15"}
                  id={"u15"}
                  title={"Массажёр для шеи"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u16"}
                  id={"u16"}
                  title={"Подводные струи"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u31"}
                  id={"u31"}
                  title={"Пузырьковый фонтан"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u321"}
                  id={"u321"}
                  title={"Водопад"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u122"}
                  id={"u122"}
                  title={"Гейзер"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u132"}
                  id={"u132"}
                  title={"Детская горка"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u1e"}
                  id={"u1e"}
                  title={"Массажная зона"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u1222"}
                  id={"u1222"}
                  title={"Джакузи"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.fourth_form_check_and_input}>
                <CheckboxWithLabel
                  name={"u1qq"}
                  id={"u1qq"}
                  title={"Другое"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_margin}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Количество"}
                    value={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.fourth_form_columns_block_inputs}>
          <div className={Styles.column_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Площадь зеркала воды м²:"}
              value={""}
            />
            <LayoutInput
              name={""}
              id={""}
              title={"Площадь обходных дорожек, м²"}
              value={""}
            />
            <LayoutInput
              name={""}
              id={""}
              title={"Объем помещения, м³:"}
              value={""}
            />
            <LayoutInput
              name={""}
              id={""}
              title={"Температура воды, °С:"}
              value={""}
            />
          </div>
          <div className={Styles.column_block}>
            <LayoutInput
              name={""}
              id={""}
              title={"Температура воздуха в рабочей зоне, °С:"}
              value={""}
            />
            <LayoutInput
              name={""}
              id={""}
              title={"Влажность воздуха в рабочей зоне, °С:"}
              value={""}
            />
            <LayoutInput
              name={""}
              id={""}
              title={"Количество купающихся:"}
              value={""}
            />
            <LayoutInput
              name={""}
              id={""}
              title={"Количество зрителей:"}
              value={""}
            />
          </div>
        </div>
        <div>
          <div className={Styles.fourth_form_textarea}>
            <textarea placeholder="Дополнительные сведения" />
          </div>
        </div>
        <div className={Styles.fourth_form_button}>
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { FourthForm };
