import { IBreadCrumbs } from "components/breadcrumbs/BreadCrumbs.d";
import { aboutPath, newsPath, resourcesPath } from "utils/bootstrap";

const dataBreadNews: IBreadCrumbs[] = [
  {
    title: "Главная",
    alias: "/",
  },
  {
    title: "Новости",
    alias: process.env.NEXT_PUBLIC_APP_URL + newsPath,
  },
];

const dataBreadDecision: IBreadCrumbs[] = [
  {
    title: "Главная",
    alias: "/",
  },
  {
    title: "Решения",
    alias: process.env.NEXT_PUBLIC_APP_URL + newsPath,
  },
];
const dataBreadAbout: IBreadCrumbs[] = [
  {
    title: "Главная",
    alias: "/",
  },
  {
    title: "О компании",
    alias: process.env.NEXT_PUBLIC_APP_URL + aboutPath,
  },
];
const dataBreadContacts: IBreadCrumbs[] = [
  {
    title: "Главная",
    alias: "/",
  },
  {
    title: "Контакты",
    alias: process.env.NEXT_PUBLIC_APP_URL + aboutPath,
  },
];
const dataBreadResources: IBreadCrumbs[] = [
  {
    title: "Главная",
    alias: "/",
  },
  {
    title: "Ресурсы",
    alias: process.env.NEXT_PUBLIC_APP_URL + resourcesPath,
  },
];
export {
  dataBreadNews,
  dataBreadDecision,
  dataBreadAbout,
  dataBreadResources,
  dataBreadContacts,
};
