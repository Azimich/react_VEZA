import React, { FC, useEffect, useState } from "react";

import Styles from "./FormNews.module.scss";
import { Container } from "components/common/container";
import { Input } from "components/input";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { Button } from "components/button";
// import { useAddNews } from "service/admin/item/postNews";
import { FormikValues, useFormik } from "formik";
import { ValidationNews } from "features/auth/formsData/ValidationsShemas";
import { IModalFormData } from "features/equipment/equipmentPage/utp/ModalFormI";
import { CloseIcon, DeleteIcon } from "components/icons";

const FormNews: FC<IModalFormData> = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<IBreadCrumbs[]>(dataBreadNews);
  const [inputFields, setInputFields] = useState([""]);
  const [selectedImage, setSelectedImage] = useState();

  const formik: FormikValues = useFormik({
    initialValues: {
      name: "",
      title_block: "",
      forgot: false,
      private_police: false,
    },
    validationSchema: ValidationNews(),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      formik.setFieldValue("image");
    }
  };

  const addFields = () => {
    setInputFields([...inputFields, ""]);
  };

  const deleteFields = (index: number) => {
    if (inputFields.length < 2) {
      return;
    } else {
      const data = [...inputFields];
      data.splice(index, 1);
      setInputFields(data);
    }
  };

  const handleFormChange = (
    index: number,
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const data = [...inputFields];
    data[index] = event.target.value;
    setInputFields(data);
  };

  useEffect(() => {
    setBreadCrumbs([...breadCrumbs, { title: "Добавить новость" }]);
  }, [dataBreadNews]);

  return (
    <Container className={"wrapper_clear"}>
      <BreadCrumbs data={breadCrumbs} />
      <form onSubmit={formik.handleSubmit} className={Styles.added_news}>
        <h1>Добавить баннер</h1>
        {/*<div className={Styles.added_news_banner}>*/}
        {/*  <div className={Styles.added_input}>*/}
        {/*    <label className={Styles.added_label}>*/}
        {/*      <span className={Styles.added_label_span}>*/}
        {/*        <Input*/}
        {/*          accept={"image/*"}*/}
        {/*          type={"file"}*/}
        {/*          id={"added"}*/}
        {/*          name={"added"}*/}
        {/*          className={Styles.added_file}*/}
        {/*        />*/}
        {/*      </span>*/}
        {/*    </label>*/}
        {/*  </div>*/}
        {/*</div>*/}
        <div className={Styles.add_info_banner}>
          {selectedImage && (
            <div
              className={Styles.delete_img}
              onClick={() => setSelectedImage(null)}
            >
              <CloseIcon />
            </div>
          )}

          <label className={Styles.added_input_label} htmlFor={"file"}>
            {selectedImage && (
              <img
                className={Styles.image}
                src={URL.createObjectURL(selectedImage)}
                alt={selectedImage}
              />
            )}
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
        <div className={Styles.add__form__item}>
          <div
            className={`${
              formik.errors["title_block"] && formik.touched["title_block"]
                ? Styles.add__form__item__input_error
                : Styles.add__form__item__input
            }`}
          >
            <Input
              id={"title_block"}
              name={"title_block"}
              placeholder={"Заголовок"}
              value={""}
            />
            <div
              className={`${
                formik.errors["title_block"] && formik.touched["title_block"]
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <span>{formik.errors["title_block"]}</span>
            </div>
          </div>

          <div className={Styles.textarea}>
            <textarea placeholder="Введите описание" />
          </div>

          <div
            className={`${
              formik.errors["title_block_2"] && formik.touched["title_block_2"]
                ? Styles.add__form__item__input_error
                : Styles.add__form__item__input
            }`}
          >
            <Input
              id={"title_block_2"}
              name={"title_block_2"}
              placeholder={"Заголовок 2"}
              value={""}
            />
            <div
              className={`${
                formik.errors["title_block_2"] &&
                formik.touched["title_block_2"]
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <span>{formik.errors["title_block_2"]}</span>
            </div>
          </div>
        </div>
        <div
          className={`${Styles.added_news_container} ${Styles.margin_bottom}`}
        >
          <div className={Styles.add_input}>
            <Button children={"Добавить поле"} onClick={() => addFields()} />
          </div>
          <ul>
            {inputFields.map((input, index) => (
              <li key={index}>
                <div className={Styles.input_list}>
                  <div className={Styles.input_div}>
                    <Input
                      name={"additional[]"}
                      id={index.toString()}
                      value={input}
                      onChange={(event) => handleFormChange(index, event)}
                      placeholder={""}
                      type={"text"}
                    />
                  </div>
                  <span onClick={() => deleteFields(index)}>
                    <DeleteIcon />
                  </span>
                </div>
              </li>
            ))}
          </ul>
          <div className={Styles.add_video}>
            <h1>Добавить видео</h1>
            <div className={Styles.added_news_banner}>
              <div className={Styles.added_input}>
                <label className={Styles.added_label}>
                  <span className={Styles.added_label_span}>
                    <Input
                      accept={"image/*"}
                      type={"file"}
                      id={"added"}
                      name={"added"}
                      className={Styles.added_file}
                    />
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className={Styles.save_buttons}>
          <Button type={"submit"} children="Сохранить" theme={"news"} />
          <Button children="Отменить" theme={"news"} />
        </div>
      </form>
    </Container>
  );
};

export { FormNews };
