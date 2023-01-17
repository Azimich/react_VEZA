import { IHeaderIconMenu } from "./HeaderIcon.d";
import { BellIcon, QuitIcon, UserIcon } from "components/icons";
import { UsersIcon } from "components/icons/includes/UsersIcon";
import { ChartIcon } from "components/icons/includes/ChartIcon";

const dataMenu: IHeaderIconMenu[] = [
  {
    url: "profile",
    name: "Профиль",
    ext: 0,
    svg: UserIcon,
  },
  {
    url: "message",
    name: "Уведомления",
    ext: 0,
    svg: BellIcon,
  },
  {
    url: "users",
    name: "Пользователи",
    ext: 0,
    svg: UsersIcon,
  },
  {
    url: "scores",
    name: "Баллы",
    ext: 500,
    svg: ChartIcon,
  },
  {
    url: "quit",
    name: "Выход",
    ext: 0,
    svg: QuitIcon,
  },
];

export { dataMenu };
