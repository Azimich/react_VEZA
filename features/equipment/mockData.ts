import { ICatalogData, ICatalogEquipmentData } from "./Equipment";

const CatalogEquipmentData: ICatalogEquipmentData[] = [
  {
    title: "Кондиционеры",
    parent_id: 0,
    id: 1,
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
    title: "Клапаны, люки и фонари зенитные",
    parent_id: 0,
    id: 6,
  },
  {
    title: "Отопительное оборудование",
    parent_id: 0,
    id: 7,
  },
];

const CatalogData: ICatalogData[] = [
  {
    title: "product_1",
    id: 1,
    img: "/images/product_1.jpg",
  },
  {
    title: "product_2",
    id: 2,
    img: "/images/product_2.jpg",
  },
  {
    title: "product_3",
    id: 3,
    img: "/images/product_3.jpg",
  },
  {
    title: "product_4",
    id: 4,
    img: "/images/product_4.jpg",
  },
  {
    title: "product_5",
    id: 5,
    img: "/images/product_5.jpg",
  },
  {
    title: "product_6",
    id: 6,
    img: "/images/product_6.jpg",
  },
];

export { CatalogEquipmentData, CatalogData };
