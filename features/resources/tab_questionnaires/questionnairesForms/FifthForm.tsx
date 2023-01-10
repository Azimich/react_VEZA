import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";

const FifthForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };

  return (
    <div className={Styles.fifth_form}>
      <div className={Styles.fifth_form_top_title}>
        <p>Опросный лист для проектирования децентрализованных систем</p>
      </div>
      <div className={Styles.fifth_form_inputs_container}>
        <div className={Styles.fifth_form_inputs}>
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
        <div className={Styles.fifth_form_inputs}>
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
        <div className={Styles.fifth_form_inputs}>
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
        <div className={Styles.fifth_form_radios}>
          <RadioBoxContainer title={"Проектировщик"} />
          <RadioBoxContainer title={"Заказчик"} />
          <RadioBoxContainer title={"Строительно-монтажная организация"} />
        </div>
        <div className={Styles.fifth_form_top_title}>
          <p>Характеристики установки</p>
        </div>
        <div
          className={`${Styles.radios_middle_bottom_checkbox} ${Styles.padding_10}`}
        >
          <div className={Styles.fifth_form_air}>
            <p className={Styles.third_form_P}>Размер помещения:</p>
            <div className={Styles.third_form_columns_block_right}>
              <LayoutInput name={""} id={""} title={"Длина м"} value={""} />
              <LayoutInput name={""} id={""} title={"Ширина м"} value={""} />
              <LayoutInput name={""} id={""} title={"Высота м"} value={""} />
              <LayoutInput name={""} id={""} title={"Площадь м2"} value={""} />
              <LayoutInput name={""} id={""} title={"Объем м3"} value={""} />
              <LayoutInput
                name={""}
                id={""}
                title={"Высота монтажа м"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div
          className={`${Styles.radios_middle_bottom_checkbox} ${Styles.padding_10}`}
        >
          <div className={Styles.fifth_form_air}>
            <p className={Styles.third_form_P}>Тип помещения:</p>
            <div className={Styles.third_form_columns_block_right}>
              <RadioBoxContainer title={"Производственный цех"} />
              <RadioBoxContainer title={"Спортивный зал"} />
              <RadioBoxContainer title={"Склад"} />
              <RadioBoxContainer title={"Многофункциональный павильон"} />
              <RadioBoxContainer title={"Супермаркет"} />
              <RadioBoxContainer title={"Прочее"} />
              <LayoutInput
                name={""}
                id={""}
                title={"Требуемое количество шт"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div
          className={`${Styles.radios_middle_bottom_checkbox} ${Styles.padding_10}`}
        >
          <div className={`${Styles.fifth_form_air} ${Styles.radio_column}`}>
            <p>Необходимый расход воздуха:</p>
            <div className={Styles.third_form_columns_block_right}>
              <LayoutInput
                name={""}
                id={""}
                title={"Приток Lприт = м3/ч"}
                value={""}
              />
              <LayoutInput
                name={""}
                id={""}
                title={"Вытяжка Lвыт = м3/ч"}
                value={""}
              />
              <LayoutInput
                name={""}
                id={""}
                title={"Рециркуляция Lрец = м3/ч"}
                value={""}
              />
              <LayoutInput name={""} id={""} title={"или %"} value={""} />
            </div>
          </div>
        </div>
        <div
          className={`${Styles.radios_middle_bottom_checkbox} ${Styles.padding_10}`}
        >
          <div className={`${Styles.fifth_form_air} ${Styles.radio_column}`}>
            <p className={Styles.fifth_form_air_P}>Тип вентилятора:</p>
            <div className={Styles.third_form_columns_block_right}>
              <RadioBoxContainer title={"ЕС (мотор-колесо)"} />
              <RadioBoxContainer title={"С прямым приводом (ВЕЗА-ВОСК)"} />
            </div>
          </div>
        </div>
        <div
          className={`${Styles.radios_middle_bottom_checkbox} ${Styles.padding_10}`}
        >
          <div className={`${Styles.fifth_form_air} ${Styles.radio_column}`}>
            <p className={Styles.third_form_P}>
              Длина секции приточно вытяжной:
            </p>
            <div className={Styles.third_form_columns_block_right}>
              <RadioBoxContainer title={"1,5 м"} />
              <RadioBoxContainer title={"2 м"} />
              <RadioBoxContainer title={"2,25 м"} />
            </div>
          </div>
        </div>
        <div className={Styles.fifth_form_column_block}>
          <div className={Styles.left_column}>
            <h4>БОКС</h4>
            <div className={Styles.left_column_inputs}>
              <div className={Styles.fifth_form_inputs}>
                <div className={Styles.fifth_form_left_block}>
                  <p>Температура и влажность наружного воздуха лето</p>
                </div>
                <div
                  className={`${Styles.third_form_right_block} ${Styles.right_border}`}
                >
                  <div className={Styles.radios_middle_bottom_checkbox}>
                    <div
                      className={`${Styles.fifth_form_air} ${Styles.radio_column_parent}`}
                    >
                      <div className={`${Styles.input} ${Styles.radio_column}`}>
                        <LayoutInput
                          name={"email"}
                          id={"email_id"}
                          title={"T = oC"}
                          className={Styles.input__item}
                          value={""}
                        />
                        <LayoutInput
                          name={"email"}
                          id={"email_id"}
                          title={"Ф = %"}
                          className={Styles.input__item}
                          value={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Styles.fifth_form_inputs}>
                <div className={Styles.fifth_form_left_block}>
                  <p>Температура и влажность вытяжного воздуха зимой</p>
                </div>
                <div
                  className={`${Styles.third_form_right_block} ${Styles.right_border}`}
                >
                  <div className={Styles.radios_middle_bottom_checkbox}>
                    <div
                      className={`${Styles.fifth_form_air} ${Styles.radio_column_parent}`}
                    >
                      <div className={`${Styles.input} ${Styles.radio_column}`}>
                        <LayoutInput
                          name={"email"}
                          id={"email_id"}
                          title={"T = oC"}
                          className={Styles.input__item}
                          value={""}
                        />
                        <LayoutInput
                          name={"email"}
                          id={"email_id"}
                          title={"Ф = %"}
                          className={Styles.input__item}
                          value={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Styles.fifth_form_inputs}>
                <div className={Styles.fifth_form_left_block}>
                  <p>Температура и влажность наружного воздуха зимой</p>
                </div>
                <div
                  className={`${Styles.third_form_right_block} ${Styles.right_border}`}
                >
                  <div className={Styles.radios_middle_bottom_checkbox}>
                    <div
                      className={`${Styles.fifth_form_air} ${Styles.radio_column_parent}`}
                    >
                      <div className={`${Styles.input} ${Styles.radio_column}`}>
                        <LayoutInput
                          name={"email"}
                          id={"email_id"}
                          title={"T = oC"}
                          className={Styles.input__item}
                          value={""}
                        />
                        <LayoutInput
                          name={"email"}
                          id={"email_id"}
                          title={"Ф = %"}
                          className={Styles.input__item}
                          value={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={Styles.fifth_form_inputs}>
                <div className={Styles.fifth_form_left_block}>
                  <p>Температура и влажность вытяжного воздуха летом</p>
                </div>
                <div
                  className={`${Styles.third_form_right_block} ${Styles.right_border}`}
                >
                  <div className={Styles.radios_middle_bottom_checkbox}>
                    <div
                      className={`${Styles.fifth_form_air} ${Styles.radio_column_parent}`}
                    >
                      <div className={`${Styles.input} ${Styles.radio_column}`}>
                        <LayoutInput
                          name={"email"}
                          id={"email_id"}
                          title={"T = oC"}
                          className={Styles.input__item}
                          value={""}
                        />
                        <LayoutInput
                          name={"email"}
                          id={"email_id"}
                          title={"Ф = %"}
                          className={Styles.input__item}
                          value={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={Styles.right_column}>
            <h4>ТОРС</h4>
            <div className={Styles.left_column_inputs}>
              <div
                className={`${Styles.fifth_form_inputs} ${Styles.fifth_form_inputs_padding}`}
              >
                <div className={Styles.fifth_form_left_block}>
                  <p>Температура приточного воздуха зимой</p>
                </div>
                <div
                  className={`${Styles.third_form_right_block} ${Styles.right_border}`}
                >
                  <div className={Styles.radios_middle_bottom_checkbox}>
                    <div
                      className={`${Styles.fifth_form_air} ${Styles.radio_column_parent}`}
                    >
                      <div className={`${Styles.input} ${Styles.radio_column}`}>
                        <LayoutInput
                          name={"email"}
                          id={"email_id"}
                          title={"T = oC"}
                          className={Styles.input__item}
                          value={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${Styles.fifth_form_inputs} ${Styles.fifth_form_inputs_padding}`}
              >
                <div className={Styles.fifth_form_left_block}>
                  <p>Температура приточного воздуха летом </p>
                </div>
                <div
                  className={`${Styles.third_form_right_block} ${Styles.right_border}`}
                >
                  <div className={Styles.radios_middle_bottom_checkbox}>
                    <div
                      className={`${Styles.fifth_form_air} ${Styles.radio_column_parent}`}
                    >
                      <div className={`${Styles.input} ${Styles.radio_column}`}>
                        <LayoutInput
                          name={"email"}
                          id={"email_id"}
                          title={"T = oC"}
                          className={Styles.input__item}
                          value={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.radios_middle_bottom_checkbox}>
          <div className={Styles.fifth_form_air}>
            <div
              className={`${Styles.fifth_form_columns_block_right} ${Styles.fifth_form_colum_gap}`}
            >
              <p>Секция нагрева:</p>
              <div className={Styles.fifth_form_middle_block}>
                <RadioBoxContainer title={"Вода"} />
                <div className={Styles.checkbox_wrapp}>
                  <RadioBoxContainer title={"Смесь гликоля Ksi"} />
                  <div className={Styles.input__item}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"%"}
                      value={""}
                    />
                  </div>
                </div>
                <RadioBoxContainer title={"Этиленгликоль"} />
                <RadioBoxContainer title={"Пропиленгликоль"} />
                <RadioBoxContainer title={"Электрический"} />
              </div>
            </div>
            <div
              className={`${Styles.fifth_form_columns_block_right} ${Styles.fifth_form_colum_gap}`}
            >
              <p>Температура теплоносителя:</p>
              <div className={Styles.fifth_form_middle_block}>
                <LayoutInput name={""} id={""} title={"Tвх = oC"} value={""} />
                <LayoutInput name={""} id={""} title={"Tвых = oC"} value={""} />
              </div>
            </div>
            <div
              className={`${Styles.fifth_form_columns_block_right} ${Styles.fifth_form_colum_gap}`}
            >
              <p>Теплообменник:</p>
              <div className={Styles.fifth_form_middle_block}>
                <RadioBoxContainer title={"Медно-алюминиевый"} />
                <RadioBoxContainer title={"Нержавеющая сталь"} />
              </div>
            </div>
            <div
              className={`${Styles.fifth_form_columns_block_right} ${Styles.fifth_form_colum_gap}`}
            >
              <p>Секция охлождения:</p>
              <div className={Styles.fifth_form_middle_block}>
                <RadioBoxContainer title={"Вода"} />
                <div className={Styles.checkbox_wrapp}>
                  <RadioBoxContainer title={"Фреон"} />
                  <div className={Styles.input__item}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"Введите данные"}
                      value={""}
                    />
                  </div>
                </div>
                <div className={Styles.checkbox_wrapp}>
                  <RadioBoxContainer title={"Смесь гликоля Ksi ="} />
                  <div className={Styles.input__item}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"%"}
                      value={""}
                    />
                  </div>
                </div>
                <RadioBoxContainer title={"Этиленгликоль"} />
                <RadioBoxContainer title={"Пропиленгликоль"} />
              </div>
            </div>
            <div
              className={`${Styles.fifth_form_columns_block_right} ${Styles.fifth_form_colum_gap}`}
            >
              <p>Температура хладоносителя:</p>
              <div className={Styles.fifth_form_middle_block}>
                <div className={Styles.input__item}>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Tвх = oC"}
                    value={""}
                  />
                </div>
                <div className={Styles.input__item}>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Tвых = oC"}
                    value={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.fifth_form_column_flex}>
          <div>
            <p className={Styles.p}>Исполнение:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <CheckboxWithLabel
                  name={"u1"}
                  id={"u1"}
                  title={"Н - общепромышленное"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"wee1"}
                  id={"wee1"}
                  title={"К - коррозионностойкое"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"eew1"}
                  id={"eew1"}
                  title={"МС - морозостойкое"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"wrr1"}
                  id={"wrr1"}
                  title={"МСК - морозостойкое коррозионностойкое"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
            </div>
          </div>
          <div>
            <p className={Styles.p}>Тип воздухораспределителя:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <RadioBoxContainer title={"ВИХР"} />
                <RadioBoxContainer title={"ДИФР"} />
                <RadioBoxContainer
                  title={"Не регулируемая решетка (только для ТОРС)"}
                />
              </div>
            </div>
          </div>
          <div>
            <p className={Styles.p}>Комплект встроенной автоматики:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <RadioBoxContainer title={"Да"} />
                <RadioBoxContainer title={"Нет"} />
              </div>
            </div>
          </div>
          <div>
            <p className={Styles.p}>Дистанционная панель оператора:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <RadioBoxContainer title={"Да"} />
                <RadioBoxContainer title={"Нет"} />
              </div>
            </div>
          </div>
        </div>
        <div
          className={`${Styles.fifth_form_top_title} ${Styles.border_top_title}`}
        >
          <p>Дополнительная комплектация</p>
        </div>
        <div
          className={`${Styles.fifth_form_column_flex} ${Styles.fifth_form_column_grid}`}
        >
          <div>
            <p className={Styles.p}>Узел водосмесительный ВЕКТОР:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <RadioBoxContainer title={"Да"} />
                <RadioBoxContainer title={"Нет"} />
              </div>
            </div>
          </div>
          <div>
            <p className={Styles.p}>Цоколь монтажный СТАМ-БТ:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <RadioBoxContainer title={"Да"} />
                <RadioBoxContainer title={"Нет"} />
              </div>
            </div>
          </div>
          <div>
            <p className={Styles.p}>Исполнение СТАМ-БТ:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <RadioBoxContainer title={"Н - общепромышленное"} />
                <RadioBoxContainer title={"К - коррозионностойкое"} />
              </div>
            </div>
          </div>
          <div>
            <p className={Styles.p}>Тип кровли:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <RadioBoxContainer title={"ПК - плоская"} />
                <RadioBoxContainer title={"НК - наклонная"} />
              </div>
            </div>
          </div>
          <div>
            <p className={Styles.p}>Козырек КЗО-БОКС:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <RadioBoxContainer title={"Да"} />
                <RadioBoxContainer title={"Нет"} />
              </div>
            </div>
          </div>
          <div>
            <p className={Styles.p}>Материал КЗО-БОКС:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <RadioBoxContainer
                  title={"Ц - оцинкованная сталь с покрытием"}
                />
                <RadioBoxContainer title={"Н - нержавеющая сталь"} />
              </div>
            </div>
          </div>
          <div>
            <p className={Styles.p}>ЗОНТ-ТОРС:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <RadioBoxContainer title={"Да"} />
                <RadioBoxContainer title={"Нет"} />
              </div>
            </div>
          </div>
          <div>
            <p className={Styles.p}>Материал ЗОНТ-ТОРС:</p>
            <div className={Styles.fourth_form_columns_block_right}>
              <div className={Styles.fifth_form_flex_checkbox}>
                <RadioBoxContainer
                  title={"Ц - оцинкованная сталь с покрытием"}
                />
                <RadioBoxContainer title={"Н - нержавеющая сталь"} />
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={Styles.fourth_form_textarea}>
            <textarea placeholder="Дополнительные сведения" />
          </div>
        </div>
        <div className={Styles.fifth_form_button}>
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { FifthForm };
