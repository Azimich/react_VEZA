import React, { FC, useEffect, useState } from "react";
import * as Yup from "yup";

import Styles from "./Catalog.module.scss";
import { Button } from "components/button";
import { useFormik } from "formik";
import { Input } from "components/input";
import { CloseIcon } from "components/icons";
import TextareaContainer from "components/textarea/TextareaContainer";
import { usePutCatalog } from "service/admin/item/putCatalog";
import { ISEOModal } from "../tab_bim/Bim";

const EditSeoModal: FC<ISEOModal> = ({ catalogData, toggle }) => {
  const [seoH1, setSeoH1] = useState(catalogData.response.seoMetaH1);
  const [seoTitlePost, setSeoTitle] = useState(catalogData.response.seoTitle);
  const [seoDesc, setSeoDesc] = useState(catalogData.response.seoDescription);
  const [seoKeywords, setSeoKeywords] = useState(
    catalogData.response.seoKeyword,
  );
  const { putCatalog } = usePutCatalog();
  const formik = useFormik({
    initialValues: {
      alias: "",
      seoTitle: "",
      seoMetaH1: "",
      seoDescription: "",
      seoKeyword: "",
    },
    validationSchema: Yup.object({
      seoMetaH1: Yup.string().required("Обязательно для заполнения!"),
      seoTitle: Yup.string().required("Обязательно для заполнения!"),
      seoDescription: Yup.string().required("Обязательно для заполнения!"),
      seoKeyword: Yup.string().required("Обязательно для заполнения!"),
    }),
    onSubmit: (values) => {
      const _alias = catalogData.response.alias;
      putCatalog(
        _alias,
        toggle,
        values.seoTitle,
        values.seoMetaH1,
        values.seoDescription,
        values.seoKeyword,
      ).then((data: any) => {
        toggle();
        console.log("items", data);
      });
      console.log("values", values);
    },
  });

  useEffect(() => {
    formik.setFieldValue("seoMetaH1", seoH1);
    formik.setFieldValue("seoTitle", seoTitlePost);
    formik.setFieldValue("seoDescription", seoDesc);
    formik.setFieldValue("seoKeyword", seoKeywords);
  }, [seoH1, seoTitlePost, seoDesc, seoKeywords]);

  const handlePostSeoH1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeoH1(e.target.value);
    formik.setFieldValue("seoMetaH1", seoH1);
  };
  const handlePostSeoTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeoTitle(e.target.value);
    formik.setFieldValue("seoTitle", seoTitlePost);
  };
  const handlePostSeoDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeoDesc(e.target.value);
    formik.setFieldValue("seoDescription", seoDesc);
  };
  const handlePostSeoKeywordsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSeoKeywords(e.target.value);
    formik.setFieldValue("seoKeyword", seoKeywords);
  };

  return (
    <form className={Styles.catalog__seo} onSubmit={formik.handleSubmit}>
      <div className={Styles.catalog__seo__inputs}>
        <div
          className={`${
            formik.errors["seoTitle"] && formik.touched["seoTitle"]
              ? Styles.add__form__item__input_error
              : Styles.add__form__item__input
          }`}
        >
          <Input
            name={"seoTitle"}
            id={"seoTitle"}
            value={seoTitlePost}
            onChange={handlePostSeoTitleChange}
            placeholder={"SEO title"}
            type={"text"}
          />
          {seoTitlePost && (
            <div className={Styles.icon_clear} onClick={() => setSeoTitle("")}>
              <CloseIcon />
            </div>
          )}
          <div
            className={`${
              formik.errors["seoTitle"] && formik.touched["seoTitle"]
                ? Styles.overflow__auto
                : Styles.overflow
            }`}
          >
            <span>{formik.errors["seoTitle"]}</span>
          </div>
        </div>
        <div
          className={`${
            formik.errors["seoMetaH1"] && formik.touched["seoMetaH1"]
              ? Styles.add__form__item__input_error
              : Styles.add__form__item__input
          }`}
        >
          <Input
            name={"seoMetaH1"}
            id={"seoMetaH1"}
            value={seoH1}
            onChange={handlePostSeoH1Change}
            placeholder={"Seo meta-H1"}
            type={"text"}
          />
          {seoH1 && (
            <div className={Styles.icon_clear} onClick={() => setSeoH1("")}>
              <CloseIcon />
            </div>
          )}
          <div
            className={`${
              formik.errors["seoMetaH1"] && formik.touched["seoMetaH1"]
                ? Styles.overflow__auto
                : Styles.overflow
            }`}
          >
            <span>{formik.errors["seoMetaH1"]}</span>
          </div>
        </div>
        <div
          className={`${
            formik.errors["seoKeyword"] && formik.touched["seoKeyword"]
              ? Styles.add__form__item__input_error
              : Styles.add__form__item__input
          }`}
        >
          <Input
            name={"seoKeyword"}
            id={"seoKeyword"}
            value={seoKeywords}
            onChange={handlePostSeoKeywordsChange}
            placeholder={"Seo meta-H1"}
            type={"text"}
          />
          {seoKeywords && (
            <div
              className={Styles.icon_clear}
              onClick={() => setSeoKeywords("")}
            >
              <CloseIcon />
            </div>
          )}
          <div
            className={`${
              formik.errors["seoKeyword"] && formik.touched["seoKeyword"]
                ? Styles.overflow__auto
                : Styles.overflow
            }`}
          >
            <span>{formik.errors["seoKeyword"]}</span>
          </div>
        </div>
        <div
          className={`${
            formik.errors["seoDescription"] && formik.touched["seoDescription"]
              ? Styles.add__form__item__input_error
              : Styles.add__form__item__input
          }`}
        >
          <TextareaContainer
            name={"seoDescription"}
            id={"seoDescription"}
            value={seoDesc}
            onChange={handlePostSeoDescChange}
            placeholder={"SEO description"}
            maxLength="250"
            className={Styles.short_description}
          >
            {""}
          </TextareaContainer>
          <div
            className={`${
              formik.errors["seoDescription"] &&
              formik.touched["seoDescription"]
                ? Styles.overflow__auto
                : Styles.overflow
            }`}
          >
            <span>{formik.errors["seoDescription"]}</span>
          </div>
        </div>
        <Button children={"Сохранить"} type={"submit"} />
      </div>
    </form>
  );
};

export { EditSeoModal };
