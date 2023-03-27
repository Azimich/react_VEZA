import React, { FC, useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Styles from "features/decision/Decision.module.scss";
import { Input } from "components/input";
import { ClearIcon, CloseIcon } from "components/icons";
import TextareaContainer from "components/textarea/TextareaContainer";
import { Button } from "components/button";
import { usePutDecision } from "service/admin/item/putDecision";
import { IEditModal } from "features/decision/DecisionPage/Decision";

const EditIndustry: FC<IEditModal> = ({
  title,
  description,
  toggle,
  alias,
  shortDescription,
  seoMetaH1,
  seoDescription,
  seoKeyword,
  imageUrl,
  seoTitle,
}) => {
  const [preview, setPreview] = useState<string>(imageUrl);
  const [postTitle, setPostTitle] = useState(title);
  const [postDesc, setPostDesc] = useState(description);
  const [postShortDesc, setPostShortDesc] = useState(shortDescription);
  const [seoH1, setSeoH1] = useState(seoMetaH1);
  const [seoTitlePost, setSeoTitle] = useState(seoTitle);
  const [seoDesc, setSeoDesc] = useState(seoDescription);
  const [seoKeywords, setSeoKeywords] = useState(seoKeyword);
  const { putDecision } = usePutDecision();

  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      shortDescription: "",
      imageUrl: "",
      seoMetaH1: "",
      seoDescription: "",
      seoKeyword: "",
      seoTitle: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Обязательно для заполнения!"),
      description: Yup.string().required("Обязательно для заполнения!"),
      shortDescription: Yup.string().required("Обязательно для заполнения!"),
      imageUrl: Yup.string().required("Обязательно для заполнения!"),
      seoMetaH1: Yup.string().required("Обязательно для заполнения!"),
      seoTitle: Yup.string().required("Обязательно для заполнения!"),
      seoDescription: Yup.string().required("Обязательно для заполнения!"),
      seoKeyword: Yup.string().required("Обязательно для заполнения!"),
    }),
    onSubmit: (values) => {
      const _imageUrl =
        preview.indexOf("blob") > -1 ? preview : values.imageUrl;
      putDecision(
        alias,
        values.description,
        toggle,
        values.shortDescription,
        values.title,
        values.seoTitle,
        values.seoMetaH1,
        values.seoDescription,
        values.seoKeyword,
        _imageUrl,
      ).then((data: any) => {
        toggle();
        console.log("items", data);
      });
      console.log("values", values);
    },
  });

  const handlePostTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
    formik.setFieldValue("title", postTitle);
  };

  const handlePostDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostDesc(e.target.value);
    formik.setFieldValue("description", postDesc);
  };

  const handlePostShortDescChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPostShortDesc(e.target.value);
    formik.setFieldValue("shortDescription", postShortDesc);
  };

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

  const imageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setPreview(URL.createObjectURL(event.target.files[0]));
    formik.setFieldValue("image", preview);
  };

  useEffect(() => {
    formik.setFieldValue("title", postTitle);
    formik.setFieldValue("description", postDesc);
    formik.setFieldValue("shortDescription", postShortDesc);
    formik.setFieldValue("imageUrl", preview);
    formik.setFieldValue("seoMetaH1", seoH1);
    formik.setFieldValue("seoTitle", seoTitlePost);
    formik.setFieldValue("seoDescription", seoDesc);
    formik.setFieldValue("seoKeyword", seoKeywords);
  }, [
    postTitle,
    postDesc,
    postShortDesc,
    preview,
    seoH1,
    seoTitlePost,
    seoDesc,
    seoKeywords,
  ]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={Styles.add_info}>
        {preview ? (
          <div className={`${Styles.add_info_banner} ${Styles.preview}`}>
            <img className={Styles.image} src={preview} alt={alias} />
            <div className={Styles.delete_img} onClick={() => setPreview(null)}>
              <ClearIcon />
            </div>
          </div>
        ) : (
          <div className={Styles.add_info_banner}>
            <label className={Styles.added_input_label} htmlFor={"file"}>
              <div className={Styles.added_input}>
                <div className={Styles.added_label}>
                  <span className={Styles.added_label_span}>
                    <Input
                      onChange={imageChange}
                      accept={"image/*"}
                      type={"file"}
                      value={formik.values["imageUrl"]}
                      id={"file"}
                      name={"added"}
                      className={Styles.added_file}
                    />
                  </span>
                </div>
              </div>
            </label>
          </div>
        )}
        <div className={Styles.add_input_block}>
          <div className={Styles.add_input_block_left}>
            <div
              className={`${
                formik.errors["title"] && formik.touched["title"]
                  ? Styles.add__form__item__input_error
                  : Styles.add__form__item__input
              }`}
            >
              <Input
                name={"title"}
                id={"title"}
                value={postTitle}
                onChange={handlePostTitleChange}
                placeholder={"Название отрасли"}
                type={"text"}
              />
              {postTitle && (
                <div
                  className={Styles.icon_clear}
                  onClick={() => setPostTitle("")}
                >
                  <CloseIcon />
                </div>
              )}
              <div
                className={`${
                  formik.errors["title"] && formik.touched["title"]
                    ? Styles.overflow__auto
                    : Styles.overflow
                }`}
              >
                <span>{formik.errors["title"]}</span>
              </div>
            </div>
            <div
              className={`${
                formik.errors["shortDescription"] &&
                formik.touched["shortDescription"]
                  ? Styles.add__form__item__input_error
                  : Styles.add__form__item__input
              }`}
            >
              <TextareaContainer
                value={postShortDesc}
                onChange={handlePostShortDescChange}
                id={"shortDescription"}
                name={"shortDescription"}
                placeholder={"Введите описание"}
                className={Styles.short_description}
              >
                {shortDescription}
              </TextareaContainer>
              <div
                className={`${
                  formik.errors["shortDescription"] &&
                  formik.touched["shortDescription"]
                    ? Styles.overflow__auto
                    : Styles.overflow
                }`}
              >
                <span>{formik.errors["shortDescription"]}</span>
              </div>
            </div>
            <div
              className={`${
                formik.errors["description"] && formik.touched["description"]
                  ? Styles.add__form__item__input_error
                  : Styles.add__form__item__input
              }`}
            >
              <TextareaContainer
                value={postDesc}
                onChange={handlePostDescChange}
                id={"description"}
                name={"description"}
                placeholder={"Введите описание"}
              >
                {description}
              </TextareaContainer>
              <div
                className={`${
                  formik.errors["description"] && formik.touched["description"]
                    ? Styles.overflow__auto
                    : Styles.overflow
                }`}
              >
                <span>{formik.errors["description"]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.add_input_meta}>
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
            placeholder={"SEO meta-H1"}
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
            placeholder={"SEO keywords"}
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
            {seoDescription}
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
      </div>
      <Button children={"Сохранить"} type={"submit"} />
    </form>
  );
};

export { EditIndustry };
