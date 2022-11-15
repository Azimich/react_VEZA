import { IBreadCrumbs } from "components/breadcrumbs/BreadCrumbs.d";
import { newsPath } from "utils/bootstrap";

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

export { dataBreadNews, dataDecisionNews };
