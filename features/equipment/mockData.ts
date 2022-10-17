import { ICatalogData, ICatalogEquipmentData } from "./Equipment";

const CatalogEquipmentData: ICatalogEquipmentData[] = [
  {
    title: "Кондиционеры",
    parent_id: 0,
    id: 1,
    alias: "/equipment/conditioner",
    img: "",
  },
  {
    title: "Вентиляторы",
    parent_id: 0,
    id: 2,
  },
  {
    title: "Холодильное оборудование",
    parent_id: 0,
    id: 3,
  },
  {
    title: "Пункты тепловые, Узлы регулирующие",
    parent_id: 0,
    id: 4,
  },
  {
    title: "Автоматика",
    parent_id: 0,
    id: 5,
  },
  {
    title: "Клапаны",
    parent_id: 0,
    id: 6,
  },
  {
    title: "Люки и фонари зенитные",
    parent_id: 0,
    id: 7,
  },
  {
    title: "Отопительное оборудование",
    parent_id: 0,
    id: 8,
  },
  {
    title: "Общепромышленные вентиляторы",
    parent_id: 2,
    id: 9,
  },
  {
    title: "Противодымная вентиляция",
    parent_id: 2,
    id: 10,
  },
  {
    title: "Вентиляторы индустриальные радиальные ВИР",
    parent_id: 2,
    id: 11,
  },
  {
    title: "Вентиляторы Морского исполнения",
    parent_id: 2,
    id: 12,
  },
  {
    title: "Вентагрегаты специального назначения",
    parent_id: 2,
    id: 13,
  },
  {
    title: "Дополнительная комплектация к вентиляторам",
    parent_id: 2,
    id: 14,
  },
  {
    title: "Вентиляторы радиальные ВРАН",
    parent_id: 9,
    id: 15,
  },
  {
    title: "Вентиляторы Радиальные ВРАВ",
    parent_id: 9,
    id: 16,
  },
  {
    title: "Вентиляторы крышные КРОС",
    parent_id: 9,
    id: 17,
  },
  {
    title: "Вентиляторы крышные УКРОС",
    parent_id: 9,
    id: 18,
  },
  {
    title: "Вентиляторы крышные КРОВ",
    parent_id: 9,
    id: 19,
  },
  {
    title: "Вентиляторы крышные УКРОВ",
    parent_id: 9,
    id: 20,
  },
  {
    title: "Вентиляторы осевые ОСА 300, ОСА 301",
    parent_id: 9,
    id: 21,
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
