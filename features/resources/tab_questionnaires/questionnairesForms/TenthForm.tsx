import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";

import { Button } from "components/button";
import { CheckboxWithLabel } from "components/checkbox";

const TenthForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };

  return (
    <div className={Styles.tenth_form}>
      <div className={Styles.tenth_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования:
          ЦЕНТРАЛЬНЫЕ КОНДИЦИОНЕРЫ
        </p>
      </div>
      <div className={Styles.tenth_form_inputs_container}>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
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
          <div className={Styles.tenth_form_right_block}>
            <textarea placeholder="Объект" />
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
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
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
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
          <div className={Styles.tenth_form_right_block}>
            <div className={Styles.tenth_form_right_block}>
              <div className={Styles.tenth_form_right_block_middle_input}>
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
        <div className={Styles.tenth_form_radios}>
          <RadioBoxContainer title={"Проектировщик"} />
          <RadioBoxContainer title={"Заказчик"} />
          <RadioBoxContainer title={"Строительно-монтажная организация"} />
        </div>
        <div
          className={`${Styles.tenth_form_top_title} ${Styles.border_title}`}
        >
          <p>Характеристики установки</p>
        </div>
        <div
          className={`${Styles.tenth_form_columns_block_right} ${Styles.tenth_form_colum_gap}`}
        >
          <div className={Styles.input__item}>
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Типоразмер КЦКП"}
              value={""}
            />
          </div>
          <div className={Styles.input__item}>
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Количество, шт"}
              value={""}
            />
          </div>
        </div>
        <div className={Styles.tenth_form_inputs_grid}>
          <div className={Styles.tenth_form_inputs_grid_row}>
            <p>Тип системы:</p>
            <div className={Styles.items}>
              <RadioBoxContainer title={"Приток"} />
              <RadioBoxContainer title={"Вытяжка"} />
              <RadioBoxContainer title={"Приточно-вытяжная с рециркуляцией"} />
              <RadioBoxContainer title={"Приточно-вытяжная с рекуперацией"} />
            </div>
          </div>
          <div className={Styles.tenth_form_inputs_grid_row}>
            <p>Специальные исполнения:</p>
            <div className={Styles.items}>
              <RadioBoxContainer title={"Северное 1 (-30…-40)"} />
              <RadioBoxContainer title={"Северное 2 (-40…-50)"} />
              <RadioBoxContainer title={"Северное 3 (-50…-70)"} />
              <RadioBoxContainer title={"Наружное"} />
              <RadioBoxContainer title={"Медицинское"} />
              <RadioBoxContainer title={"Гигиеническое:"} />
              <div className={Styles.items_row}>
                <RadioBoxContainer title={"Г1 (окраска)"} />
                <RadioBoxContainer title={"Г2 (Нержавеющая сталь)"} />
                <RadioBoxContainer title={"Г3 (оцинк. ст. без покрытия)"} />
              </div>
              <p>Специальные исполнения:</p>
              <p>Указать цвет по каталогу RAL (по умолчанию RAL 7004):</p>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Укажите цвет"}
                value={""}
              />
            </div>
          </div>
          <div className={Styles.tenth_form_inputs_grid_row}>
            <p>Сторона обслуживания по притоку (по ходу движения воздуха):</p>
            <div className={Styles.items}>
              <RadioBoxContainer title={"Справа"} />
              <RadioBoxContainer title={"Слева"} />
            </div>
          </div>
          <div className={Styles.tenth_form_inputs_grid_row}>
            <p>Поставка*:</p>
            <div className={Styles.items}>
              <RadioBoxContainer title={"Блоки"} />
              <RadioBoxContainer title={"Моноблоки"} />
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <p>
            *По умолчанию изготавливаются моноблоками с длинной до 2,5 м.
            Большие установки с расходом больше 50000 м3/ч поставляются в
            разобранном виде.
          </p>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3 className={Styles.tenth_form_h3}>Состав кондиционера</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border} ${Styles.tenth_form_left_block}`}
          >
            <h3 className={Styles.tenth_form_h3}>Технические характеристики</h3>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Воздухоприемная секция</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.tenth_form_schemes_images_block}>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckv1.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"1"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckv2.webp" alt={"ckv2"} />
                <div>
                  <RadioBoxContainer title={"2"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckv3.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"3"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckv4.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"4"} />
                </div>
              </div>
            </div>
            <div className={Styles.inputs_row}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Рециркуляция: %"}
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
            <p className={Styles.p}>или</p>
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
              <RadioBoxContainer title={"Гибкая вставка на клапан"} />
              <RadioBoxContainer title={"Жесткая вставка на клапан"} />
              <RadioBoxContainer title={"ВСК"} />
              <RadioBoxContainer title={"RDH"} />
            </div>
            <div></div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Блок вентилятора </h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Расход воздуха, L"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"Свободное давление"}
                value={""}
              />
            </div>
            <div className={Styles.tenth_form_schemes_images_block}>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckbv1.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"1"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckbv2.webp" alt={"ckv2"} />
                <div>
                  <RadioBoxContainer title={"2"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckbv3.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"3"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckbv4.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"4"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckbv5.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"5"} />
                </div>
              </div>
            </div>
            <div className={Styles.one_radio_and_input}>
              <RadioBoxContainer
                title={"Гибкая вставка на выхлопе вентилятора"}
              />
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Резервный вентилятор</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"Да"} />
              <RadioBoxContainer title={"Нет"} />
            </div>
            <div className={Styles.inputs_row}>
              <p>Установка:</p>
              <RadioBoxContainer title={"По высоте (в два этажа)"} />
              <RadioBoxContainer title={"В плане (рядом друг с другом)"} />
            </div>
            <div className={Styles.tenth_form_schemes_images_block}>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckbv1.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"1"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckbv2.webp" alt={"ckv2"} />
                <div>
                  <RadioBoxContainer title={"2"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckbv3.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"3"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckbv4.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"4"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/ckbv5.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"5"} />
                </div>
              </div>
            </div>
            <div className={Styles.one_radio_and_input}>
              <RadioBoxContainer
                title={"Гибкая вставка на выхлопе вентилятора"}
              />
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Блоки фильтров</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.right_block}>
              <div className={Styles.right_block_first_item}>
                <p>Грубой очистки ячейковый G3 (плоский)</p>
              </div>
              <div className={Styles.inputs_row}>
                <p>Класс</p>
                <RadioBoxContainer title={"G3"} />
              </div>
            </div>
            <div className={Styles.right_block}>
              <div className={Styles.right_block_first_item}>
                <p>Грубой и тонкой очистки карманный G4…F9</p>
              </div>
              <div className={Styles.inputs_row}>
                <p>Класс</p>
                <CheckboxWithLabel
                  name={"dd"}
                  id={"dd"}
                  title={"G4"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"dsd"}
                  id={"dsd"}
                  title={"F5"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"add"}
                  id={"add"}
                  title={"F6"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"uqseu"}
                  id={"uqseu"}
                  title={"f7"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"uqseu"}
                  id={"uqseu"}
                  title={"f8"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"uqseu"}
                  id={"uqseu"}
                  title={"f9"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Блок воздухонагревателя жидкостный</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.right_block}>
              <div className={Styles.right_block_first_item}>
                <p>I подогрев</p>
              </div>
              <div className={Styles.width_block}>
                <p className={Styles.p}>Воздух:</p>
                <div className={Styles.inputs_row}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tпр = oC"}
                    value={""}
                  />
                  <LayoutInput name={""} id={""} title={"tк = %"} value={""} />
                </div>
                <p className={Styles.p}>Теплоноситель:</p>
                <div className={Styles.inputs_row}>
                  <LayoutInput name={""} id={""} title={"tн = oC"} value={""} />
                  <LayoutInput name={""} id={""} title={"tк = %"} value={""} />
                </div>
                <div className={Styles.inputs_row}>
                  <p>Максимальное гидравлическое сопративление =</p>
                  <LayoutInput name={""} id={""} title={"kPa"} value={""} />
                </div>
                <p className={Styles.kanal}>Обводной канал управление</p>
                <div className={Styles.inputs_row}>
                  <RadioBoxContainer title={"Электропривод"} />
                  <RadioBoxContainer title={"Ручной привод"} />
                </div>
              </div>
            </div>
            <div
              className={`${Styles.right_block} ${Styles.border_title} ${Styles.top_padding}`}
            >
              <div className={Styles.right_block_first_item}>
                <p>II подогрев</p>
              </div>
              <div className={Styles.width_block}>
                <p className={Styles.p}>Воздух:</p>
                <div className={Styles.inputs_row}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tпр = oC"}
                    value={""}
                  />
                  <LayoutInput name={""} id={""} title={"tк = %"} value={""} />
                </div>
                <p className={Styles.p}>Теплоноситель:</p>
                <div className={Styles.inputs_row}>
                  <LayoutInput name={""} id={""} title={"tн = oC"} value={""} />
                  <LayoutInput name={""} id={""} title={"tк = %"} value={""} />
                </div>
                <div className={Styles.inputs_row}>
                  <p>Производительность, кВт (необязательно)</p>
                  <LayoutInput name={""} id={""} title={"кВт"} value={""} />
                </div>
                <p className={Styles.kanal}>Обводной канал управление</p>
                <div className={Styles.inputs_row}>
                  <RadioBoxContainer title={"Электропривод"} />
                  <RadioBoxContainer title={"Ручной привод"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Блок воздухонагревателя паровой</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <p>Параметры воздуха:</p>
              <LayoutInput
                name={"email"}
                id={""}
                title={"tпр = oC"}
                value={""}
              />
              <LayoutInput name={"email"} id={""} title={"tк = %"} value={""} />
            </div>
            <div className={Styles.inputs_row}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"Давление пара = bar(a)"}
                value={""}
              />
              <RadioBoxContainer title={"Насыщеный"} />
              <RadioBoxContainer title={"Перегретый"} />
            </div>
            <p>Необходимость обвязки</p>
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"Да"} />
              <RadioBoxContainer title={"Нет"} />
            </div>
            <p>Производительность, кВт (необязательно)</p>
            <div className={Styles.inputs_row}>
              <LayoutInput name={""} id={""} title={"кВт"} value={""} />
            </div>
            <p className={Styles.kanal}>Обводной канал управление</p>
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"Электропривод"} />
              <RadioBoxContainer title={"Ручной привод"} />
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Блок электрич. воздухонаг</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.right_block}>
              <div className={Styles.right_block_first_item}>
                <p>I подогрев</p>
              </div>
              <div className={Styles.width_block}>
                <div className={Styles.inputs_row}>
                  <LayoutInput name={""} id={""} title={"tн = oC"} value={""} />
                  <LayoutInput name={""} id={""} title={"tк = %"} value={""} />
                </div>
                <p className={Styles.p}>
                  Производительность, кВт (необязательно)
                </p>
                <div className={Styles.inputs_row}>
                  <LayoutInput name={""} id={""} title={"кВт"} value={""} />
                </div>
              </div>
            </div>
            <div
              className={`${Styles.right_block} ${Styles.border_title} ${Styles.top_padding}`}
            >
              <div className={Styles.right_block_first_item}>
                <p>II подогрев</p>
              </div>
              <div className={Styles.width_block}>
                <div className={Styles.inputs_row}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tпр = oC"}
                    value={""}
                  />
                  <LayoutInput name={""} id={""} title={"tк = %"} value={""} />
                </div>
                <p className={Styles.p}>
                  Производительность, кВт (необязательно)
                </p>
                <div className={Styles.inputs_row}>
                  <LayoutInput name={""} id={""} title={"кВт"} value={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Блок воздухоохладителя с сепаратором и поддоном</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <p>Параметры воздуха</p>
            <div className={Styles.inputs_row}>
              <LayoutInput
                name={"email"}
                id={""}
                title={"tн = oC"}
                value={""}
              />
              <LayoutInput
                name={"email"}
                id={""}
                title={"φн = oC"}
                value={""}
              />
              <LayoutInput name={"email"} id={""} title={"tк = %"} value={""} />
              <LayoutInput name={"email"} id={""} title={"φк = %"} value={""} />
            </div>
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"Фреон, указать тип"} />
              <LayoutInput
                name={"email"}
                id={""}
                title={"Тип фреона"}
                value={""}
              />
            </div>
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"Вода"} />
            </div>
            <div className={Styles.inputs_row}>
              <p>&nbsp&nbsp&nbsp&nbsp tкн = oC</p>
              <LayoutInput name={""} id={""} title={"tкн = oC"} value={""} />
            </div>
            <div className={Styles.inputs_row}>
              <p>&nbsp&nbsp&nbsp&nbsp tкк = oC</p>
              <LayoutInput name={""} id={""} title={"tкк = oC"} value={""} />
            </div>
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"Гликоль"} />
            </div>
            <div className={Styles.inputs_row}>
              <p>&nbsp&nbsp&nbsp&nbsp Указать тип и кондиционер:</p>
              <LayoutInput name={""} id={""} title={"Указать тип"} value={""} />
            </div>
            <div className={Styles.inputs_row}>
              <p>&nbsp&nbsp&nbsp&nbsp tкн = oC</p>
              <LayoutInput name={""} id={""} title={"tкн = oC"} value={""} />
            </div>
            <div className={Styles.inputs_row}>
              <p>&nbsp&nbsp&nbsp&nbsp tкк = oC</p>
              <LayoutInput name={""} id={""} title={"tкк = oC"} value={""} />
            </div>
            <div className={Styles.inputs_row}>
              <p>Производительность, кВт (необязательно)</p>
              <LayoutInput name={""} id={""} title={"кВт"} value={""} />
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Блоки рекуперации</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.right_block}>
              <div className={Styles.right_block_first_item}>
                <p>на теплообменниках</p>
              </div>
              <div className={Styles.width_block}>
                <div className={Styles.inputs_row}>
                  <LayoutInput
                    name={"email"}
                    id={""}
                    title={"tн = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={""}
                    title={"φн = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={""}
                    title={"tк = %"}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={""}
                    title={"φк = %"}
                    value={""}
                  />
                </div>
                <div className={Styles.inputs_row}>
                  <p>Тип гликоля:</p>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Тип гликоля"}
                    value={""}
                  />
                </div>
                <div className={Styles.inputs_row}>
                  <p>Концентрация:</p>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Концентрация"}
                    value={""}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${Styles.right_block} ${Styles.border_title} ${Styles.top_padding}`}
            >
              <div className={Styles.right_block_first_item}>
                <p>пластинчатый</p>
              </div>
              <div className={Styles.width_block}>
                <p>Параметры воздуха</p>
                <div className={Styles.inputs_row}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tпр = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"φпр = oC"}
                    value={""}
                  />
                  <LayoutInput name={""} id={""} title={"tвн = %"} value={""} />
                  <LayoutInput name={""} id={""} title={"φвн = %"} value={""} />
                </div>
              </div>
            </div>
            <div
              className={`${Styles.right_block} ${Styles.border_title} ${Styles.top_padding}`}
            >
              <div className={Styles.right_block_first_item}>
                <p>роторный</p>
              </div>
              <div className={Styles.width_block}>
                <p>Параметры воздуха</p>
                <div className={Styles.inputs_row}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tпр = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"φпр = oC"}
                    value={""}
                  />
                  <LayoutInput name={""} id={""} title={"tвн = %"} value={""} />
                  <LayoutInput name={""} id={""} title={"φвн = %"} value={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Блоки рекуперации</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.right_block}>
              <div className={Styles.right_block_first_item}>
                <p>блок-камера орошения</p>
              </div>
              <div className={Styles.width_block}>
                <p>Параметры воздуха</p>
                <div className={Styles.inputs_row}>
                  <LayoutInput
                    name={"email"}
                    id={""}
                    title={"tн = oC"}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={""}
                    title={"d = г/кг"}
                    value={""}
                  />
                  <LayoutInput
                    name={"email"}
                    id={""}
                    title={"dконеч = d/кг"}
                    value={""}
                  />
                </div>
                <div className={Styles.inputs_row}>
                  <p>Коэффициент адиабатической эффективности :</p>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"Коэффициент"}
                    value={""}
                  />
                </div>
                <p className={Styles.kanal}>Комплектация:</p>
                <div className={Styles.inputs_row}>
                  <CheckboxWithLabel
                    name={"uqeuc"}
                    id={"uqeuc"}
                    title={"Насос"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                </div>
              </div>
            </div>
            <div
              className={`${Styles.right_block} ${Styles.border_title} ${Styles.top_padding}`}
            >
              <div className={Styles.right_block_first_item}>
                <p>блок сотового увлажнения</p>
              </div>
              <div className={Styles.width_block}>
                <div className={Styles.inputs_row}>
                  <LayoutInput
                    name={""}
                    id={""}
                    title={"tнач = oC"}
                    value={""}
                  />
                  <LayoutInput name={""} id={""} title={"dнач ="} value={""} />
                  <LayoutInput name={""} id={""} title={"dкон = "} value={""} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Блок шумоглушения</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <CheckboxWithLabel
                name={"uqeu"}
                id={"uqeu"}
                title={"На входе"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
              <CheckboxWithLabel
                name={"uqeu"}
                id={"uqeu"}
                title={"На выходе"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
            <p>Приток</p>
            <div className={Styles.inputs_row}>
              <p>Длина пластин:</p>
              <RadioBoxContainer title={"500"} />
              <RadioBoxContainer title={"1000"} />
              <RadioBoxContainer title={"1500"} />
              <RadioBoxContainer title={"2000"} />
            </div>
            <p>Вытяжка</p>
            <div className={Styles.inputs_row}>
              <p>Длина пластин:</p>
              <RadioBoxContainer title={"500"} />
              <RadioBoxContainer title={"1000"} />
              <RadioBoxContainer title={"1500"} />
              <RadioBoxContainer title={"2000"} />
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Блок-камера промежуточная</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.tenth_form_schemes_images_block}>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/bkv1.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"1"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/bkv2.webp" alt={"ckv2"} />
                <div>
                  <RadioBoxContainer title={"2"} />
                </div>
              </div>
              <div className={Styles.tenth_form_schemes_images_block_img}>
                <img src="/images/bkv3.webp" alt={"ckv1"} />
                <div>
                  <RadioBoxContainer title={"3"} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.tenth_form_inputs}>
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
        <div className={Styles.tenth_form_inputs}>
          <div className={Styles.tenth_form_left_block}>
            <h3>Упаковка</h3>
          </div>
          <div
            className={`${Styles.tenth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.inputs_row}>
              <RadioBoxContainer title={"Полиэтилен (б/п)"} />
              <RadioBoxContainer
                title={"Деревянная обрешетка (за доп. плату)"}
              />
            </div>
          </div>
        </div>
        <div className={Styles.textarea_block}>
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

export { TenthForm };
