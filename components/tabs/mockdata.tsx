import { SingInForm } from "features/auth/SingInForm";
import { ITab } from "./Tabs.d";
import { SingUpForm } from "../../features/auth/SingUpForm";

const tabsAuthData: ITab[] = [
  { id: 1, title: "Вход", content: <SingInForm /> },
  { id: 2, title: "Регистрация", content: <SingUpForm /> },
];

export { tabsAuthData };
