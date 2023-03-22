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

const EditPageModal: FC<IEditModal> = ({
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
      image: "",
      seoMetaH1: "",
      seoDescription: "",
      seoKeyword: "",
      seoTitle: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Обязательно для заполнения!"),
      description: Yup.string().required("Обязательно для заполнения!"),
      shortDescription: Yup.string().required("Обязательно для заполнения!"),
      seoMetaH1: Yup.string().required("Обязательно для заполнения!"),
      seoDescription: Yup.string().required("Обязательно для заполнения!"),
      seoKeyword: Yup.string().required("Обязательно для заполнения!"),
      seoTitle: Yup.string().required("Обязательно для заполнения!"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  const handlePostTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(e.target.value);
    formik.setFieldValue("title", title);
  };

  const handlePostDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPostDesc(e.target.value);
    formik.setFieldValue("description", description);
  };

  const handlePostShortDescChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPostShortDesc(e.target.value);
    formik.setFieldValue("shortDescription", shortDescription);
  };

  const handlePostSeoH1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeoH1(e.target.value);
    formik.setFieldValue("seoMetaH1", seoMetaH1);
  };

  const handlePostSeoTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeoTitle(e.target.value);
    formik.setFieldValue("seoTitle", seoTitle);
  };

  const handlePostSeoDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSeoDesc(e.target.value);
    formik.setFieldValue("seoDescription", seoDescription);
  };

  const handlePostSeoKeywordsChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setSeoKeywords(e.target.value);
    formik.setFieldValue("seoKeyword", seoKeyword);
  };

  const imageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setPreview(URL.createObjectURL(event.target.files[0]));
    formik.setFieldValue("image", imageUrl);
  };

  const onClickSave = () => {
    putDecision(
      title,
      description,
      toggle,
      alias,
      shortDescription,
      imageUrl,
      seoTitle,
      seoMetaH1,
      seoKeyword,
      seoDescription,
    ).then((data: any) => {
      toggle();
      console.log("items", data);
    });
  };

  useEffect(() => {
    formik.setFieldValue("title", title);
    formik.setFieldValue("description", description);
    formik.setFieldValue("shortDescription", shortDescription);
    formik.setFieldValue("imageUrl", imageUrl);
    formik.setFieldValue("seoMetaH1", seoMetaH1);
    formik.setFieldValue("seoTitle", seoTitle);
    formik.setFieldValue("seoDescription", seoDescription);
    formik.setFieldValue("seoKeyword", seoKeyword);
  }, [
    imageUrl,
    description,
    shortDescription,
    title,
    seoMetaH1,
    seoTitle,
    seoDescription,
    seoKeyword,
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
                      value={formik.values["image"]}
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
            <div className={Styles.add_input}>
              <Input
                name={"additional[]"}
                id={"additional[]"}
                value={postTitle}
                onChange={handlePostTitleChange}
                placeholder={"Название отрасли"}
                type={"text"}
              />
              {postTitle && (
                <span onClick={() => setPostTitle("")}>
                  <CloseIcon />
                </span>
              )}
            </div>
            <div className={Styles.short_description}>
              <TextareaContainer
                value={postShortDesc}
                onChange={handlePostShortDescChange}
                id={"shortDescription"}
                name={"shortDescription"}
                placeholder={"Введите описание"}
              >
                {shortDescription}
              </TextareaContainer>
            </div>
            <TextareaContainer
              value={postDesc}
              onChange={handlePostDescChange}
              id={"description_"}
              name={"description_"}
              placeholder={"Введите описание"}
            >
              {description}
            </TextareaContainer>
          </div>
        </div>
      </div>
      <div className={Styles.add_input_meta}>
        <div className={Styles.add_input_meta_input}>
          <Input
            name={"seo_h1"}
            id={"seo_h1"}
            value={seoH1}
            onChange={handlePostSeoH1Change}
            placeholder={"SEO meta-H1"}
            type={"text"}
          />
          {seoH1 && (
            <span onClick={() => setSeoH1("")}>
              <CloseIcon />
            </span>
          )}
        </div>
        <div className={Styles.add_input_meta_input}>
          <Input
            name={"seo_title"}
            id={"seo_title"}
            value={seoTitlePost}
            onChange={handlePostSeoTitleChange}
            placeholder={"SEO title"}
            type={"text"}
          />
          {seoTitlePost && (
            <span onClick={() => setSeoTitle("")}>
              <CloseIcon />
            </span>
          )}
        </div>
        <div className={Styles.add_input_meta_input}>
          <Input
            name={"seo_keywords"}
            id={"seo_keywords"}
            value={seoKeywords}
            onChange={handlePostSeoKeywordsChange}
            placeholder={"SEO keywords"}
            type={"text"}
          />
          {seoKeywords && (
            <span onClick={() => setSeoKeywords("")}>
              <CloseIcon />
            </span>
          )}
        </div>
        <div className={Styles.short_description}>
          <TextareaContainer
            name={"seo_desc"}
            id={"seo_desc"}
            value={seoDesc}
            onChange={handlePostSeoDescChange}
            placeholder={"SEO description"}
            maxLength="250"
          >
            {seoDescription}
          </TextareaContainer>
        </div>
      </div>
      <Button
        onClick={() => onClickSave()}
        children={"Сохранить"}
        type={"submit"}
      />
    </form>
  );
};

export { EditPageModal };
