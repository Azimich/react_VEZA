import { ITab } from "components/tabs/Tabs";

const tabsAuthData: ITab[] = [
  { id: 1, title: "Вход" },
  { id: 2, title: "Регистрация" },
];

const tabsAboutData: ITab[] = [
  { id: 1, title: "Кто мы", url: "whowe" },
  { id: 3, title: "Вакансии", url: "job" },
];
const tabsSocialData: ITab[] = [
  { id: 1, title: "Комерческие", url: "commercial", tabsActive: 1 },
  { id: 2, title: "Социальные", url: "social", tabsActive: 2 },
  { id: 3, title: "Промышленные", url: "industrial", tabsActive: 3 },
];
const tabsJobData: ITab[] = [
  { id: 1, title: "Предприятия", url: "plant", tabsActive: 1, default: false },
  { id: 2, title: "Офис продаж", url: "office", tabsActive: 2, default: true },
];
const tabsSalesData: ITab[] = [
  {
    id: 1,
    title: "Руководители",
    url: "director",
    tabsActive: 1,
    desc: "Наши руководители",
  },
  {
    id: 2,
    title: "Менеджеры",
    url: "managers",
    tabsActive: 2,
    desc: "Наши менеджеры",
  },
  {
    id: 3,
    title: "Техническая поддержка",
    url: "tsupport",
    tabsActive: 3,
    desc: "Наша техническая поддержка",
  },
];
const tabsContactsData: ITab[] = [
  { id: 1, title: "Офис Продаж", url: "sale_office" },
  { id: 2, title: "Общие контакты", url: "interaction" },
  { id: 3, title: "Техническая поддержка", url: "support" },
];

const tabsResourcesData: ITab[] = [
  { id: 1, title: "BIM", url: "bim", access: false },
  { id: 2, title: "Каталоги", url: "catalog", access: false },
  { id: 3, title: "Вопросы", url: "questions", access: false },
  { id: 4, title: "Серетификаты", url: "certificates", access: false },
  { id: 5, title: "Опросные листы", url: "questionnaires", access: false },
  { id: 6, title: "Документация", url: "doc", access: true },
  { id: 7, title: "Обучение", url: "training", access: true },
];

const tabsTypoSizeData: ITab[] = [
  { id: 1, title: "Описание" },
  { id: 2, title: "Технические характеристики" },
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
