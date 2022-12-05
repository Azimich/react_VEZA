import { Container } from "components/common/container";
import Styles from "./Catalog.module.scss";
import { Tabs } from "components/tabs";
import { tabsResourcesData } from "../../contacts/mockData";
import { catalogData } from "../mockData";
import { CatalogItem } from "./CatalogItem";
import { Input } from "components/input/Index";
import { SearchInputIcon } from "components/icons/includes/SearchInputIcon";
import React, { ChangeEvent, useEffect, useState } from "react";
import { ICatalog } from "../tab_bim/Bim";
import { dataBreadResources } from "components/breadcrumbs/mockData";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { handleOnClickTabs } from "../helper";
import { useRouter } from "next/router";

const CatalogContainer = () => {
  const router = useRouter();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadResources);
  const [inputValue, setInputValue] = useState<string>();
  const [filteredData, setFilteredData] = useState<ICatalog[]>(catalogData);
  const handleOnChangeSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Каталоги" }]);
  }, [dataBreadResources]);

  useEffect(() => {
    setFilteredData(
      inputValue?.length > 0
        ? catalogData.filter((e) => {
            return e.title.toLowerCase().includes(inputValue.toLowerCase());
          })
        : catalogData,
    );
  }, [inputValue]);

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
        <div className={Styles.input_box}>
          <Input
            value={inputValue}
            id={"search_catalog_id"}
            onChange={(event) => handleOnChangeSearch(event)}
            type={"text"}
            name={"search_catalog"}
            placeholder={"Поиск"}
            className={Styles.input_field}
          />
          <SearchInputIcon />
        </div>
      </div>
      <div className={Styles.catalog_box}>
        {filteredData &&
          filteredData.map((e) => {
            return <CatalogItem {...e} key={e.id} />;
          })}
      </div>
    </Container>
  );
};
export { CatalogContainer };
