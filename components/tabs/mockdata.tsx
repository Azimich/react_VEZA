import { ITab } from "./Tabs";

const tabsAuthData: ITab[] = [
  { id: 1, title: "Вход" },
  { id: 2, title: "Регистрация" },
];

const tabsAboutData: ITab[] = [
  { id: 1, title: "Кто мы", url: "whowe" },
  { id: 2, title: "Референсы", url: "references" },
  { id: 3, title: "Вакансии", url: "job" },
];

const tabsTypoSizeData: ITab[] = [
  { id: 1, title: "Описание" },
  { id: 2, title: "Технические характеристики" },
  { id: 3, title: "Сертификаты" },
  { id: 4, title: "Расчёты" },
];

export { tabsAuthData, tabsTypoSizeData, tabsAboutData };
