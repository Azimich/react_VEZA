import { ISalles } from "./SalesOffice";
import { IOptionItem } from "../../../components/select/Select";

const salesOfficeData: ISalles[] = [
  {
    code: "MSK",
    items: [
      {
        id: 1,
        image: "/images/managers_1.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
      },
      {
        id: 2,
        image: "/images/managers_2.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
      },
      {
        id: 3,
        image: "/images/managers_3.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
      },
      {
        id: 4,
        image: "/images/managers_4.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
      },
      {
        id: 5,
        image: "/images/managers_5.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
      },
      {
        id: 6,
        image: "/images/managers_1.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
      },
      {
        id: 7,
        image: "/images/managers_1.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
      },
      {
        id: 8,
        image: "/images/managers_3.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
      },
      {
        id: 9,
        image: "/images/managers_2.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
      },
      {
        id: 10,
        image: "/images/managers_4.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
      },
      {
        id: 11,
        image: "/images/managers_5.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
      },
    ],
  },
  {
    code: "PET",
    items: [
      {
        id: 12,
        image: "/images/managers_3.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
      },
      {
        id: 13,
        image: "/images/managers_3",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
      },
      {
        id: 14,
        image: "/images/managers_3",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
      },
      {
        id: 15,
        image: "/images/managers_3",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
      },
      {
        id: 16,
        image: "/images/managers_3",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
      },
      {
        id: 17,
        image: "/images/managers_3",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
      },
      {
        id: 18,
        image: "/images/managers_3",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
      },
    ],
  },
];

const dataContactsCitySelect: IOptionItem[] = [
  { value: "MSK", label: "Моска" },
  { value: "PET", label: "Санкт-Петербург" },
];
export { salesOfficeData, dataContactsCitySelect };
