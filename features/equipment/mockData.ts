import { ICatalogData, ICatalogEquipmentData } from "./Equipment";

const CatalogEquipmentData: ICatalogEquipmentData[] = [
  {
    title: "Кондиционеры",
    parent_id: 0,
    id: 1,
    alias: "/equipment/conditioner",
    img: "",
    level: 1,
  },
  {
    title: "Вентиляторы",
    parent_id: 0,
    id: 2,
    level: 1,
    alias: "/equipment/vent",
    childrenData: [
      {
        title: "Общепромышленные вентиляторы",
        parent_id: 2,
        alias: "/equipment/o_vent",
        id: 9,
        level: 2,
        childrenData: [
          {
            title: "Вентиляторы радиальные ВРАН",
            parent_id: 9,
            level: 3,
            id: 15,
            alias: "/equipment/vran",
            childrenData: [
              {
                title: "Вентиляторы Радиальные ВРАВ",
                parent_id: 9,
                id: 16,
                alias: "/equipment/vrav",
                level: 3,
              },
            ],
          },
          {
            title: "Вентиляторы Радиальные ВРАВ",
            parent_id: 9,
            id: 16,
            level: 3,
            alias: "/equipment/vrav_1",
          },
          {
            title: "Вентиляторы крышные КРОС",
            parent_id: 9,
            id: 17,
            level: 3,
            alias: "/equipment/kros",
          },
          {
            title: "Вентиляторы крышные УКРОС",
            parent_id: 9,
            id: 18,
            level: 3,
            alias: "/equipment/ukros",
          },
          {
            title: "Вентиляторы крышные КРОВ",
            parent_id: 9,
            id: 19,
            level: 3,
            alias: "/equipment/krov",
          },
          {
            title: "Вентиляторы крышные УКРОВ",
            parent_id: 9,
            id: 20,
            level: 3,
            alias: "/equipment/ukrov",
          },
          {
            title: "Вентиляторы осевые ОСА 300, ОСА 301",
            parent_id: 9,
            id: 21,
            level: 3,
            alias: "/equipment/osa300",
          },
        ],
      },
      {
        title: "Противодымная вентиляция",
        parent_id: 2,
        id: 10,
        level: 2,
        alias: "/equipment/provent",
      },
      {
        title: "Вентиляторы индустриальные радиальные ВИР",
        parent_id: 2,
        id: 11,
        level: 2,
        alias: "/equipment/vir",
      },
      {
        title: "Вентиляторы Морского исполнения",
        parent_id: 2,
        id: 12,
        level: 2,
        alias: "/equipment/mor_isp",
      },
      {
        title: "Вентагрегаты специального назначения",
        parent_id: 2,
        id: 13,
        level: 2,
        alias: "/equipment/spec_naz",
      },
      {
        title: "Дополнительная комплектация к вентиляторам",
        parent_id: 2,
        id: 14,
        level: 2,
        alias: "/equipment/komp_vent",
      },
    ],
  },
  {
    title: "Холодильное оборудование",
    parent_id: 0,
    id: 3,
    level: 1,
    alias: "/equipment/cold_oborud",
  },
  {
    title: "Пункты тепловые, Узлы регулирующие",
    parent_id: 0,
    id: 4,
    level: 1,
    alias: "/equipment/punct",
  },
  {
    title: "Автоматика",
    parent_id: 0,
    id: 5,
    level: 1,
    alias: "/equipment/auto",
  },
  {
    title: "Клапаны",
    parent_id: 0,
    id: 6,
    level: 1,
    alias: "/equipment/klap",
  },
  {
    title: "Люки и фонари зенитные",
    parent_id: 0,
    id: 7,
    level: 1,
    alias: "/equipment/luk",
  },
  {
    title: "Отопительное оборудование",
    parent_id: 0,
    id: 8,
    level: 1,
    alias: "/equipment/otop",
  },
];

const CatalogData: ICatalogData[] = [
  {
    title: "product_1",
    id: 1,
    img: "/images/production_1.jpg",
  },
  {
    title: "product_2",
    id: 2,
    img: "/images/production_2.jpg",
  },
  {
    title: "product_3",
    id: 3,
    img: "/images/production_3.jpg",
  },
  {
    title: "product_4",
    id: 4,
    img: "/images/production_4.jpg",
  },
  {
    title: "product_5",
    id: 5,
    img: "/images/production_5.jpg",
  },
  {
    title: "product_6",
    id: 6,
    img: "/images/production_6.jpg",
  },
];

export { CatalogEquipmentData, CatalogData };
