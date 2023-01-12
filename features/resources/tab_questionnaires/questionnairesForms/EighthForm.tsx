import Styles from "features/resources/tab_questionnaires/questionnairesForms/QuestionnariesForms.module.scss";
import React from "react";
import { LayoutInput } from "components/input";
import { RadioBoxContainer } from "components/radiobox";

import { Button } from "components/button";
import { CheckboxWithLabel } from "components/checkbox";

const EighthForm = () => {
  const handleOnchangeCheckbox = () => {
    console.log("Клик");
  };
  return (
    <div className={Styles.eighth_form}>
      <div className={Styles.eighth_form_top_title}>
        <p>
          Опросный лист на проектирование и изготовление оборудования: ВОЗДУШНАЯ
          ЗАВЕСА AERO BLAST ВКЗ
        </p>
      </div>
      <div className={Styles.eighth_form_inputs_container}>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
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
          <div className={Styles.eighth_form_right_block}>
            <textarea placeholder="Объект" />
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
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
          <div className={Styles.eighth_form_right_block}>
            <textarea placeholder="Адрес объекта" />
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
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
          <div className={Styles.eighth_form_right_block}>
            <div className={Styles.eighth_form_right_block}>
              <div className={Styles.eighth_form_right_block_middle_input}>
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
        <div className={Styles.eighth_form_radios}>
          <RadioBoxContainer title={"Проектировщик"} />
          <RadioBoxContainer title={"Заказчик"} />
          <RadioBoxContainer title={"Строительно-монтажная организация"} />
        </div>
        <div className={Styles.eighth_form_top_title}>
          <p>Размеры помещения в зоне установки завесы</p>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>Состав кондиционера</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border} ${Styles.eighth_form_left_block}`}
          >
            <h3 className={Styles.eighth_form_h3}>
              Технические характеристики оборудования, входящего в состав
              установки
            </h3>
          </div>
        </div>
        <div className={Styles.eighth_form_top_title}>
          <p>Приток</p>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>Воздухозаборный клапан</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border}`}
          >
            <RadioBoxContainer title={"Откр./Закр. с пруж. возвратом"} />
            <RadioBoxContainer title={"Откр./Закр."} />
            <RadioBoxContainer title={"Плавное регулирование"} />
            <RadioBoxContainer title={"Ручное управление"} />
            <RadioBoxContainer
              title={"24в, AC/DC -питание привода воздухозаборного клапана"}
            />
            <RadioBoxContainer
              title={"230В, AC -питание привода воздухозаборного клапана"}
            />
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={
                  "Обогрев воздухозаборного клапана с приводом (указать ток А, напряжение питания В)"
                }
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>Рециркуляционный клапан</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border}`}
          >
            <RadioBoxContainer title={"Откр./Закр. с пруж. возвратом"} />
            <RadioBoxContainer title={"Откр./Закр."} />
            <RadioBoxContainer title={"Плавное регулирование"} />
            <RadioBoxContainer title={"Ручное управление"} />
            <RadioBoxContainer
              title={"24в, AC/DC -питание привода рециркуляционного клапана"}
            />
            <RadioBoxContainer
              title={"30В, AC -питание привода рециркуляционного клапана"}
            />
            <div className={Styles.first_form_textarea}>
              <textarea placeholder="Алгоритм работы и параметры управления с воздухозаборным клапаном:" />
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>
              Выбросной клапан (вытяжка)
            </h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border}`}
          >
            <RadioBoxContainer title={"Откр./Закр. с пруж. возвратом"} />
            <RadioBoxContainer title={"Откр./Закр."} />
            <RadioBoxContainer title={"Плавное регулирование"} />
            <RadioBoxContainer title={"Ручное управление"} />
            <RadioBoxContainer
              title={
                "24 В, AC/DC -питание привода выбросного ( вытяжка ) клапана"
              }
            />
            <RadioBoxContainer
              title={
                "230 В, AC -питание привода выбросного ( вытяжка ) клапана"
              }
            />
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={
                  "Обогрев воздухозаборного клапана с приводом (указать ток А, напряжение питания В)"
                }
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>Фильтр</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={
                  "Обогрев воздухозаборного клапана с приводом (указать ток А, напряжение питания В)"
                }
                className={Styles.input__item}
                value={""}
              />
            </div>
            <RadioBoxContainer
              title={"Датчик-реле давление (контроль «порогового» значения)"}
            />
            <RadioBoxContainer title={"Датчик давление (0-10 В)"} />
            <div className={Styles.input}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={
                  "Обогрев воздухозаборного клапана с приводом (указать ток А, напряжение питания В)"
                }
                className={Styles.input__item}
                value={""}
              />
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>Нагреватель</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_flex} `}
          >
            <div className={Styles.eighth_form_middle}>
              <div className={Styles.eighth_form_title}>
                <p>
                  Теплоноситель горячая вода (этиленгликоль концентрация до 40%)
                </p>
              </div>
              <div className={Styles.eighth_form_middle_content}>
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
                  <div className={Styles.input_column}>
                    <p>
                      Указать тип изделия «ВЕКТОР», строки ниже не заполняются!
                    </p>
                    <div className={Styles.input}>
                      <LayoutInput
                        name={"email"}
                        id={"email_id"}
                        title={"Укажите тип"}
                        className={Styles.input__item}
                        value={""}
                      />
                    </div>
                  </div>
                  <RadioBoxContainer
                    title={"Циркуляционный насос однофазный"}
                  />
                  <RadioBoxContainer
                    title={"Циркуляционный насос трехфазный"}
                  />
                  <CheckboxWithLabel
                    name={"ccc"}
                    id={"ccc"}
                    title={"Клеемная коробка"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                  <CheckboxWithLabel
                    name={"cc"}
                    id={"cc"}
                    title={"Клеммная колодка"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                  <div className={Styles.input_column}>
                    <p>
                      Указать тип изделия «ВЕКТОР», строки ниже не заполняются!
                    </p>
                    <div className={Styles.input}>
                      <LayoutInput
                        name={"email"}
                        id={"email_id"}
                        title={"Ток циркуляционного насоса, А"}
                        className={Styles.input__item}
                        value={""}
                      />
                    </div>
                  </div>
                  <div className={Styles.input_column}>
                    <RadioBoxContainer
                      title={
                        "24в, AC/DC -питание привода клапана по теплоносителю"
                      }
                    />
                    <RadioBoxContainer
                      title={
                        "30В, AC -питание привода клапана по теплоносителю"
                      }
                    />
                    <RadioBoxContainer
                      title={
                        "аналоговое управление (0…10в) приводом клапана по теплоносителю"
                      }
                    />
                    <RadioBoxContainer
                      title={
                        "аналоговое управление (4…20mA; стандартно - 2-х проводная) приводом клапана по теплоносителю"
                      }
                    />
                    <RadioBoxContainer
                      title={
                        "трехпозиционное управление приводом клапана по теплоносителю"
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={Styles.eighth_form_last}>
              <div className={Styles.eighth_form_title}>
                <p>Пар</p>
              </div>
              <div className={Styles.eighth_form_last_content}>
                <div className={Styles.input_column}>
                  <RadioBoxContainer
                    title={"24в, AC/DC -питание привода клапана по пару"}
                  />
                  <RadioBoxContainer
                    title={"230В, AC -питание привода клапана по пару"}
                  />
                  <RadioBoxContainer
                    title={
                      "аналоговое управление (0…10в) приводом клапана по пару"
                    }
                  />
                  <RadioBoxContainer
                    title={
                      "аналоговое управление (4…20mA; стандартно - 2-х проводная) приводом клапана по пару"
                    }
                  />
                  <RadioBoxContainer
                    title={
                      "трехпозиционное управление приводом клапана по теплоносителю"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>Рециркуляционный клапан</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.eighth_form_right_block_middle_input}>
              <div className={Styles.input}>
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"Количество ступеней и мощность каждой ступени, кВт"}
                  className={Styles.input__item}
                  value={""}
                />
              </div>
            </div>
            <RadioBoxContainer title={"Однофазная схема подключения ступени"} />
            <RadioBoxContainer
              title={
                "Трехфазная схема подключения ступени (33,3% общей мощности ступени на каждую фазу)"
              }
            />
            <div className={Styles.first_form_textarea}>
              <textarea placeholder="Алгоритм работы электрокалорифера. (если в вентиляционной установке два источника тепла (электрический, жидкостной)):" />
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>Охладитель</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.eighth_form_right_block_middle_input}>
              <div className={Styles.input_flex}>
                <p>Указать тип изделия «ВЕКТОР», строки ниже не заполняются!</p>
                <div className={Styles.input}>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Укажите тип"}
                    className={Styles.input__item}
                    value={""}
                  />
                </div>
              </div>
            </div>
            <RadioBoxContainer
              title={"24в, AC/DC -питание привода клапана по холодоносителю"}
            />
            <RadioBoxContainer
              title={"230В, AC -питание привода клапана по холодоносителю"}
            />
            <RadioBoxContainer
              title={
                "аналоговое управление (0…10в) приводом клапана по холодоносителю"
              }
            />
            <RadioBoxContainer
              title={
                "аналоговое управление (4…20mA; стандартно - 2-х проводная) приводом клапана по холодоносителю"
              }
            />
            <RadioBoxContainer
              title={
                "трехпозиционное управление приводом клапана по холодоносителю"
              }
            />
            <div className={Styles.input_column}>
              <CheckboxWithLabel
                name={"ec"}
                id={"ec"}
                title={"Вывод сухих контактов для холодильной машины"}
                onChangeData={() => handleOnchangeCheckbox()}
              />
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>Оросительная камера</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.eighth_form_right_block_middle_input}>
              <div className={Styles.eighth_form_checkboxes}>
                <p className={Styles.р}>Работа:</p>
                <div className={Styles.input_columns}>
                  <CheckboxWithLabel
                    name={"ecs"}
                    id={"ecs"}
                    title={"Зима"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                  <CheckboxWithLabel
                    name={"ecc"}
                    id={"ecc"}
                    title={"Лето"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <RadioBoxContainer title={"Насос однофазный"} />
                  <RadioBoxContainer title={"Насос трехфазный"} />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <CheckboxWithLabel
                    name={"ecs"}
                    id={"ecs"}
                    title={"Насос со встроенным реле аварии насоса"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                  <CheckboxWithLabel
                    name={"ecc"}
                    id={"ecc"}
                    title={"Рабочий/резервный насос"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input}>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Ток насоса, А"}
                    className={Styles.input__item}
                    value={""}
                  />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <CheckboxWithLabel
                  name={"rf"}
                  id={"rf"}
                  title={"Датчик влажности (стандартно комнатный)"}
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input}>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Указать иное"}
                    className={Styles.input__item}
                    value={""}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>Вентилятор</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.eighth_form_right_block_middle_input}>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"Ток вентилятора, А"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                  <RadioBoxContainer title={"Двигатель однофазный АС"} />
                  <RadioBoxContainer title={"Двигатель трехфазный АС"} />
                  <RadioBoxContainer title={"ЕС мотор"} />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <CheckboxWithLabel
                    name={"escs"}
                    id={"escs"}
                    title={
                      "Частотный преобразователь (для ЕС моторов при отсутствии встроенного блока управления указывается обязательно, при наличии не указывать!)"
                    }
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                  <CheckboxWithLabel
                    name={"aecc"}
                    id={"aecc"}
                    title={"Двигатель со встроенным реле аварии двигателя"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <RadioBoxContainer
                    title={
                      "Реле перепада давления для контроля работы вентилятора"
                    }
                  />
                  <RadioBoxContainer
                    title={
                      "Датчик перепада давления для контроля работы вентилятора"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>Резервный вентилятор</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.eighth_form_right_block_middle_input}>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"Ток вентилятора, А"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                  <RadioBoxContainer title={"Двигатель однофазный АС"} />
                  <RadioBoxContainer title={"Двигатель трехфазный АС"} />
                  <RadioBoxContainer title={"ЕС мотор"} />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <CheckboxWithLabel
                    name={"escss"}
                    id={"escss"}
                    title={
                      "Частотный преобразователь (для ЕС моторов при отсутствии встроенного блока управления указывается обязательно, при наличии не указывать!)"
                    }
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                  <CheckboxWithLabel
                    name={"aeccc"}
                    id={"aeccc"}
                    title={"Двигатель со встроенным реле аварии двигателя"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <RadioBoxContainer
                    title={
                      "Реле перепада давления для контроля работы вентилятора"
                    }
                  />
                  <RadioBoxContainer
                    title={
                      "Датчик перепада давления для контроля работы вентилятора"
                    }
                  />
                  <RadioBoxContainer
                    title={
                      "24в; AC/DC -питание приводов отсечных воздушных заслонок перед рабочим/резервным вентилятором"
                    }
                  />
                  <RadioBoxContainer
                    title={
                      "230В; AC - питание приводов отсечных воздушных заслонок перед рабочим/резервным вентилятором"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>Вытяжной вентилятор</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.eighth_form_right_block_middle_input}>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"Ток вентилятора, А"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                  <RadioBoxContainer title={"Двигатель однофазный АС"} />
                  <RadioBoxContainer title={"Двигатель трехфазный АС"} />
                  <RadioBoxContainer title={"ЕС мотор"} />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <CheckboxWithLabel
                    name={"escss"}
                    id={"escss"}
                    title={
                      "Частотный преобразователь (для ЕС моторов при отсутствии встроенного блока управления указывается обязательно, при наличии не указывать!)"
                    }
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                  <CheckboxWithLabel
                    name={"aeccc"}
                    id={"aeccc"}
                    title={"Двигатель со встроенным реле аварии двигателя"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <RadioBoxContainer
                    title={
                      "Реле перепада давления для контроля работы вентилятора"
                    }
                  />
                  <RadioBoxContainer
                    title={
                      "Датчик перепада давления для контроля работы вентилятора"
                    }
                  />
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"Порядок работы с приточным вентилятором:"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_inputs}>
          <div className={Styles.eighth_form_left_block}>
            <h3 className={Styles.eighth_form_h3}>
              Резервный вытяжной вентилятор{" "}
            </h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_border}`}
          >
            <div className={Styles.eighth_form_right_block_middle_input}>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <div className={Styles.input}>
                    <LayoutInput
                      name={"email"}
                      id={"email_id"}
                      title={"Ток вентилятора, А"}
                      className={Styles.input__item}
                      value={""}
                    />
                  </div>
                  <RadioBoxContainer title={"Двигатель однофазный АС"} />
                  <RadioBoxContainer title={"Двигатель трехфазный АС"} />
                  <RadioBoxContainer title={"ЕС мотор"} />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <CheckboxWithLabel
                    name={"escss"}
                    id={"escss"}
                    title={
                      "Частотный преобразователь (для ЕС моторов при отсутствии встроенного блока управления указывается обязательно, при наличии не указывать!)"
                    }
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                  <CheckboxWithLabel
                    name={"aeccc"}
                    id={"aeccc"}
                    title={"Двигатель со встроенным реле аварии двигателя"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                </div>
              </div>
              <div className={Styles.eighth_form_checkboxes}>
                <div className={Styles.input_columns}>
                  <RadioBoxContainer
                    title={
                      "24в; AC/DC -питание приводов отсечных воздушных заслонок перед рабочим/резервным вентилятором"
                    }
                  />
                  <RadioBoxContainer
                    title={
                      "230В; AC - питание приводов отсечных воздушных заслонок перед рабочим/резервным вентилятором"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_exchanger}>
          <div
            className={`${Styles.eighth_form_left_block} ${Styles.eighth_form_exchanger_first_block}`}
          >
            <h3 className={Styles.eighth_form_h3}>Нагреватель</h3>
          </div>
          <div
            className={`${Styles.eighth_form_right_block} ${Styles.right_flex}`}
          >
            <div className={Styles.eighth_form_middle}>
              <div className={Styles.eighth_form_first}>
                <div className={Styles.eighth_form_title}>
                  <p>Роторный</p>
                </div>
                <div className={Styles.input_column}>
                  <RadioBoxContainer
                    title={"Защита от обмерзания по температуре"}
                  />
                  <RadioBoxContainer
                    title={
                      "Защита от обмерзания по перепаду давления (датчик –реле)"
                    }
                  />
                </div>
              </div>
              <div className={Styles.eighth_form_title}>
                <p>Пластинчатый</p>
              </div>
              <div>
                <RadioBoxContainer
                  title={"Защита от обмерзания по температуре"}
                />
                <RadioBoxContainer
                  title={
                    "Защита от обмерзания по перепаду давления (датчик –реле)"
                  }
                />
                <RadioBoxContainer
                  title={
                    "24в; AC/DC -питание приводов воздушных заслонок обводного канала"
                  }
                />
                <RadioBoxContainer
                  title={
                    "230В; AC - питание приводов воздушных заслонок обводного канала"
                  }
                />
              </div>
            </div>
            <div className={Styles.eighth_form_last}>
              <div className={Styles.eighth_form_title}>
                <p>Жидкостной (этиленгликоль концентрация до 40%)</p>
              </div>
              <div className={Styles.input_column}>
                <CheckboxWithLabel
                  name={"e"}
                  id={"e"}
                  title={
                    "Датчик протока (защита циркуляционного насоса от сухого хода)"
                  }
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <CheckboxWithLabel
                  name={"r"}
                  id={"r"}
                  title={
                    "Датчик-реле давления (защита циркуляционного насоса от сухого хода)"
                  }
                  onChangeData={() => handleOnchangeCheckbox()}
                />
                <div className={Styles.input_and_title}>
                  <p>
                    Указать тип изделия «ВЕКТОР», строки ниже не заполняются!
                  </p>
                  <LayoutInput
                    name={"email"}
                    id={"email_id"}
                    title={"Укажите тип"}
                    className={Styles.input__item}
                    value={""}
                  />
                </div>
                <RadioBoxContainer title={"Насос однофазный"} />
                <RadioBoxContainer title={"Насос трехфазный"} />
                <div className={Styles.input_and_title}>
                  <CheckboxWithLabel
                    name={"eы"}
                    id={"eы"}
                    title={"Насос со встроенным реле аварии насоса"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                  <CheckboxWithLabel
                    name={"сr"}
                    id={"сr"}
                    title={"Ток насоса, А"}
                    onChangeData={() => handleOnchangeCheckbox()}
                  />
                </div>
                <LayoutInput
                  name={"email"}
                  id={"email_id"}
                  title={"Укажите тип"}
                  className={Styles.input__item}
                  value={""}
                />
                <div className={Styles.input_and_title}>
                  <RadioBoxContainer
                    title={
                      "24в; AC/DC -питание привода клапана по теплоносителю"
                    }
                  />
                  <RadioBoxContainer
                    title={"230В; AC -питание привода клапана по теплоносителю"}
                  />
                  <RadioBoxContainer
                    title={
                      "Аналоговое управление (0…10в) приводом клапана по теплоносителю"
                    }
                  />
                  <RadioBoxContainer
                    title={
                      "Аналоговое управление (4…20mA; стандартно - 2-х проводная) приводом клапана по теплоносителю"
                    }
                  />
                  <RadioBoxContainer
                    title={
                      "Трехпозиционное управление приводом клапана по теплоносителю"
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.eighth_form_top_title}>
          <p>Дополнительные параметры</p>
        </div>
        <div className={Styles.eighth_form_columns_block_last}>
          <div className={Styles.input_and_title}>
            <RadioBoxContainer title={"АВР (2 ввода) по питанию"} />
            <RadioBoxContainer
              title={
                "Отдельный ввод питания по первой категории для подключения цепей защиты от заморозки (насос теплоносителя, цепи управления) в соответствии с СНиП 41-01-2003"
              }
            />
          </div>
          <CheckboxWithLabel
            name={"rr"}
            id={"rr"}
            title={"Системы заземления типа IT (c изолированной нейтралью)"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"ee"}
            id={"ee"}
            title={
              "Самозапуск установки после кратковременного пропадания питания на вводе в шкаф"
            }
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"rrt"}
            id={"rrt"}
            title={"Защита от замерзания с капиллярником перед теплообменником"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"gf"}
            id={"gf"}
            title={"Защита от замерзания без отключения клапана и вентилятора"}
            onChangeData={() => handleOnchangeCheckbox()}
          />{" "}
          <CheckboxWithLabel
            name={"df"}
            id={"df"}
            title={"Комнатный датчик температуры"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"sd"}
            id={"sd"}
            title={"Наружный датчик температуры"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <div className={Styles.checkbox_wrapp}>
            <RadioBoxContainer title={"Освещение секций 12В, 40Вт"} />
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Количество секций"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div
          className={`${Styles.fifth_form_top_title} ${Styles.border_top_title}`}
        >
          <p>Диспетчеризация</p>
        </div>
        <div className={Styles.eighth_form_columns_block_last}>
          <CheckboxWithLabel
            name={"rcr"}
            id={"rcr"}
            title={
              "Требуется ли диспетчеризация в форме «сухого контакта» (сигнализирующая) Если да, приложить перечень требуемых сигналов"
            }
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <div className={`${Styles.first_form_textarea} ${Styles.textarea}`}>
            <textarea placeholder="" />
          </div>
          <div className={Styles.pharagrafs}>
            <p className={Styles.p}>Например:</p>
            <p className={Styles.p}>1) Дистанционное включение установки</p>
            <p className={Styles.p}>2) Работа установки</p>
            <p className={Styles.p}>3) Авария установки</p>
            <p className={Styles.p}>4) Загрязнение фильтра и т.д.</p>
          </div>
          <CheckboxWithLabel
            name={"rcc"}
            id={"rcc"}
            title={"Требуется ли диспетчеризация по протоколу (управляющая)"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <p className={Styles.p}>Если да выберите протокол:</p>
          <RadioBoxContainer title={"RS485 ModBus RTU"} />
          <RadioBoxContainer title={"ModBus TCP/IP – шина Ethernet"} />
          <div className={Styles.checkbox_wrapp}>
            <RadioBoxContainer title={"Другое, указать"} />
            <div className={Styles.input__item}>
              <LayoutInput
                name={"email"}
                id={"email_id"}
                title={"Другое"}
                value={""}
              />
            </div>
          </div>
        </div>
        <div
          className={`${Styles.fifth_form_top_title} ${Styles.border_top_title}`}
        >
          <p>
            !!! Необходимо приложить перечень требуемых сигналов, с учетом
            индикации и управления. Указать распределение систем по шкафам
            управления.
          </p>
        </div>
        <div className={Styles.eighth_form_columns_block_last}>
          <CheckboxWithLabel
            name={"rcrx"}
            id={"rcrx"}
            title={"Требуется установка общей системы диспетчеризации"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <CheckboxWithLabel
            name={"rccc"}
            id={"rccc"}
            title={"Интеграция в существующую систему диспетчеризации"}
            onChangeData={() => handleOnchangeCheckbox()}
          />
          <div className={Styles.input__item}>
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Указать производителя"}
              value={""}
            />
          </div>
        </div>
        <div
          className={`${Styles.fifth_form_top_title} ${Styles.border_top_title}`}
        >
          <p>Дополнительные требования к шкафу САУ</p>
        </div>
        <div>
          <div className={Styles.third_form_textarea}>
            <textarea placeholder="" />
          </div>
        </div>
        <div
          className={`${Styles.eighth_form_button} ${Styles.border_top_title}`}
        >
          <Button children={"Отправить"} type={"submit"} />
        </div>
      </div>
    </div>
  );
};

export { EighthForm };
