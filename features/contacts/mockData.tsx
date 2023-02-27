import { ITab } from "components/tabs/Tabs";

const tabsAuthData: ITab[] = [
  { id: 1, title: "Вход" },
  { id: 2, title: "Регистрация" },
];

const tabsAboutData: ITab[] = [
  { id: 1, title: "Кто мы", url: "kto_my" },
  { id: 3, title: "Вакансии", url: "vakansii" },
];
const tabsSocialData: ITab[] = [
  { id: 1, title: "Комерческие", url: "komercheskie", tabsActive: 1 },
  { id: 2, title: "Социальные", url: "cotsialnye", tabsActive: 2 },
  { id: 3, title: "Промышленные", url: "promyshlennye", tabsActive: 3 },
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
    desc: "Руководители",
  },
  {
    id: 2,
    title: "Менеджеры",
    url: "managers",
    tabsActive: 2,
    desc: "Офис продаж",
  },
  {
    id: 3,
    title: "Техническая поддержка",
    url: "tsupport",
    tabsActive: 3,
    desc: "Техническая поддержка",
  },
];
const tabsContactsData: ITab[] = [
  { id: 1, title: "Офис Продаж", url: "ofis_prodazh" },
  { id: 2, title: "Общие контакты", url: "obshchie_kontakty" },
  { id: 3, title: "Техническая поддержка", url: "tekhnicheskaya_podderzhka" },
];

const tabsResourcesData: ITab[] = [
  { id: 1, title: "BIM", url: "bim", access: false },
  { id: 2, title: "Каталоги", url: "katalogi", access: false },
  { id: 3, title: "Вопросы", url: "voprosy", access: false },
  { id: 4, title: "Сертификаты", url: "sertifikaty", access: false },
  // { id: 5, title: "Опросные листы", url: "oprosnye_listy", access: false },
  { id: 6, title: "Документация", url: "dokumentatsiya", access: true },
  { id: 7, title: "Обучение", url: "obuchenie", access: true },
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
