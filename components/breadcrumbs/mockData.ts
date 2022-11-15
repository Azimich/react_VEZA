import { IBreadCrumbs } from "components/breadcrumbs/BreadCrumbs.d";
import { aboutPath, newsPath } from "utils/bootstrap";

const dataBreadNews: IBreadCrumbs[] = [
  {
    title: "Новости",
    url: process.env.NEXT_PUBLIC_APP_URL + newsPath,
  },
];

const dataDecisionNews: IBreadCrumbs[] = [
  {
    title: "Решения",
    url: process.env.NEXT_PUBLIC_APP_URL + newsPath,
  },
];
const dataAboutNews: IBreadCrumbs[] = [
  {
    title: "О компании",
    url: process.env.NEXT_PUBLIC_APP_URL + aboutPath,
  },
];
export { dataBreadNews, dataDecisionNews, dataAboutNews };
