import { ISalles } from "./SalesOffice";
import { IOptionItem } from "components/select/Select";
import { IObject } from "components/map/Map";

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
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 2,
        image: "/images/managers_2.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 3,
        image: "/images/managers_3.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 4,
        image: "/images/managers_4.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 5,
        image: "/images/managers_5.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 6,
        image: "/images/managers_1.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 7,
        image: "/images/managers_1.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 8,
        image: "/images/managers_3.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 9,
        image: "/images/managers_2.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 10,
        image: "/images/managers_4.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 11,
        image: "/images/managers_5.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 26,
        image: "/images/managers_1.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 27,
        image: "/images/managers_2.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 28,
        image: "/images/managers_3.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 29,
        image: "/images/managers_4.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 30,
        image: "/images/managers_5.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 31,
        image: "/images/managers_1.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 32,
        image: "/images/managers_1.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 33,
        image: "/images/managers_3.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 34,
        image: "/images/managers_2.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 35,
        image: "/images/managers_4.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 36,
        image: "/images/managers_5.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
    ],
  },
  {
    code: "PET",
    items: [
      {
        id: 12,
        image: "/images/managers_2.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 13,
        image: "/images/managers_2.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 14,
        image: "/images/managers_2.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 15,
        image: "/images/managers_3.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 16,
        image: "/images/managers_4.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 17,
        image: "/images/managers_5.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 18,
        image: "/images/managers_3.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 19,
        image: "/images/managers_6.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 20,
        image: "/images/managers_5.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 21,
        image: "/images/managers_1.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 22,
        image: "/images/managers_2.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 23,
        image: "/images/managers_3.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "director",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 24,
        image: "/images/managers_4.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "logistic",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
      {
        id: 25,
        image: "/images/managers_4.jpg",
        title: "Фамилия Имя Отчество",
        type_code: "secretary",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime temporibus nobis laudantium itaque at possimus autem asperiores.",
        email: "veza@mail.ru",
        phone: "+7 999 999 99 99",
      },
    ],
  },
];

const dataContactsCitySelect: IOptionItem[] = [
  { value: "MSK", label: "Москва" },
  { value: "PET", label: "Санкт-Петербург" },
];

const office_sales_data: IObject[] = [
  {
    id: 1,
    connection: "belarus",
    alias: "minsk",
    object: {
      xpx: 22,
      ypx: 8,
      name: "Веза-Миасс",
      fio: "Сергиенко Алексей Сергеевич",
      service_phone: "Тел: +7 999 999 00 99",
      address: "Зелёный проспект 20",
      email: "veza@veza.ru",
    },
  },
  {
    id: 2,
    connection: "moskovskaya_obl",
    alias: "msk",

    object: {
      xpx: 22,
      ypx: 8,
      name: "Веза-Миасс",
      fio: "Сергиенко Алексей Сергеевич",
      service_phone: "Тел: +7 999 999 00 99",
      address: "Зелёный проспект 20",
      email: "veza@veza.ru",
    },
  },
  {
    id: 3,
    connection: "hanty_mansiyskiy",
    alias: "hant",

    object: {
      xpx: 22,
      ypx: 8,
      name: "Веза-Миасс",
      fio: "Сергиенко Алексей Сергеевич",
      service_phone: "Тел: +7 999 999 00 99",
      address: "Зелёный проспект 20",
      email: "veza@veza.ru",
    },
  },
  {
    id: 4,
    connection: "amurskaya_obl",
    alias: "saha_yakutia_office",

    object: {
      xpx: 22,
      ypx: 8,
      name: "Веза-Миасс",
      fio: "Сергиенко Алексей Сергеевич",
      service_phone: "Тел: +7 999 999 00 99",
      address: "Зелёный проспект 20",
      email: "veza@veza.ru",
    },
  },
];

export { salesOfficeData, dataContactsCitySelect, office_sales_data };
