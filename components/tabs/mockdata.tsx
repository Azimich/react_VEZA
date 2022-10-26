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

export { tabsAuthData, tabsTypoSizeData, tabsAboutData, tabsResourcesData };
