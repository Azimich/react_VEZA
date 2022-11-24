import { ITab } from "components/tabs/Tabs";

const tabsAuthData: ITab[] = [
  { id: 1, title: "Вход" },
  { id: 2, title: "Регистрация" },
];

const tabsAboutData: ITab[] = [
  { id: 1, title: "Кто мы", url: "whowe" },
  { id: 2, title: "Референсы", url: "references" },
  { id: 3, title: "Вакансии", url: "job" },
];
const tabsSocialData: ITab[] = [
  { id: 1, title: "Комерческие", url: "commercial", tabsActive: 1 },
  { id: 2, title: "Социальные", url: "social", tabsActive: 2 },
  { id: 3, title: "Промышленные", url: "industrial", tabsActive: 3 },
];
const tabsJobData: ITab[] = [
  { id: 1, title: "Предприятия", url: "factory", tabsActive: 1 },
  { id: 2, title: "Офис продаж", url: "office_sales", tabsActive: 2 },
];
const tabsSalesData: ITab[] = [
  { id: 1, title: "Руководитель", url: "director", tabsActive: 1 },
  { id: 2, title: "Логисты", url: "logistic", tabsActive: 2 },
  { id: 3, title: "Секретарь", url: "secretary", tabsActive: 3 },
];
const tabsContactsData: ITab[] = [
  { id: 1, title: "Офис Продаж", url: "sale_office" },
  { id: 2, title: "Взаимодействие", url: "interaction" },
  { id: 3, title: "Техническая поддержка", url: "support" },
];

const tabsResourcesData: ITab[] = [
  { id: 1, title: "BIM", url: "bim", access: false },
  { id: 2, title: "Каталоги", url: "catalog", access: false },
  { id: 3, title: "Вопросы", url: "questions", access: false },
  { id: 4, title: "Серетификаты", url: "certificates", access: false },
  { id: 5, title: "Документация", url: "doc", access: true },
  { id: 6, title: "Обучение", url: "training", access: true },
];

const tabsTypoSizeData: ITab[] = [
  { id: 1, title: "Описание" },
  { id: 2, title: "Технические характеристики" },
  /*
  { id: 3, title: "Сертификаты" },
*/
  { id: 4, title: "Расчёты" },
];

export {
  tabsAuthData,
  tabsTypoSizeData,
  tabsAboutData,
  tabsResourcesData,
  tabsContactsData,
  tabsSocialData,
  tabsSalesData,
  tabsJobData,
};
