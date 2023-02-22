import { IBreadCrumbs } from "components/breadcrumbs/BreadCrumbs.d";
import {
  aboutPath,
  decisionPath,
  newsPath,
  resourcesPath,
  equipmentPath,
} from "utils/bootstrap";

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

const dataBreadEquipment: IBreadCrumbs[] = [
  {
    title: "Главная",
    alias: "/",
  },
  {
    title: "Продукция",
    alias: process.env.NEXT_PUBLIC_APP_URL + equipmentPath,
  },
];

const dataBreadDecision: IBreadCrumbs[] = [
  {
    title: "Главная",
    alias: "/",
  },
  {
    title: "Решения",
    alias: process.env.NEXT_PUBLIC_APP_URL + decisionPath,
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
const dataBreadProfile: IBreadCrumbs[] = [
  {
    title: "Главная",
    alias: "/",
  },
  {
    title: "Профиль",
    alias: process.env.NEXT_PUBLIC_APP_URL + resourcesPath,
  },
];

export {
  dataBreadEquipment,
  dataBreadNews,
  dataBreadDecision,
  dataBreadAbout,
  dataBreadResources,
  dataBreadContacts,
  dataBreadProfile,
};

export class factoryPath {}
