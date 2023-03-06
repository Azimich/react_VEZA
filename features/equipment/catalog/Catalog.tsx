import { CategoryItem } from "./CategoryItem";
import Styles from "../Equipment.module.scss";
import React, { FC, useEffect, useState } from "react";
import { ICatalogEquipmentData, ICategoriesItem } from "../Equipment";
import { IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadEquipment } from "components/breadcrumbs/mockData";
import { equipmentPath } from "utils/bootstrap";
import { checkEmptyObject, getParents } from "utils/helpers";
import { useRouter } from "next/router";
import { IImages } from "../../../types/response";
import { InDevelopmentContainer } from "components/inDevelopment/InDevelopmentContainer";
import { Input } from "components/input";
import { SearchInputIcon } from "components/icons/includes/SearchInputIcon";
import { CloseIcon } from "components/icons";
import { Button } from "components/button";

const Catalog: FC<{
  data: ICategoriesItem[];
  categories: ICategoriesItem[];
}> = ({ data, categories }) => {
  const router = useRouter();
  const [dataCategory] = useState<ICatalogEquipmentData>();
  const [free, setFree] = useState(false);
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadEquipment);
  const [inputValue, setInputValue] = React.useState<string>("");

  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Каталог продукции" }]);
  }, [dataBreadEquipment]);

  useEffect(() => {
    checkEmptyObject(router.query) ? setFree(false) : setFree(true);
  }, [router.query]);

  const dataClear = data?.filter((e) => {
    const d = e.images as IImages[];
    return d[0].pc !== "";
  });
  console.log("dataClear", dataClear);

  return (
    <div className={Styles.equipment__container_catalog}>
      <div className={Styles.search__items}>
        <h1>{dataCategory ? dataCategory.title : "Каталог продукции"}</h1>
        <div className={Styles.search__items__right}>
          <div className={Styles.search__items__input}>
            <Input
              value={inputValue}
              type={"text"}
              onChange={(event) => handleOnChangeSearch(event)}
              name={"search_catalog"}
              id={"search_catalog_id"}
              placeholder={"Поиск"}
              className={Styles.input_field}
            />
            <SearchInputIcon />
            {inputValue && (
              <span onClick={() => setInputValue("")} className={Styles.clear}>
                <CloseIcon />
              </span>
            )}
          </div>
          <div className={Styles.search__items__button}>
            <Button children={"Добавить"} />
          </div>
        </div>
      </div>
      {dataClear?.length > 0 ? (
        <div
          className={`${Styles.equipment__container_catalog_product} ${
            free ? Styles.free : ""
          }`}
        >
          {dataClear?.map((e) => {
            e.aliasPath =
              equipmentPath +
              getParents(categories, e.alias)
                .reverse()
                .map((d) => d.alias)
                .join("/");
            return <CategoryItem key={e.alias} {...e} />;
          })}
        </div>
      ) : (
        <InDevelopmentContainer />
      )}
    </div>
  );
};

export { Catalog };
