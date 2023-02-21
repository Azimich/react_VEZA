import { Container } from "components/common/container";
import Styles from "./Catalog.module.scss";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import React, { useEffect, useState } from "react";
import { ICatalogResponse } from "../tab_bim/Bim";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { handleOnClickTabs } from "../helper";
import { useRouter } from "next/router";
import { Button } from "components/button";
import { useGetCatalog } from "service/list/getCatalog";
import { CatalogItem } from "features/resources/tab_catalog/CatalogItem";
import { onButtonClick } from "utils/helpers";
import { SpinnerButton } from "components/spinners";
import { DownloadIcon } from "components/icons";

const CatalogContainer = () => {
  const router = useRouter();
  const { getCatalog } = useGetCatalog();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);
  const [catalogData, setCatalogData] = useState<ICatalogResponse>(undefined);
  const [download, setDownload] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleDisabled = (url: string, title: string) => {
    setDownload(false);
    setIsLoading(true);
    console.log("ДО СКАЧИВАНИЯ", url, title);
    onButtonClick(url, title).then(() => {
      setDownload(true);
      setIsLoading(false);
      console.log("ПОСЛЕ СКАЧИВАНИЯ", catalogData.response.url, title);
    });
  };

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Каталоги" }]);
  }, [dataBreadResources]);

  useEffect(() => {
    getCatalog().then((data) => {
      setCatalogData(data);
    });
  }, []);

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <div className={Styles.catalog_container}>
        <Tabs
          props={tabsResourcesData}
          onClick={(e) => {
            handleOnClickTabs(e, router);
          }}
          activeTab={2}
          size={"max"}
        />
      </div>
      <div className={Styles.catalog_title}>
        <h1 className={Styles.h1}>Каталоги оборудования ВЕЗА</h1>
        <div
          onClick={() =>
            handleDisabled(
              catalogData && catalogData.response.url,
              "Каталоги_все",
            )
          }
          className={
            download ? `${Styles.disabled_active}` : `${Styles.disabled}`
          }
        >
          <Button type={"button"}>
            {catalogData && catalogData.response.title}
            <span>{isLoading ? <SpinnerButton /> : <DownloadIcon />}</span>
          </Button>
        </div>
      </div>
      <div className={Styles.catalog_box}>
        {catalogData &&
          catalogData.response.catalogues.map((e, i) => {
            return <CatalogItem {...e} key={i} />;
          })}
      </div>
    </Container>
  );
};
export { CatalogContainer };
