import { ITab } from "components/tabs/Tabs";
import { resourcesPath } from "utils/bootstrap";

export const handleOnClickTabs = (e: ITab, router: any) => {
  return router.push(resourcesPath + e.url);
};
