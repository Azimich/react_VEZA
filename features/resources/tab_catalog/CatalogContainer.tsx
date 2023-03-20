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
import { Link } from "components/link";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";
import { Modal, useModal } from "components/modal";
import { ModalForm } from "features/resources/tab_catalog/ModalForm";

const CatalogContainer = () => {
  const router = useRouter();
  const { getCatalog } = useGetCatalog();
  const auth = useAppSelector(getAuth);
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);
  const [catalogData, setCatalogData] = useState<ICatalogResponse>(undefined);
  const { isShow, toggle } = useModal();

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Каталоги" }]);
  }, [dataBreadResources]);

  const contentAdd = <ModalForm toggle={toggle} />;

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
        <Link url={catalogData && catalogData.response.url} download={"true"}>
          <Button
            type={"button"}
            children={catalogData && catalogData.response.title}
          />
        </Link>
      </div>
      {auth.identify && (
        <Button
          type={"button"}
          children={"добавить каталог"}
          onClick={() => toggle()}
        />
      )}
      <div className={Styles.catalog_box}>
        {catalogData &&
          catalogData.response.catalogues.map((e, i) => {
            return <CatalogItem {...e} key={i} />;
          })}
      </div>
      <Modal
        isShow={isShow}
        hide={toggle}
        modalContent={contentAdd}
        headerText={"Добавление каталога"}
        theme={"modal_edit_text"}
        bgModal={"white"}
      />
    </Container>
  );
};
export { CatalogContainer };
