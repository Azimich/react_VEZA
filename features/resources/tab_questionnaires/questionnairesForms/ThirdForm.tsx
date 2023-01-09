import React from "react";
import Styles from "./QuestionnariesForms.module.scss";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";

const ThirdForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };

  return (
    <div className={Styles.third_form}>
      <div className={Styles.third_form_top_title}>
        <p>Опросный лист на проектирование и изготовление ВЕРОСА</p>
      </div>
      <div className={Styles.third_form_inputs_container}>
        <div className={Styles.third_form_inputs}>
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
        <div className={Styles.third_form_inputs}>
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
        <div className={Styles.third_form_inputs}>
          <div className={Styles.third_form_left_block}>
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
          <div className={Styles.third_form_right_block}>
            <textarea placeholder="Система" />
            <div className={Styles.third_form_right_block}>
              <div className={Styles.third_form_right_block_middle_input}>
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
        <div className={Styles.third_form_radios}>
          <RadioBoxContainer title={"Проектировщик"} />
          <RadioBoxContainer title={"Инвестор"} />
          <RadioBoxContainer title={"Заказчик"} />
        </div>
        <div className={Styles.third_form_top_title}>
          <p>Характеристики установки</p>
        </div>
        <div className={Styles.third_form_inputs}>
          <div
            className={`${Styles.third_form_left_block} ${Styles.left_inputs}`}
          >
            <div className={`${Styles.input} ${Styles.inputs_column}`}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Типоразмер ВЕРОСА"}
                className={Styles.input__item}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Ширина в мм"}
                className={Styles.input__item}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Высота в мм"}
                className={Styles.input__item}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Длина в мм"}
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.third_form_right_block}>
            <div className={`${Styles.input} ${Styles.radio_column}`}>
              <p>Тип установки:</p>
              <RadioBoxContainer title={"Приточная"} />
              <RadioBoxContainer title={"Вытяжная"} />
              <RadioBoxContainer title={"Приточно-вытяжная"} />
            </div>
          </div>
          <div className={Styles.third_form_right_block}>
            <div className={`${Styles.input} ${Styles.radio_column}`}>
              <p>Типология:</p>
              <RadioBoxContainer title={"два этажа"} />
              <RadioBoxContainer title={"бок-о-бок"} />
            </div>
          </div>
        </div>
        <div className={Styles.third_form_top_title}>
          <p>Исполнение кондиционера</p>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.third_form_radios_wrapp}>
            <CheckboxWithLabel
              name={"police_id"}
              id={"police_id"}
              title={"Общепромышленное"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <div
              className={`${Styles.third_form_checkbox_wrapp} ${Styles.checkbox_wrapp}`}
            >
              <CheckboxWithLabel
                name={"police"}
                id={"police"}
                title={"Климатическое исполнение"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <div className={Styles.input__item}>
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"Введите данные"}
                  value={""}
                />
              </div>
            </div>
            <CheckboxWithLabel
              name={"poli"}
              id={"poli"}
              title={"Панель стандартная (25 мм)"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"p"}
              id={"p"}
              title={"Панель премиум (50 мм)"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"po"}
              id={"po"}
              title={"Для чистых помещений"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"pol"}
              id={"pol"}
              title={"Медицинское"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"a"}
              id={"a"}
              title={"Наружное"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"a1"}
              id={"a1"}
              title={"Метро"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"a2"}
              id={"a2"}
              title={
                "Доп. покрытие внешних панелей порошковой краской (ВЕРОСА-300, ВЕРОСА-700), стандартно RAL7004"
              }
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <div
              className={`${Styles.third_form_checkbox_wrapp} ${Styles.checkbox_wrapp} ${Styles.checkbox_wrapp_no_gap}`}
            >
              <CheckboxWithLabel
                name={"ce"}
                id={"ce"}
                title={"Взрывобезопасное исполнение:"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <div className={Styles.input__item}>
                <LayoutInput
                  name={""}
                  id={""}
                  title={"Введите данные"}
                  value={""}
                />
              </div>
              <p>
                указать категорию взрывоопасной среды согласно ГОСТ Р 51330)
              </p>
            </div>
          </div>
        </div>
        <div className={Styles.third_form_top_title}>
          <p>Характеристики установки</p>
        </div>
        <div className={Styles.third_form_radios_center}>
          <div className={Styles.third_form_inputs}>
            <div className={Styles.third_form_right_block}>
              <div className={`${Styles.input} ${Styles.radio_column}`}>
                <p>Приток</p>
                <RadioBoxContainer title={"Справа"} />
                <RadioBoxContainer title={"Слева"} />
              </div>
            </div>
            <div className={Styles.third_form_right_block}>
              <div className={`${Styles.input} ${Styles.radio_column}`}>
                <p>Вытяжка</p>
                <RadioBoxContainer title={"Справа"} />
                <RadioBoxContainer title={"Слева"} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.third_form_top_title}>
          <p>Форма поставки и упаковка</p>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.third_form_left_block}>
            <div className={Styles.input}>
              <p className={Styles.radio_title}>Форма поставки:</p>
              <RadioBoxContainer title={"Отдельными блоками"} />
              <RadioBoxContainer title={"Моноблоки"} />
              <RadioBoxContainer title={"Разобранный вид"} />
            </div>
          </div>
          <div className={Styles.third_form_right_block}>
            <div className={Styles.input}>
              <p className={Styles.radio_title}>Тип установки:</p>
              <RadioBoxContainer title={"Пленка (стандартно)"} />
              <RadioBoxContainer title={"Деревянная обрешетка"} />
              <RadioBoxContainer title={"Глухой ящик"} />
            </div>
          </div>
        </div>
        <div className={Styles.third_form_top_title}>
          <p> Вход и выход воздуха</p>
        </div>
        <div className={Styles.third_form_middle_title_block}>
          <div className={Styles.second_form_left_title}>
            <h2>Вход воздуха</h2>
          </div>
          <div
            className={`${Styles.second_form_right_title} ${Styles.right_border}`}
          >
            <h2>Выход воздуха</h2>
          </div>
        </div>
        <div className={Styles.third_form_inputs_middle}>
          <div
            className={`${Styles.third_form_left_block} ${Styles.third_form_left_block_image_input}`}
          >
            <div className={Styles.third_form_left_img_block}>
              <img src={"/images/verosa1.webp"} alt={"foto"} />
            </div>
            <div className={Styles.third_form_radios_wrapp}>
              <CheckboxWithLabel
                name={"ee"}
                id={"ee"}
                title={"Общепромышленное"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"rr"}
                id={"rr"}
                title={"Панель стандартная (25 мм)"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"prr"}
                id={"prr"}
                title={"Панель премиум (50 мм)"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"pee"}
                id={"pee"}
                title={"Панель премиум (50 мм)"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <div className={Styles.third_form_radios_middle}>
                <RadioBoxContainer title={"Приточная"} />
                <RadioBoxContainer title={"Вытяжная"} />
              </div>
              <div
                className={`${Styles.input__item} ${Styles.input__item_res}`}
              >
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"Введите рециркуляцию"}
                  value={""}
                />
              </div>
              <div className={Styles.inputs_middle_block}>
                <div className={Styles.input_middle_first_block}>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Tвыт oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Фвыт %"}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Фсм %"}
                    value={""}
                  />
                </div>
                <div className={Styles.input_middle_second_block}>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Tпр oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Фпр %"}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"tсм oC"}
                    value={""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={`${Styles.third_form_right_block} ${Styles.third_form_right_block_image_input}`}
          >
            <div className={Styles.third_form_left_img_block}>
              <img src={"/images/verosa2.webp"} alt={"foto"} />
            </div>
            <CheckboxWithLabel
              name={"tt"}
              id={"tt"}
              title={"Панель стандартная (25 мм)"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"ptrr"}
              id={"ptrr"}
              title={"Панель премиум (50 мм)"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"ptee"}
              id={"ptee"}
              title={"Панель премиум (50 мм)"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
          </div>
        </div>
        <div className={Styles.third_form_top_title}>
          <p>Блок вентилятора</p>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Приток</h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border}`}
          >
            <div
              className={`${Styles.third_form_checkbox_wrapp} ${Styles.checkbox_wrapp} ${Styles.checkbox_wrapp_no_gap}`}
            >
              <p>Расход воздуха,</p>
              <div className={Styles.input_м3}>
                <LayoutInput name={""} id={""} title={"L = м3/ч "} value={""} />
              </div>
              <p>Свободное давление</p>
              <div className={Styles.input_м3}>
                <LayoutInput name={""} id={""} title={"ПА"} value={""} />
              </div>
            </div>
            <div className={Styles.radios_middle}>
              <RadioBoxContainer
                title={"Гибкая вставка на выхлопе вентилятора"}
              />
              <RadioBoxContainer title={"ЕС (мотор-колесо)"} />
              <RadioBoxContainer title={"С прямым приводом (ВЕЗА-ВОСК)"} />
              <RadioBoxContainer
                title={"Двухстороннего всаса с ременным приводом"}
              />
            </div>
            <div
              className={`${Styles.radios_middle} ${Styles.radios_middle_last}`}
            >
              <p>Частотное регулирование</p>
              <RadioBoxContainer title={"Да"} />
              <RadioBoxContainer title={"Нет"} />
            </div>
            <div className={Styles.radios_middle_bottom_checkbox}>
              <CheckboxWithLabel
                name={"uu"}
                id={"uu"}
                title={"Запас комплектов шкивов и ремней"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
          </div>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Вытяжка</h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border}`}
          >
            <div
              className={`${Styles.third_form_checkbox_wrapp} ${Styles.checkbox_wrapp} ${Styles.checkbox_wrapp_no_gap}`}
            >
              <p>Расход воздуха,</p>
              <div className={Styles.input_м3}>
                <LayoutInput name={""} id={""} title={"L = м3/ч "} value={""} />
              </div>
              <p>Свободное давление</p>
              <div className={Styles.input_м3}>
                <LayoutInput name={""} id={""} title={"ПА"} value={""} />
              </div>
            </div>
            <div className={Styles.radios_middle}>
              <RadioBoxContainer
                title={"Гибкая вставка на выхлопе вентилятора"}
              />
              <RadioBoxContainer title={"ЕС (мотор-колесо)"} />
              <RadioBoxContainer title={"С прямым приводом (ВЕЗА-ВОСК)"} />
              <RadioBoxContainer
                title={"Двухстороннего всаса с ременным приводом"}
              />
            </div>
            <div
              className={`${Styles.radios_middle} ${Styles.radios_middle_last}`}
            >
              <p>Частотное регулирование</p>
              <RadioBoxContainer title={"Да"} />
              <RadioBoxContainer title={"Нет"} />
            </div>
            <div className={Styles.radios_middle_bottom_checkbox}>
              <CheckboxWithLabel
                name={"ueu"}
                id={"ueu"}
                title={"Запас комплектов шкивов и ремней"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
          </div>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Резерв</h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <CheckboxWithLabel
                name={"uw"}
                id={"uw"}
                title={
                  "Резервный двигатель (для вентиляторов двухстороннего всаса)"
                }
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"uc"}
                id={"uc"}
                title={"Запасной электродвигатель"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"e"}
                id={"e"}
                title={"Запасной вентилятор двухстроннего всаса"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"н"}
                id={"н"}
                title={"Запасной вентагрегат"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"u"}
                id={"u"}
                title={"Резерв вент. блока"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
            <div
              className={`${Styles.radios_middle} ${Styles.radios_middle_last}`}
            >
              <RadioBoxContainer title={"Два этажа"} />
              <RadioBoxContainer title={"Бок-о-бок"} />
            </div>
          </div>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Панельный</h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <CheckboxWithLabel
                name={"1"}
                id={"1"}
                title={"G2 (регенерируемый мет. сетки)"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"2"}
                id={"2"}
                title={"G3"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"3"}
                id={"3"}
                title={"G4"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"4"}
                id={"4"}
                title={"M5"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
          </div>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Карманный</h3>
          </div>
          <div
            className={`${Styles.first_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <CheckboxWithLabel
                name={"5"}
                id={"5"}
                title={"G4"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"6"}
                id={"6"}
                title={"M5"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"7"}
                id={"7"}
                title={"M6"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"8"}
                id={"8"}
                title={"F7"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"9"}
                id={"9"}
                title={"F8"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"10"}
                id={"10"}
                title={"F9"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"11"}
                id={"11"}
                title={"Угольный фильтр"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"12"}
                id={"12"}
                title={"Фильтр абсолютной очистки НЕРА (Н11...Н14)"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"13"}
                id={"13"}
                title={"Комплект запасных фильтров"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
          </div>
        </div>
        <div className={Styles.third_form_top_title}>
          <p>Блок нагревателя</p>
        </div>
        <div className={Styles.third_form_columns}>
          <div className={Styles.third_form_columns_item}>
            <div className={Styles.third_form_columns_item_title}>
              <p>Температура воздуха</p>
            </div>
            <div className={Styles.third_form_columns_item_inputs}>
              <div className={Styles.input_м2}>
                <LayoutInput name={""} id={""} title={'tвх = oC"'} value={""} />
              </div>
              <div className={Styles.input_м2}>
                <LayoutInput name={""} id={""} title={"tвых = oC"} value={""} />
              </div>
              <div className={Styles.input_м2}>
                <LayoutInput
                  name={""}
                  id={""}
                  title={"Q = кВт (не обязательно)"}
                  value={""}
                />
              </div>
            </div>
          </div>
          <div className={Styles.third_form_columns_item}>
            <div className={Styles.third_form_columns_item_title}>
              <RadioBoxContainer title={"Жидкостный"} />
            </div>
            <div className={Styles.third_form_columns_item_inputs}>
              {/*<div className={Styles.input_м2}>*/}
              {/*  <span>Температура теплоносителя</span>*/}
              {/*</div>*/}
              <div className={Styles.input_м2}>
                <LayoutInput name={""} id={""} title={'tвх = oC"'} value={""} />
              </div>
              <div className={Styles.input_м2}>
                <LayoutInput name={""} id={""} title={'tвх = oC"'} value={""} />
              </div>
              <div className={Styles.input_м2}>
                <LayoutInput name={""} id={""} title={"tвых = oC"} value={""} />
              </div>
              <div className={Styles.input_м2}>
                <RadioBoxContainer title={"Пропиленгликоль"} />
              </div>
              <div className={Styles.input_м2}>
                <RadioBoxContainer title={"Этиленгликоль"} />
              </div>
              <div className={Styles.input_м2}>
                <LayoutInput
                  name={""}
                  id={""}
                  title={"Концентрация %"}
                  value={""}
                />
              </div>
              <CheckboxWithLabel
                name={"zx"}
                id={"zx"}
                title={"Узел обвязки ВЕКТОР"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
          </div>
          <div className={Styles.third_form_columns_item}>
            <div className={Styles.third_form_columns_item_title}>
              <RadioBoxContainer title={"Паровой"} />
            </div>
            <div className={Styles.third_form_columns_item_inputs}>
              <div className={Styles.input_м2}>
                <LayoutInput name={""} id={""} title={"Tпара oC"} value={""} />
              </div>
              <div className={Styles.input_м2}>
                <LayoutInput
                  name={""}
                  id={""}
                  title={"Pпара = бар"}
                  value={""}
                />
              </div>
              <div className={Styles.input_м2}>
                <LayoutInput
                  name={""}
                  id={""}
                  title={"Перегрев = oC"}
                  value={""}
                />
              </div>
              <div className={Styles.input_м2}>
                <LayoutInput
                  name={""}
                  id={""}
                  title={"Переохлажд = oC"}
                  value={""}
                />
              </div>
              <CheckboxWithLabel
                name={"zxw"}
                id={"zxw"}
                title={"Паровая обвязка"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
          </div>
          <div className={Styles.third_form_columns_item}>
            <div className={Styles.third_form_columns_item_title}>
              <RadioBoxContainer title={"Электрический"} />
            </div>
            <div className={Styles.third_form_columns_item_inputs}>
              <p>Управление</p>
              <RadioBoxContainer title={"Электрический"} />
              <RadioBoxContainer title={"Электрический"} />
            </div>
          </div>
        </div>
        <div className={Styles.third_form_top_title}>
          <p>Характеристики теплообменника</p>
        </div>
        <div className={Styles.third_form_columns}>
          <div className={Styles.third_form_columns_item}>
            <div className={Styles.third_form_columns_item_title}>
              <p>Трубка</p>
            </div>
            <div className={Styles.third_form_columns_item_inputs}>
              <RadioBoxContainer title={"Медь"} />
              <RadioBoxContainer title={"Медь утолщенная"} />
              <RadioBoxContainer title={"Нерж. сталь"} />
              <RadioBoxContainer title={"Нерж. сталь утолщенная"} />
            </div>
          </div>
          <div className={Styles.third_form_columns_item}>
            <div className={Styles.third_form_columns_item_title}>
              <p>Корпус</p>
            </div>
            <div className={Styles.third_form_columns_item_inputs}>
              <RadioBoxContainer title={"оцинкованная сталь"} />
              <RadioBoxContainer title={"нержавеющая сталь"} />
              <RadioBoxContainer title={"углеродистая сталь окрашенная"} />
            </div>
          </div>
          <div className={Styles.third_form_columns_item}>
            <div className={Styles.third_form_columns_item_title}>
              <p>Оребрение</p>
            </div>
            <div className={Styles.third_form_columns_item_inputs}>
              <RadioBoxContainer title={"алюминий (стандартно)"} />
              <RadioBoxContainer title={"алюминий утолщенный"} />
              <RadioBoxContainer title={"эпоксидное покрытие"} />
              <RadioBoxContainer title={"Медь"} />
            </div>
          </div>
          <div className={Styles.third_form_columns_item}>
            <div className={Styles.third_form_columns_item_title}>
              <p>Патрубки</p>
            </div>
            <div className={Styles.third_form_columns_item_inputs}>
              <RadioBoxContainer title={"резьба"} />
              <RadioBoxContainer title={"под приварку"} />
            </div>
          </div>
        </div>
        <div className={Styles.third_form_top_title}>
          <p>Блок газового нагрева</p>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.third_form_columns_block}>
            <div className={Styles.third_form_columns_block_left}>
              <LayoutInput
                name={""}
                id={""}
                title={"tвозд вх = oC"}
                value={""}
              />
              <LayoutInput
                name={""}
                id={""}
                title={"tвозд вых = oC"}
                value={""}
              />
              <p>или</p>
              <LayoutInput name={""} id={""} title={"Q = кВт"} value={""} />
            </div>
            <div className={Styles.third_form_columns_block_right_block}>
              <p>Управление газовой горелкой</p>
              <div className={Styles.third_form_columns_block_right}>
                <div>
                  <RadioBoxContainer title={"1 ступень"} />
                </div>
                <div>
                  <RadioBoxContainer title={"2 ступень"} />
                </div>
                <div>
                  <RadioBoxContainer title={"Плавное регулирование"} />
                </div>
                <div>
                  <RadioBoxContainer title={"Газ"} />
                </div>
                <div>
                  <RadioBoxContainer title={"Мазут"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.third_form_top_title}>
          <p>Блок охладителя жидкостного</p>
        </div>
        <div className={Styles.third_form_inputs_second_variant}>
          <div className={Styles.third_form_columns_block}>
            <div className={Styles.third_form_columns_block_right}>
              <p>Параметры воздуха:</p>
              <LayoutInput
                name={""}
                id={""}
                title={"tвозд вх = oC"}
                value={""}
              />
              <LayoutInput
                name={""}
                id={""}
                title={"tвозд вых = oC"}
                value={""}
              />
              <LayoutInput
                name={""}
                id={""}
                title={"tвозд вых = oC"}
                value={""}
              />
            </div>
            <div className={Styles.third_form_columns_block_right_block}>
              <div className={Styles.third_form_columns_block_right}></div>
            </div>
          </div>
          <div className={Styles.third_form_columns_block}>
            <div className={Styles.third_form_columns_block_right}>
              <p>Тип хладагента:</p>
              <div>
                <RadioBoxContainer title={"Этиленгликоль"} />
              </div>
              <div>
                <RadioBoxContainer title={"Пропиленгликоль"} />
              </div>
              <div>
                <RadioBoxContainer title={"Вода"} />
              </div>
              <LayoutInput
                name={""}
                id={""}
                title={"Концентрация %"}
                value={""}
              />
            </div>
          </div>
          <div className={Styles.third_form_columns_block_last}>
            <p>Дополнительная комплектация:</p>
            <CheckboxWithLabel
              name={"eeg"}
              id={"eeg"}
              title={"Чиллер с воздушным охлаждением конденсатора АкваМАКК"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"eef"}
              id={"eef"}
              title={"Чиллер с выносным конденсатором АкваМАРК"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <CheckboxWithLabel
              name={"eed"}
              id={"eed"}
              title={"Чиллер с водяным охлаждением конденсатора АкваМАРК"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
          </div>
        </div>
        <div
          className={`${Styles.third_form_top_title} ${Styles.border_top_title}`}
        >
          <p>Блок охладителя фреонового</p>
        </div>
        <div className={Styles.third_form_inputs_second_variant}>
          <div className={Styles.third_form_columns_block}>
            <div className={Styles.third_form_columns_block_right}>
              <p>Параметры воздуха:</p>
              <LayoutInput name={""} id={""} title={"tвх = oC"} value={""} />
              <LayoutInput name={""} id={""} title={"Фнач = %"} value={""} />
              <LayoutInput name={""} id={""} title={"tвых = oC"} value={""} />
              <LayoutInput
                name={""}
                id={""}
                title={"Тип хладагента R "}
                value={""}
              />
            </div>
          </div>
          <div className={Styles.third_form_columns_block_last}>
            <p>Комплектация холодильной машиной:</p>
            <div>
              <RadioBoxContainer title={"Комплектация холодильной машиной:"} />
            </div>
            <div>
              <RadioBoxContainer title={"КРАБ (встроенная)"} />
            </div>
            <div>
              <RadioBoxContainer title={"МАРК (вынесенная без конденсатора)"} />
            </div>
            <div>
              <RadioBoxContainer title={"МАКК (вынесенная с конденсатором)"} />
            </div>
          </div>
          <div>
            <CheckboxWithLabel
              name={"eedq"}
              id={"eedq"}
              title={"Блок водяного конденсатора БВК"}
              onChangeData={() => handleOnchangeCheckbox()}
            />
            <div className={Styles.third_form_columns_block_right}>
              <LayoutInput
                name={""}
                id={""}
                title={"tводы вх = oC"}
                value={""}
              />
              <LayoutInput
                name={""}
                id={""}
                title={"tводы вых = oC"}
                value={""}
              />
              <LayoutInput
                name={""}
                id={""}
                title={"Gводы = кг/ч"}
                value={""}
              />
            </div>
            <div className={Styles.third_form_columns_checkboks}>
              <CheckboxWithLabel
                name={"eedqw"}
                id={"eedqw"}
                title={"Блок воздушного конденсатора МАВО"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"eedeq"}
                id={"eedeq"}
                title={"Встроенный в установку конденсатор"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
          </div>
        </div>
        <div
          className={`${Styles.third_form_top_title} ${Styles.border_top_title}`}
        >
          <p>Блок теплоутилизации</p>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>
              На теплообменниках с промежуточным теплоносителем
            </h3>
          </div>
          <div
            className={`${Styles.third_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <div className={Styles.third_form_air}>
                <p className={Styles.third_form_P}>Параметры воздуха:</p>
                <div className={Styles.third_form_columns_block_right}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tнар = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Фнар = %"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tвыт = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Фвыт = %"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.third_form_radios_two}>
                <p className={Styles.third_form_P}>Тип хладагента:</p>
                <RadioBoxContainer title={"Этиленгликоль"} />
                <RadioBoxContainer title={"Пропиленгликоль"} />
              </div>
              <div className={Styles.third_form_input_short}>
                <LayoutInput
                  name={""}
                  id={""}
                  title={"Gводы = кг/ч"}
                  value={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Пластинчатый</h3>
          </div>
          <div
            className={`${Styles.third_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <div className={Styles.third_form_air}>
                <p className={Styles.third_form_P}>Параметры воздуха:</p>
                <div className={Styles.third_form_columns_block_right}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tнар = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Фнар = %"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tвыт = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Фвыт = %"}
                    value={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Роторный</h3>
          </div>
          <div
            className={`${Styles.third_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <div className={Styles.third_form_air}>
                <p className={Styles.third_form_P}>Параметры воздуха:</p>
                <div className={Styles.third_form_columns_block_right}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tнар = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Фнар = %"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tвыт = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Фвыт = %"}
                    value={""}
                  />
                  <LayoutInput name={""} id={""} title={"КПД = %"} value={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.third_form_top_title}>
          <p>Блок увлажнения</p>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Камера орошения</h3>
          </div>
          <div
            className={`${Styles.third_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <div className={Styles.third_form_air}>
                <p className={Styles.third_form_P}>Параметры воздуха:</p>
                <div className={Styles.third_form_columns_block_right}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tнач = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Фнач = %"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tкон = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"dкон = г/кг"}
                    value={""}
                  />
                  <p>или</p>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Фкон = %"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.third_form_radios_two}>
                <p className={Styles.third_form_P}>Комплектация:</p>
                <div className={Styles.third_form_radios_wrapp}>
                  <CheckboxWithLabel
                    name={"eeww"}
                    id={"eeww"}
                    title={"Насос"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                  <CheckboxWithLabel
                    name={"rrww"}
                    id={"rrww"}
                    title={"Самоочистка"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Сотовое увлажнение</h3>
          </div>
          <div
            className={`${Styles.third_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <div className={Styles.third_form_air}>
                <div className={Styles.third_form_columns_block_right}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tнач = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Фнач = %"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Gпара = кг/ч"}
                    value={""}
                  />{" "}
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tкон = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"dкон = г/кг"}
                    value={""}
                  />
                  <p>или</p>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Фкон = %"}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.third_form_radios_two}>
                <p className={Styles.third_form_P}>Паровое увлажнение</p>
                <RadioBoxContainer title={"Да"} />
                <RadioBoxContainer title={"Нет"} />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.third_form_top_title}>
          <p>Блок шумоглушения</p>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Приток</h3>
          </div>
          <div
            className={`${Styles.third_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <div className={Styles.radios_middle_bottom_checkbox}>
                <CheckboxWithLabel
                  name={"uweu"}
                  id={"uweu"}
                  title={"Вход"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"uqeu"}
                  id={"uqeu"}
                  title={"Выход"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
              <div className={Styles.third_form_columns_block_last}>
                <div>
                  <RadioBoxContainer title={"500 мм"} />
                </div>
                <div>
                  <RadioBoxContainer title={"1000 мм"} />
                </div>
                <div>
                  <RadioBoxContainer title={"1500 мм"} />
                </div>
                <div>
                  <RadioBoxContainer title={"2000 мм"} />
                </div>
              </div>
              <div className={Styles.third_form_input_short}>
                <LayoutInput
                  name={""}
                  id={""}
                  title={"или макс. Дб"}
                  value={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Вытяжка</h3>
          </div>
          <div
            className={`${Styles.third_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <div className={Styles.radios_middle_bottom_checkbox}>
                <CheckboxWithLabel
                  name={"uweu"}
                  id={"uweu"}
                  title={"Вход"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"uqeu"}
                  id={"uqeu"}
                  title={"Выход"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
              <div className={Styles.third_form_columns_block_last}>
                <div>
                  <RadioBoxContainer title={"500 мм"} />
                </div>
                <div>
                  <RadioBoxContainer title={"1000 мм"} />
                </div>
                <div>
                  <RadioBoxContainer title={"1500 мм"} />
                </div>
                <div>
                  <RadioBoxContainer title={"2000 мм"} />
                </div>
              </div>
              <div className={Styles.third_form_input_short}>
                <LayoutInput
                  name={""}
                  id={""}
                  title={"или макс. Дб"}
                  value={""}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.third_form_inputs}>
          <div className={Styles.first_form_left_block}>
            <h3 className={Styles.first_form_h3}>Комплект автоматики </h3>
          </div>
          <div
            className={`${Styles.third_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.radios_middle_bottom_checkbox}>
              <div className={Styles.third_form_columns_block_last}>
                <div>
                  <RadioBoxContainer
                    title={
                      "Да (необходимо заполнить опросный лист для комплекта автоматики)"
                    }
                  />
                </div>
                <div>
                  <RadioBoxContainer title={"Нет"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={Styles.third_form_textarea}>
            <textarea placeholder="Дополнительные сведения" />
          </div>
        </div>
        <div className={Styles.third_form_button}>
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { ThirdForm };
