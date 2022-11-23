import { IFieldData } from "features/contacts/tab_support/Support";

const fieldsData: IFieldData[] = [
  {
    name: "firstName",
    title: "Имя *",
    filter: /[^а-яёa-z,]/iu,
    size: 0,
  },
  {
    name: "lastName",
    title: "Фамилия *",
    filter: /[^а-яёa-z,]/iu,
    size: 0,
  },
  {
    name: "email",
    title: "Почта *",
    filter: /g/g,
    size: 0,
  },
  {
    name: "phone",
    title: "Телефон *",
    filter: /[^0-9-+]/g,
    size: 20,
  },
  {
    name: "post",
    title: "Укажите должность *",
    filter: /g/g,
    size: 20,
  },
  {
    name: "order",
    title: "Номер заказа",
    filter: /g/g,
    size: 20,
  },
];
export { fieldsData };
