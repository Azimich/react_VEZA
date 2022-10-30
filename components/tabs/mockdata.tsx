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
const tabsSocialData: ITab[] = [
  { id: 1, title: "Комерческие", url: "commercial", tabsActive: 1 },
  { id: 2, title: "Социальные", url: "social", tabsActive: 2 },
  { id: 3, title: "Промышленные", url: "industrial", tabsActive: 3 },
];
const tabsContactsData: ITab[] = [
  { id: 1, title: "Офис Продаж", url: "sale_office" },
  { id: 2, title: "Взаимодействие", url: "interaction" },
  { id: 3, title: "Техническая поддержка", url: "support" },
];

const tabsResourcesData: ITab[] = [
  { id: 1, title: "BIM", url: "bim" },
  { id: 2, title: "Каталоги", url: "catalog" },
  { id: 3, title: "Вопросы", url: "questions" },
  { id: 4, title: "Серетификаты", url: "certificates" },
  { id: 5, title: "Документация", url: "doc" },
  { id: 6, title: "Обучение", url: "training" },
];

const tabsTypoSizeData: ITab[] = [
  { id: 1, title: "Описание" },
  { id: 2, title: "Технические характеристики" },
  { id: 3, title: "Сертификаты" },
  { id: 4, title: "Расчёты" },
];

export {
  tabsAuthData,
  tabsTypoSizeData,
  tabsAboutData,
  tabsResourcesData,
  tabsContactsData,
  tabsSocialData,
};
