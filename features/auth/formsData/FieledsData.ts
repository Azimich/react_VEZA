import { IFieledsData } from "./Forms";

//для формы авторизации
const fieldsDataAuth: IFieledsData[] = [
  {
    name: "login",
    title: "Логин *",
    filter: /g/g,
    size: 0,
  },
  {
    name: "password",
    title: "Пароль *",
    filter: /g/g,
    size: 0,
  },
];

//для формы регистрации
const fieldsDataRegistr: IFieledsData[] = [
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
    name: "birthdate",
    title: "Дата рождения",
    filter: /g/g,
    size: 20,
    type: "date",
  },
  {
    name: "password",
    title: "Пароль *",
    filter: /g/g,
    size: 20,
    type: "password",
  },
  {
    name: "confirmPassword",
    title: "Подтвердите пароль *",
    filter: /g/g,
    size: 20,
    type: "password",
  },
];

export { fieldsDataAuth, fieldsDataRegistr };
