import Styles from "./Description.module.scss";
import { FC, useEffect, useState } from "react";
import { DescriptionTableHeader } from "features/typo_size/desc/DescriptionTableHeader";
import { DescriptionTableItem } from "features/typo_size/desc/DescriptionTableItem";

const DescriptionTable: FC = () => {
  const [tablesData, setTablesData] = useState<string[]>([]);
  const getFile = async (file: string) => {
    return await fetch(file)
      .then(function (response) {
        return response.text();
      })
      .then(function (data) {
        return data.split("\r\n");
      });
  };
  useEffect(() => {
    getFile("/download/test.csv").then((data) => {
      setTablesData(data);
    });
  }, []);

  return (
    <div className={Styles.typesizes__table_container}>
      <table className={Styles.typesizes__table_container_box}>
        <tbody>
          <DescriptionTableHeader title={tablesData[0]} />
          {tablesData.map((e, i) => {
            return i > 0 && <DescriptionTableItem data={e} />;
          })}

          <tr>
            <th
              className={`${Styles.typesizes__table_container_title} ${Styles.typesizes__table_container_title_first}`}
            >
              Рабочие условия
            </th>
            <th
              className={`${Styles.typesizes__table_container_title} ${Styles.typesizes__table_container_title_second}`}
            >
              Значение
            </th>
            <th
              className={`${Styles.typesizes__table_container_title} ${Styles.typesizes__table_container_title_third}`}
            ></th>
          </tr>
          <tr>
            <th className={Styles.item_row}>
              Т воды на входе, сторона источника
            </th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>30,0</th>
            <th className={Styles.item_row}>
              °С <i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th className={Styles.item_row}>
              Т воды на выходе, сторона источника
            </th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>35,0</th>
            <th className={Styles.item_row}>
              °С <i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th className={Styles.item_row}>Жидкость, сторона источника</th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>Вода</th>
            <th className={Styles.item_row}></th>
          </tr>
          <tr>
            <th className={Styles.item_row}>
              Фактор загрязнения, сторона источника
            </th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>
              00,44
            </th>
            <th className={Styles.item_row}>
              <i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th className={Styles.item_row}>
              Т воды на входе, сторона потребителя
            </th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>12,0</th>
            <th className={Styles.item_row}>
              °С <i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th className={Styles.item_row}>
              Т воды на выходе, сторона потребителя
            </th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>7,00</th>
            <th className={Styles.item_row}>
              °С <i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th className={Styles.item_row}>Жидкость, сторона потребителя</th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>Вода</th>
            <th className={Styles.item_row}></th>
          </tr>
          <tr>
            <th className={Styles.item_row}>
              Фактор загрязнения, сторона потребителя
            </th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>
              0,044
            </th>
            <th className={Styles.item_row}>
              <i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th className={Styles.item_row}>Высота на уровнем моря [м]</th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>0</th>
            <th className={Styles.item_row}>
              <i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th
              className={`${Styles.typesizes__table_container_title} ${Styles.typesizes__table_container_title_first}`}
            >
              Производительность
            </th>
            <th
              className={`${Styles.typesizes__table_container_title} ${Styles.typesizes__table_container_title_second}`}
            >
              Значение
            </th>
            <th
              className={`${Styles.typesizes__table_container_title} ${Styles.typesizes__table_container_title_third}`}
            ></th>
          </tr>
          <tr>
            <th className={Styles.item_row}>Производительность</th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>51,0</th>
            <th className={Styles.item_row}>
              kw<i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th className={Styles.item_row}>Потребляемая мощность</th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>11,7</th>
            <th className={Styles.item_row}>
              kw<i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th className={Styles.item_row}>
              Эффективность при полной нагрузке (EER)
            </th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>4,34</th>
            <th className={Styles.item_row}>
              <i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th className={Styles.item_row}>Класс энергоэффективности (EER)</th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>C</th>
            <th className={Styles.item_row}></th>
          </tr>
          <tr>
            <th className={Styles.item_row}>nsc/nsh</th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>242</th>
            <th className={Styles.item_row}></th>
          </tr>
          <tr>
            <th className={Styles.item_row}>SEER**</th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>6,13</th>
            <th className={Styles.item_row}>
              <i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th className={Styles.item_row}>ESEER</th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>5,68</th>
            <th className={Styles.item_row}>
              <i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th className={Styles.item_row}>IPLV</th>
            <th className={`${Styles.item_row} ${Styles.second_item}`}>5,74</th>
            <th className={Styles.item_row}></th>
          </tr>
          <tr>
            <th
              className={`${Styles.typesizes__table_container_title} ${Styles.typesizes__table_container_title_first}`}
            >
              Производительность
            </th>
            <th
              className={`${Styles.typesizes__table_container_title} ${Styles.typesizes__table_container_title_second}`}
            >
              Значение
            </th>
            <th
              className={`${Styles.typesizes__table_container_title} ${Styles.typesizes__table_container_title_third}`}
            ></th>
          </tr>
        </tbody>
      </table>
      <p className={Styles.typesizes__table_container_text}>
        <span>*SEER:</span> Согласно регламенту комиссии (ЕС) № 2281/2016 для
        чиллеров комфортного кондиционирования
      </p>

      <table className={Styles.type_size_middle_box}>
        <tbody>
          <tr>
            <th className={Styles.type_size_middle_box_item}>N(*)</th>
            <th className={Styles.type_size_middle_box_item}>СТ (%)</th>
            <th className={Styles.type_size_middle_box_item}>
              Т вход-Потребителя (°С)
            </th>
            <th className={Styles.type_size_middle_box_item}>
              Т выход-Потребителя (°С)
            </th>
            <th className={Styles.type_size_middle_box_item}>
              Т вход-Источник (°С)
            </th>
            <th className={Styles.type_size_middle_box_item}>
              Т выход-Источник (°С)
            </th>
            <th className={Styles.type_size_middle_box_item}>Сс (kW)</th>
            <th className={Styles.type_size_middle_box_item}>Сpi (kW)</th>
            <th className={Styles.type_size_middle_box_item}>EER</th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_box_item_first}>1</th>
            <th className={Styles.type_size_middle_box_item_first}>100</th>
            <th className={Styles.type_size_middle_box_item_first}>12,0</th>
            <th className={Styles.type_size_middle_box_item_first}>7,00</th>
            <th className={Styles.type_size_middle_box_item_first}>30,0</th>
            <th className={Styles.type_size_middle_box_item_first}>35,0</th>
            <th className={Styles.type_size_middle_box_item_first}>50,9</th>
            <th className={Styles.type_size_middle_box_item_first}>11,9</th>
            <th className={Styles.type_size_middle_box_item_first}>4,29</th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_box_item_first}>2</th>
            <th className={Styles.type_size_middle_box_item_first}>75</th>
            <th className={Styles.type_size_middle_box_item_first}>X**</th>
            <th className={Styles.type_size_middle_box_item_first}>7,00</th>
            <th className={Styles.type_size_middle_box_item_first}>26,0</th>
            <th className={Styles.type_size_middle_box_item_first}>X**</th>
            <th className={Styles.type_size_middle_box_item_first}>38,2</th>
            <th className={Styles.type_size_middle_box_item_first}>7,29</th>
            <th className={Styles.type_size_middle_box_item_first}>5,24</th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_box_item_first}>3</th>
            <th className={Styles.type_size_middle_box_item_first}>50</th>
            <th className={Styles.type_size_middle_box_item_first}>X**</th>
            <th className={Styles.type_size_middle_box_item_first}>7,00</th>
            <th className={Styles.type_size_middle_box_item_first}>22,0</th>
            <th className={Styles.type_size_middle_box_item_first}>X**</th>
            <th className={Styles.type_size_middle_box_item_first}>25,4</th>
            <th className={Styles.type_size_middle_box_item_first}>4,26</th>
            <th className={Styles.type_size_middle_box_item_first}>5,97</th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_box_item_first}>4</th>
            <th className={Styles.type_size_middle_box_item_first}>25</th>
            <th className={Styles.type_size_middle_box_item_first}>X**</th>
            <th className={Styles.type_size_middle_box_item_first}>7,00</th>
            <th className={Styles.type_size_middle_box_item_first}>18,0</th>
            <th className={Styles.type_size_middle_box_item_first}>X**</th>
            <th className={Styles.type_size_middle_box_item_first}>12,7</th>
            <th className={Styles.type_size_middle_box_item_first}>2,13</th>
            <th className={Styles.type_size_middle_box_item_first}>5,98</th>
          </tr>
        </tbody>
      </table>

      <table className={Styles.type_size_middle_container}>
        <tbody>
          <tr>
            <th className={Styles.type_size_middle_container_title}>N(*)</th>
            <th className={Styles.type_size_middle_container_item}>1</th>
            <th className={Styles.type_size_middle_container_item_second}>2</th>
            <th className={Styles.type_size_middle_container_item}>3</th>
            <th className={Styles.type_size_middle_container_item}>4</th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_container_title}>СТ (%)</th>
            <th className={Styles.type_size_middle_container_item}>100</th>
            <th className={Styles.type_size_middle_container_item_second}>
              75
            </th>
            <th className={Styles.type_size_middle_container_item}>50</th>
            <th className={Styles.type_size_middle_container_item_second}>
              25
            </th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_container_title}>
              Т вход-Потребителя (°С)
            </th>
            <th className={Styles.type_size_middle_container_item}>12,0</th>
            <th className={Styles.type_size_middle_container_item_second}>
              X**
            </th>
            <th className={Styles.type_size_middle_container_item}>X**</th>
            <th className={Styles.type_size_middle_container_item_second}>
              X**
            </th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_container_title}>
              Т выход-Потребителя (°С)
            </th>
            <th className={Styles.type_size_middle_container_item}>7,00</th>
            <th className={Styles.type_size_middle_container_item_second}>
              7,00
            </th>
            <th className={Styles.type_size_middle_container_item}>7,00</th>
            <th className={Styles.type_size_middle_container_item_second}>
              7,00
            </th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_container_title}>
              Т вход-Источник (°С)
            </th>
            <th className={Styles.type_size_middle_container_item}>30,0</th>
            <th className={Styles.type_size_middle_container_item_second}>
              26,0
            </th>
            <th className={Styles.type_size_middle_container_item}>22,0</th>
            <th className={Styles.type_size_middle_container_item_second}>
              18,0
            </th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_container_title}>
              Т выход-Источник (°С)
            </th>
            <th className={Styles.type_size_middle_container_item}>35,0</th>
            <th className={Styles.type_size_middle_container_item_second}>
              X**
            </th>
            <th className={Styles.type_size_middle_container_item}>X**</th>
            <th className={Styles.type_size_middle_container_item_second}>
              X**
            </th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_container_title}>Сс (kW)</th>
            <th className={Styles.type_size_middle_container_item}>50,9</th>
            <th className={Styles.type_size_middle_container_item_second}>
              38,2
            </th>
            <th className={Styles.type_size_middle_container_item}>25,5</th>
            <th className={Styles.type_size_middle_container_item_second}>
              12,7
            </th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_container_title}>
              Сpi (kW)
            </th>
            <th className={Styles.type_size_middle_container_item}>11,9</th>
            <th className={Styles.type_size_middle_container_item_second}>
              7,29
            </th>
            <th className={Styles.type_size_middle_container_item}>4,26</th>
            <th className={Styles.type_size_middle_container_item_second}>
              2,13
            </th>
          </tr>
          <tr>
            <th className={Styles.type_size_middle_container_title}>EER</th>
            <th className={Styles.type_size_middle_container_item}>4,24</th>
            <th className={Styles.type_size_middle_container_item_second}>
              5,24
            </th>
            <th className={Styles.type_size_middle_container_item}>5,97</th>
            <th className={Styles.type_size_middle_container_item_second}>
              5,98
            </th>
          </tr>
        </tbody>
      </table>
      <table className={Styles.type_size_last}>
        <tbody>
          <tr>
            <th
              className={`${Styles.type_size_last_title} ${Styles.type_size_last_title_first}`}
            >
              Общие сведения
            </th>
            <th
              className={`${Styles.type_size_last_title} ${Styles.type_size_last_title_second}`}
            >
              Значение
            </th>
            <th
              className={`${Styles.type_size_last_title} ${Styles.type_size_last_title_third}`}
            ></th>
          </tr>
          <tr>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_first}`}
            >
              Электропитание (V/Ph/Hz)
            </th>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_second}`}
            >
              400/3/50
            </th>
            <th></th>
          </tr>
          <tr>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_first}`}
            >
              Ступени производительности (%)
            </th>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_second}`}
            >
              0-50-100
            </th>
            <th></th>
          </tr>
          <tr>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_first}`}
            >
              Пусковой ток
            </th>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_second}`}
            >
              146
            </th>
            <th>
              A<i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_first}`}
            >
              Максимальный рабочий ток
            </th>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_second}`}
            >
              36,0
            </th>
            <th>
              A<i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_first}`}
            >
              Максимальная потребляемая мощность
            </th>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_second}`}
            >
              20.0
            </th>
            <th>
              kw<i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_first}`}
            >
              Количество холодильных контуров
            </th>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_second}`}
            >
              1
            </th>
            <th></th>
          </tr>
          <tr>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_first}`}
            >
              Хладагент
            </th>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_second}`}
            >
              R410A
            </th>
            <th>
              kw<i className="fa fa-angle-down"></i>
            </th>
          </tr>
          <tr>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_first}`}
            >
              Компрессор
            </th>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_second}`}
            >
              Значение
            </th>
            <th></th>
          </tr>
          <tr>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_first}`}
            >
              Количество компрессоров
            </th>
            <th
              className={`${Styles.type_size_last_item} ${Styles.type_size_last_item_second}`}
            >
              2
            </th>
            <th></th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export { DescriptionTable };
