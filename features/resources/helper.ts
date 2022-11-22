import { ITab } from "components/tabs/Tabs";
import { resourcesPath, SingInPath } from "utils/bootstrap";

export const handleOnClickTabs = (e: ITab, router: any) => {
  e.access ? router.push(SingInPath) : router.push(resourcesPath + e.url);
};
