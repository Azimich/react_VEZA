import { IFieldData } from "features/contacts/tab_support/Support";

const fieldsData: IFieldData[] = [
  {
    name: "firstName",
    title: "Имя *",
    filter: /[^а-яёa-z,]/iu,
    size: 0,
    separator: true,
  },
  {
    name: "lastName",
    title: "Фамилия *",
    filter: /[^а-яёa-z,]/iu,
    size: 0,
    separator: false,
  },
];
export { fieldsData };
