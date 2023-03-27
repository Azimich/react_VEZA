import React, { FC, useEffect, useState } from "react";
import * as Yup from "yup";

import { ClearIcon, CloseIcon } from "components/icons";
import { Input } from "components/input";
import { useFormik } from "formik";
import Styles from "./Modals.module.scss";
import { Button } from "components/button";
import { usePutDecisionObject } from "service/admin/item/putDecisionObject";
import { useRouter } from "next/router";

interface IObject {
  title: string;
  imageUrl: string;
  categories: [];
  address: string;
  toggle?: () => void;
  industryObjectId: number;
  slidePosition?: number;
}

const EditObjectIndustry: FC<IObject> = ({
  title,
  imageUrl,
  address,
  toggle,
  industryObjectId,
  slidePosition,
}) => {
  const router = useRouter();
  const [imageValue, setImageValue] = useState(imageUrl);
  const [postTitle, setPostTitle] = useState(title);
  const [postAddress, setPostAddress] = useState(address);
  const [postSlidePosition, setPostSlidePosition] = useState(slidePosition);
  const { putDecisionObject } = usePutDecisionObject();

  const formik = useFormik({
    initialValues: {
      address: "",
      alias: router.query.slug,
      title: "",
      imageUrl: "",
      industryObjectId: 0,
      slidePosition: 0,
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Обязательно для заполнения!"),
      imageUrl: Yup.string().required("Обязательно для заполнения!"),
      address: Yup.string().required("Обязательно для заполнения!"),
      slidePosition: Yup.string().required("Обязательно для заполнения!"),
    }),
    onSubmit: (values) => {
      const _imageUrl =
        imageValue.indexOf("blob") > -1 ? imageValue : values.imageUrl;
      console.log("values", values);
      putDecisionObject(
        toggle,
        values.address,
        router.query.slug,
        values.title,
        _imageUrl,
        industryObjectId,
        values.slidePosition,
      ).then((data: any) => {
        toggle();
        console.log("items", data);
      });
    },
  });

  const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) return;
    setImageValue(URL.createObjectURL(event.target.files[0]));
    formik.setFieldValue("image", imageValue);
  };
  const handleChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostTitle(event.target.value);
    formik.setFieldValue("seoTitle", postTitle);
  };
  const handleChangeAddress = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostAddress(event.target.value);
    formik.setFieldValue("address", postAddress);
  };
  const handleChangeSlidePosition = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setPostSlidePosition(Number(event.target.value));
    formik.setFieldValue("slidePosition", postSlidePosition);
  };

  useEffect(() => {
    formik.setFieldValue("title", postTitle);
    formik.setFieldValue("address", postAddress);
    formik.setFieldValue("imageUrl", imageValue);
    formik.setFieldValue("slidePosition", postSlidePosition);
  }, [postTitle, postAddress, imageValue, postSlidePosition]);

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={Styles.edit__object}>
        <div className={Styles.add__image}>
          <>
            {imageValue ? (
              <div className={`${Styles.add_info_banner} ${Styles.preview}`}>
                <img
                  className={Styles.image}
                  src={imageValue}
                  alt={imageValue}
                />
                <div
                  className={Styles.delete_img}
                  onClick={() => setImageValue(null)}
                >
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
                          onChange={handleAddImage}
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
          </>
        </div>
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
                onChange={handleChangeTitle}
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
                formik.errors["address"] && formik.touched["address"]
                  ? Styles.add__form__item__input_error
                  : Styles.add__form__item__input
              }`}
            >
              <Input
                name={"address"}
                id={"address"}
                value={postAddress}
                onChange={handleChangeAddress}
                placeholder={"Название отрасли"}
                type={"text"}
              />
              {postAddress && (
                <div
                  className={Styles.icon_clear}
                  onClick={() => setPostAddress("")}
                >
                  <CloseIcon />
                </div>
              )}
              <div
                className={`${
                  formik.errors["address"] && formik.touched["address"]
                    ? Styles.overflow__auto
                    : Styles.overflow
                }`}
              >
                <span>{formik.errors["address"]}</span>
              </div>
            </div>
            <div
              className={`${
                formik.errors["slidePosition"] &&
                formik.touched["slidePosition"]
                  ? Styles.add__form__item__input_error
                  : Styles.add__form__item__input
              }`}
            >
              <Input
                name={"slidePosition"}
                id={"slidePosition"}
                value={String(postSlidePosition)}
                onChange={handleChangeSlidePosition}
                placeholder={"Название отрасли"}
                type={"number"}
              />
              <div
                className={`${
                  formik.errors["slidePosition"] &&
                  formik.touched["slidePosition"]
                    ? Styles.overflow__auto
                    : Styles.overflow
                }`}
              >
                <span>{formik.errors["slidePosition"]}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Button children={"Сохранить"} type={"submit"} />
    </form>
  );
};

export { EditObjectIndustry };
