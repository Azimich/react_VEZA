import Styles from "features/home/bannerModal/ModalBanner.module.scss";
import { Editor } from "components/editor_pen";
import { Input, LayoutInput } from "components/input";
import { Textarea } from "components/textarea/Index";
import { Button } from "components/button";
import React, { FC } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CheckboxWithLabel } from "components/checkbox";
import { useAddTopBanner } from "service/item/addTopBanner";

interface ITopBanner {
  type: "add" | "edit";
}

const ModalForm: FC<ITopBanner> = ({ type }) => {
  const { getAddTopBanner } = useAddTopBanner();
  const formik = useFormik({
    initialValues: {
      title: "",
      description: "",
      alias: "",
      showText: false,
      image: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Обязательно для заполнения!"),
    }),
    onSubmit: (values) => {
      const fd = new FormData();
      console.log("values", values);
      /*            fd.append('title', values.title);
                              fd.append('alias', values.alias);*/
      fd.append("image", values.image);
      getAddTopBanner(fd).then((data) => {
        console.log("data", data);
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={Styles.banner_modal_container}>
        <div className={Styles.banner_modal}>
          {type === "add" ? (
            <div className={Styles.banner_modal_added}>
              <div className={Styles.added_banner}>
                <div className={Styles.added_input}>
                  <label className={Styles.added_label}>
                    <span className={Styles.added_label_span}>
                      <Input
                        accept={"image/*"}
                        type={"file"}
                        id={"added"}
                        name={"added"}
                        className={Styles.added_file}
                        onChange={(event) => {
                          formik.setFieldValue("image", event.target.files[0]);
                        }}
                      />
                    </span>
                  </label>
                </div>
              </div>
              <div></div>
            </div>
          ) : (
            <div className={Styles.banner_modal_item}>
              <div className={Styles.edit_modal}>
                <label>
                  <Editor />
                  <input type="file" />
                </label>
              </div>
              <img src={"/images/banner.jpg"} alt={"banner"} />
            </div>
          )}
          <div className={Styles.banner_modal_item}>
            <div className={Styles.information}>
              <LayoutInput
                name={"title"}
                id={"title_id"}
                title={"Введите заголовок"}
                value={formik.values["title"]}
                onChange={(e) => {
                  formik.setFieldValue("title", e.target.value);
                }}
              />

              <Textarea
                name={"description"}
                placeholder={"Введите описаение"}
                onChange={(e) => {
                  formik.setFieldValue("description", e.target.value);
                }}
              />

              <LayoutInput
                name={"alias"}
                id={"alias_id"}
                title={"Введите ссылку для кнопки"}
                value={formik.values["alias"]}
                onChange={(e) => {
                  formik.setFieldValue("alias", e.target.value);
                }}
              />
              <CheckboxWithLabel
                name={"showText"}
                id={"showtext"}
                title={"Показывать описание"}
                onChangeData={(e) => {
                  formik.setFieldValue("showText", !e);
                }}
              />
            </div>
          </div>
        </div>
        <Button children={"Сохранить"} type={"submit"} />
      </div>
    </form>
  );
};
export { ModalForm };
