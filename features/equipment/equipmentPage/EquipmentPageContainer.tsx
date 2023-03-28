import { Container } from "components/common/container";
import React, { FC, useEffect, useState } from "react";
import { ICategoriesItem, ICategoriesResponseArray } from "../Equipment";
import { Menu } from "../menu/Menu";
import Styles from "../Equipment.module.scss";
import { SliderContainer } from "components/slider";
import { UtpContainer } from "./utp/UtpContainer";
import { Separator } from "components/separator";
import { IEquipmentResponse } from "features/equipment/equipmentPage/Equipment";
import { ISlideItem } from "components/slider/Slider.d";
import { useGetAddEquip } from "service/list/getAddEquip";
import { Editor } from "components/editor_pen";
import { Modal, useModal } from "components/modal";
import { ModalFormAdditionQ } from "features/equipment/equipmentPage/utp/ModalFormAdditionQ";
import { ModalFormGallery } from "features/equipment/equipmentPage/utp/ModalFormGallery";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadEquipment } from "components/breadcrumbs/mockData";
import { getData, getParents } from "utils/helpers";
import { equipmentPath } from "utils/bootstrap";
import { ICategory } from "features/equipment/equipmentPage/utp/ModalFormCategory";
import { useGetCategories } from "service/admin/list/getCategories";

const EquipmentPageContainer: FC<{
  data: ICategoriesItem[];
  categories: ICategoriesResponseArray;
  alias: string;
  alias_active?: string;
  product: IEquipmentResponse;
}> = ({ data, categories, alias, alias_active, product }) => {
  const { getAddEquip } = useGetAddEquip();
  const [additionQ, setAdditionQ] = useState([]);
  const [categoriesData, setCategoriesData] = useState<ICategory[]>([]);
  const { getCategories } = useGetCategories();
  const convert = (data: IEquipmentResponse) => {
    return data?.response.images.map((e): ISlideItem => {
      return {
        alt: product.response.title,
        images: {
          pc: e?.pc,
          ipad: e?.ipad,
          mobile: e?.mobile,
        },
        link_slider: false,
        title: product.response.title,
        typeSlider: "img",
        url: product.response.alias,
      };
    });
  };
  const { isShow: isShowAdditionQ, toggle: toggleEditAdditionQ } = useModal();
  const { isShow: isShowGallery, toggle: toggleEditGallery } = useModal();
  const { isShow: isShowEditCategory, toggle: toggleEditCategory } = useModal();
  const [breadCrumbs, setBreadCrumbs] =
    useState<IBreadCrumbs[]>(dataBreadEquipment);

  useEffect(() => {
    getCategories(alias_active).then((data) => {
      setCategoriesData(data.response);
    });
  }, []);

  useEffect(() => {
    //   setBreadCrumbs([...breadCrumbs, {title: "Каталог продукции"}]);
    if (!isShowEditCategory && categoriesData.length > 0) {
      setBreadCrumbs(dataBreadEquipment);
      const parentsData = getParents(
        categories.response,
        getData(categories.response, alias_active)[0]?.parentAlias,
        getData(categories.response, alias_active)[0]?.level,
      )
        .reverse()
        .map((e, index, array) => {
          let curAlias = "";
          if (index > 0) {
            for (let i = 0; i <= index; i++) {
              curAlias += array[i].alias + (i != index ? "/" : "");
            }
          } else {
            curAlias = e.alias;
          }
          return {
            title: e.title,
            alias: process.env.NEXT_PUBLIC_APP_URL + equipmentPath + curAlias,
          };
        });
      parentsData.map((e) => {
        setBreadCrumbs((prevData) => [...prevData, e]);
      });
    }
  }, [isShowEditCategory, categoriesData]);

  useEffect(() => {
    !isShowAdditionQ &&
      getAddEquip(product?.response?.alias).then((res) => {
        setAdditionQ(res.response);
      });
  }, [isShowAdditionQ]);

  const contentEditAdditionQ = (
    <ModalFormAdditionQ toggle={toggleEditAdditionQ} alias={alias_active} />
  );
  const contentEditCategory = (
    <ModalFormCategory toggle={toggleEditCategory} alias={alias_active} />
  );

  const contentEditGallery = (
    <ModalFormGallery toggle={toggleEditGallery} product={product} />
  );
  return (
    <Container className={"wrapper"}>
      <div className={Styles.breadCrumbs_container}>
        <BreadCrumbs data={breadCrumbs} />
        <div className={Styles.editor} onClick={toggleEditCategory}>
          <Editor />
        </div>
      </div>
      <div className={Styles.equipment__container}>
        <Menu categories={categories?.response} data={data} alias={alias} />
        <div className={Styles.content_box}>
          <h1 className={Styles.product__title}>{product.response.title}</h1>
          {product && (
            <>
              <SliderContainer
                items={convert(product)}
                theme={"pageProduct"}
                dots={true}
                autoplay={false}
                isLink={false}
              />
              <div className={Styles.div_box_edit_gallery}>
                <div className={Styles.editor} onClick={toggleEditGallery}>
                  <Editor />
                </div>
              </div>
            </>
          )}
          <UtpContainer {...product.response} />
        </div>
      </div>
      <Separator title={"Дополнительное оборудование"} />
      <div className={Styles.div_box_edit}>
        <div className={Styles.editor} onClick={toggleEditAdditionQ}>
          <Editor />
        </div>
      </div>
      <ul className={Styles.add_obr}>
        {additionQ.map((e, i) => {
          return (
            <li key={i}>
              <img src={e.images[0].pc} alt={e.alias} />
            </li>
          );
        })}
      </ul>
      <Modal
        isShow={isShowGallery}
        hide={toggleEditGallery}
        modalContent={contentEditGallery}
        headerText={"Редактирование галлереи"}
        theme={"modal_edit_text"}
        bgModal={"white"}
      />
      <Modal
        isShow={isShowAdditionQ}
        hide={toggleEditAdditionQ}
        modalContent={contentEditAdditionQ}
        headerText={"Редактирование дополнительного оборудования"}
        theme={"modal_edit_text_1200"}
        bgModal={"white"}
      />
      <Modal
        isShow={isShowEditCategory}
        hide={toggleEditCategory}
        modalContent={contentEditCategory}
        headerText={"Редактирование категории"}
        theme={"modal_edit_text"}
        bgModal={"white"}
      />
    </Container>
  );
};

export { EquipmentPageContainer };
