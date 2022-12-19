import { IFieledsData } from "./Forms";

//для формы авторизации
const fieldsDataJob: IFieledsData[] = [
  {
    name: "firstName",
    title: "Имя *",
    filter: /g/g,
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
];

//для формы авторизации
const fieldsDataAuth: IFieledsData[] = [
  {
    name: "login",
    title: "Логин *",
    filter: /[ ]/g,
    size: 0,
  },
  {
    name: "password",
    title: "Пароль *",
    filter: /[ ]/g,
    size: 0,
    type: "password",
  },
];

//для формы регистрации
const fieldsDataRegister: IFieledsData[] = [
  {
    name: "name",
    title: "Имя *",
    filter: /[^а-яёa-z,]/iu,
    size: 0,
  },
  {
    name: "surname",
    title: "Фамилия *",
    filter: /[^а-яёa-z,]/iu,
    size: 0,
  },
  {
    name: "patronymic",
    title: "Отчество",
    filter: /[^а-яёa-z,]/iu,
    size: 0,
  },
  {
    name: "email",
    title: "Почта *",
    filter: /[ ]/g,
    size: 0,
  },
  {
    name: "phones",
    title: "Телефон *",
    filter: /[^0-9-+]/g,
    size: 20,
  },
  {
    name: "dateOfBirth",
    title: "Дата рождения",
    filter: /[ ]/g,
    size: 20,
    type: "date",
  },
  {
    name: "password",
    title: "Пароль *",
    filter: /[ ]/g,
    size: 20,
    type: "password",
  },
  {
    name: "confirmPassword",
    title: "Подтвердите пароль *",
    filter: /[ ]/g,
    size: 20,
    type: "password",
  },
];

export { fieldsDataAuth, fieldsDataRegister, fieldsDataJob };
