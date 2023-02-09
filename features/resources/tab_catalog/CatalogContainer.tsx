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
import { Link } from "components/link";
import { CatalogItem } from "features/resources/tab_catalog/CatalogItem";

const CatalogContainer = () => {
  const router = useRouter();
  const { getCatalog } = useGetCatalog();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);
  const [catalogData, setCatalogData] = useState<ICatalogResponse>(undefined);

  useEffect(() => {
    getCatalog().then((data) => {
      setCatalogData(data);
    });
  }, []);
  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Каталоги" }]);
  }, [dataBreadResources]);

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
        <Link url={catalogData && catalogData.response.url} download={"true"}>
          <Button
            type={"button"}
            children={catalogData && catalogData.response.title}
          />
        </Link>
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
