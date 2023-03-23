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
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";
import { Modal, useModal } from "components/modal";
import { ModalAddProduction } from "features/equipment/catalog/ModalAddProduction";

const Catalog: FC<{
  data: ICategoriesItem[];
  categories: ICategoriesItem[];
}> = ({ data, categories }) => {
  const router = useRouter();
  const [dataCategory] = useState<ICatalogEquipmentData>();
  const [free, setFree] = useState(false);
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadEquipment);
  const auth = useAppSelector(getAuth);
  const { isShow, toggle } = useModal();
  const [inputValue, setInputValue] = useState<string>("");
  const [searchValue, setSearchValue] = useState([]);

  const handleOnChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const filterProduction = searchValue.filter((product) => {
    return product.title.toLowerCase().includes(inputValue.toLowerCase());
  });

  const eachRecursive = (data: ICategoriesItem[]) => {
    for (const k in data) {
      if (data[k]?.product) {
        setSearchValue((prevState) => [...prevState, data[k]]);
      }
      if (data[k].subCategories && data[k].subCategories.length > 0) {
        eachRecursive(data[k].subCategories);
      }
    }
  };

  const dataClear = data?.filter((e) => {
    const d = e.images as IImages[];
    return d[0].pc !== "";
  });

  useEffect(() => {
    data && eachRecursive(data);
  }, [data]);

  const handleOnChange = (alias: string) => {
    console.log("alias", alias);
  };

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Каталог продукции" }]);
  }, [dataBreadEquipment]);

  useEffect(() => {
    checkEmptyObject(router.query) ? setFree(false) : setFree(true);
  }, [router.query]);

  return (
    <div className={Styles.equipment__container_catalog}>
      <div className={Styles.search__items}>
        <h1>{dataCategory ? dataCategory.title : "Каталог продукции"}</h1>
        {auth.identify && auth.data.response && (
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
                <span
                  onClick={() => setInputValue("")}
                  className={Styles.clear}
                >
                  <CloseIcon />
                </span>
              )}
            </div>
            <div className={Styles.search__items__button}>
              <Button onClick={toggle} children={"Добавить"} />
            </div>
            <Modal
              isShow={isShow}
              hide={toggle}
              headerText={"Добавить новую продукцию"}
              modalContent={<ModalAddProduction />}
              theme={"full_modal"}
              bgModal={"white"}
            />
          </div>
        )}
      </div>
      {dataClear?.length > 0 ? (
        <div
          className={`${Styles.equipment__container_catalog_product} ${
            free ? Styles.free : ""
          }`}
        >
          {filterProduction.map((e, i) => {
            console.log("eee", e);
            e.aliasPath =
              equipmentPath +
              getParents(categories, e.alias)
                .reverse()
                .map((d) => d.alias)
                .join("/");
            return (
              <CategoryItem
                key={i}
                {...e}
                onChange={(e) => handleOnChange(e)}
              />
            );
          })}
        </div>
      ) : (
        <InDevelopmentContainer />
      )}
    </div>
  );
};

export { Catalog };
