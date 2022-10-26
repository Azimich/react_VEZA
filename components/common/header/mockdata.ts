import { IMenuData } from "./headerNav/Header.d";

const menuData: IMenuData[] = [
  { id: 1, title: "Решение", alias: "solution", url: "/decision" },
  { id: 2, title: "Продукция", alias: "production", url: "/equipment" },
  { id: 3, title: "Новости", alias: "news", url: "/news" },
  { id: 4, title: "О компании", alias: "about", url: "/about" },
  { id: 5, title: "Ресурсы", alias: "resources", url: "resources" },
  { id: 6, title: "Контакты", alias: "contacts", url: "/contacts" },
  { id: 7, title: "Расчёт", alias: "calculation", url: "calculation" },
];

export { menuData };
