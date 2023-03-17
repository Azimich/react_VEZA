import React, { FC, useEffect, useState } from "react";
import * as Yup from "yup";

import Styles from "./FormNews.module.scss";
import { Container } from "components/common/container";
import { Input } from "components/input";
import { BreadCrumbs, IBreadCrumbs } from "components/breadcrumbs";
import { dataBreadNews } from "components/breadcrumbs/mockData";
import { Button } from "components/button";
import { FormikValues, useFormik } from "formik";
import { IModalFormData } from "features/equipment/equipmentPage/utp/ModalFormI";
import { CloseIcon, DeleteIcon } from "components/icons";
import TextareaContainer from "components/textarea/TextareaContainer";

const FormNews: FC<IModalFormData> = () => {
  const [breadCrumbs, setBreadCrumbs] = useState<IBreadCrumbs[]>(dataBreadNews);
  const [inputFields, setInputFields] = useState([""]);
  const [selectedImage, setSelectedImage] = useState();
  const [selectedVideo, setSelectedVideo] = useState();
  const [titleValue, setTitleValue] = useState("");
  const [titleSecondValue, setTitleSecondValue] = useState("");

  const formik: FormikValues = useFormik({
    initialValues: {
      name: "",
      title: "",
      title_2: "",
      description: "",
      image: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Обязательно для заполнения!"),
      title_2: Yup.string().required("Обязательно для заполнения!"),
      description: Yup.string().required("Обязательно для заполнения!"),
    }),
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  const changeTitleFirst = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleValue(e.target.value);
    formik.setFieldValue("title");
  };
  const changeTitleSecond = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitleSecondValue(e.target.value);
    formik.setFieldValue("title_2");
  };
  const imageChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedImage(e.target.files[0]);
      formik.setFieldValue("image");
    }
  };
  const videoChange = (e: any) => {
    if (e.target.files && e.target.files.length > 0) {
      setSelectedVideo(e.target.files[0]);
      formik.setFieldValue("video");
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
        <div className={Styles.added_news_banner}>
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
              formik.errors["title"] && formik.touched["title"]
                ? Styles.add__form__item__input_error
                : Styles.add__form__item__input
            }`}
          >
            <Input
              id={"title"}
              name={"title"}
              placeholder={"Заголовок"}
              value={titleValue}
              onChange={changeTitleFirst}
            />
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
              formik.errors["description"] && formik.touched["description"]
                ? Styles.add__form__item__input_error
                : Styles.add__form__item__input
            }`}
          >
            <TextareaContainer
              value={formik.setFieldValue["description"]}
              onChange={(e) => {
                formik.setFieldValue("description", e.target.value);
              }}
              id={"description_"}
              name={"description_"}
              placeholder={"Введите описаение"}
            ></TextareaContainer>
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

          <div
            className={`${
              formik.errors["title_2"] && formik.touched["title_2"]
                ? Styles.add__form__item__input_error
                : Styles.add__form__item__input
            }`}
          >
            <Input
              id={"title_2"}
              name={"title_2"}
              placeholder={"Заголовок 2"}
              value={titleSecondValue}
              onChange={changeTitleSecond}
            />
            <div
              className={`${
                formik.errors["title_2"] && formik.touched["title_2"]
                  ? Styles.overflow__auto
                  : Styles.overflow
              }`}
            >
              <span>{formik.errors["title_2"]}</span>
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
              {selectedVideo && (
                <div
                  className={Styles.delete_img}
                  onClick={() => setSelectedVideo(null)}
                >
                  <CloseIcon />
                </div>
              )}
              <label className={Styles.added_input_label} htmlFor={"videos"}>
                {selectedVideo && (
                  <img
                    className={Styles.image}
                    src={URL.createObjectURL(selectedVideo)}
                    alt={selectedVideo}
                  />
                )}
                <div className={Styles.added_input}>
                  <div className={Styles.added_label}>
                    <span className={Styles.added_label_span}>
                      <Input
                        onChange={videoChange}
                        accept={"video/*"}
                        type={"file"}
                        value={formik.values["video"]}
                        id={"videos"}
                        name={"added"}
                        className={Styles.added_file}
                      />
                    </span>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
        <div className={Styles.save_buttons}>
          <Button children="Сохранить" type={"submit"} />
          <Button children="Отменить" theme={"news"} />
        </div>
      </form>
    </Container>
  );
};

export { FormNews };
