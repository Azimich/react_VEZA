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
import { EditSeoModal } from "features/resources/tab_catalog/EditSeoModal";
import { Helmet } from "react-helmet";

const CatalogContainer = () => {
  const router = useRouter();
  const auth = useAppSelector(getAuth);
  const { getCatalog } = useGetCatalog();
  const { isShow, toggle } = useModal();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);
  const [catalogData, setCatalogData] = useState<ICatalogResponse>(undefined);
  /*    const [download, setDownload] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const handleDisabled = (url: string, title: string) => {
        setDownload(false);
        setIsLoading(true);
        onButtonClick(url, title).then(() => {
            setDownload(true);
            setIsLoading(false);
            console.log("ПОСЛЕ СКАЧИВАНИЯ", catalogData.response.url, title);
        });
    };*/

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Каталоги" }]);
  }, [dataBreadResources]);

  useEffect(() => {
    getCatalog().then((data) => {
      setCatalogData(data);
    });
  }, []);

  const contentModal = (
    <EditSeoModal catalogData={catalogData} toggle={toggle} />
  );

  return (
    <Container className={"wrapper_clear"}>
      <Helmet>
        <meta
          name="description"
          content={catalogData?.response?.seoDescription}
        />
        <meta name="keywords" content={catalogData?.response?.seoKeyword} />
        <title>{catalogData?.response?.seoTitle}</title>
      </Helmet>
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
        <div className={Styles.buttons}>
          {auth.identify && auth.data.response && (
            <Button onClick={toggle} children={"Редактирование"} />
          )}
          <Link url={catalogData && catalogData.response.url} download={"true"}>
            <Button
              type={"button"}
              children={catalogData && catalogData.response.title}
            />
          </Link>
        </div>
      </div>
      <div className={Styles.catalog_box}>
        {catalogData &&
          catalogData.response.catalogues.map((e, i) => {
            return <CatalogItem {...e} key={i} />;
          })}
        <Modal
          isShow={isShow}
          hide={toggle}
          modalContent={contentModal}
          headerText={"Редактирование"}
          bgModal={"black"}
          theme={"modal_edit_text_1200"}
        />
      </div>
    </Container>
  );
};
export { CatalogContainer };
