import React, { useState } from "react";
import { FC } from "react";
import Styles from "./ModalForm.module.scss";
import { Input } from "components/input";
import { AddIcon, ClearIcon, CloseIcon } from "components/icons";
import { Button } from "components/button";
import { usePostCatalog } from "service/admin/item/postCatalog";
import { useFormik } from "formik";
import * as Yup from "yup";

interface IData {
  toggle?: () => void;
  onChange?: () => void;
}

const ModalForm: FC<IData> = ({ toggle, onChange }) => {
  const [selectedFilesIcon, setSelectedFilesIcon] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [inputValue, setInputValue] = useState(undefined);
  const { postCatalog } = usePostCatalog();
  const formik = useFormik({
    initialValues: {
      added: "",
    },
    validationSchema: Yup.object({
      added: Yup.string().required("Обязательно для заполнения!"),
    }),
    onSubmit: (values) => {
      const fd = new FormData();
      fd.append("icon", selectedFilesIcon[0]);
      fd.append("file", selectedFiles[0]);
      fd.append("title", inputValue);
      postCatalog(fd).then(() => {
        onChange();
        toggle();
      });
      console.log("values", values);
    },
  });
  // const handleOnClickSave = () => {
  //   const fd = new FormData();
  //   fd.append("icon", selectedFilesIcon[0]);
  //   fd.append("file", selectedFiles[0]);
  //   fd.append("title", inputValue);
  //   postCatalog(fd).then(() => {
  //     onChange();
  //     toggle();
  //   });
  // };
  const handleOnClickDelete = (type: string) => {
    if (type === "icon") {
      setSelectedFilesIcon([]);
    } else if (type === "file") {
      setSelectedFiles([]);
    }
  };

  const handlePostTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    formik.setFieldValue("added", inputValue);
  };

  return (
    <form onSubmit={formik.handleSubmit} className={Styles.div_container}>
      <h2>Иконка</h2>
      <div className={Styles.box_gallery_container}>
        {selectedFilesIcon.length > 0 && (
          <div className={Styles.cell_gallery}>
            {selectedFilesIcon[0]?.type?.match("image.*") && (
              <img
                src={URL.createObjectURL(selectedFilesIcon[0])}
                alt={selectedFilesIcon[0].name}
              />
            )}
            <p>
              {!selectedFilesIcon[0]?.type?.match("image.*") &&
                selectedFilesIcon[0].name}
            </p>
            <span
              className={Styles.delete_icon}
              onClick={() => handleOnClickDelete("icon")}
            >
              <ClearIcon />
            </span>
          </div>
        )}

        <label className={Styles.add_info_banner} htmlFor={"iconId"}>
          <div className={Styles.added_input}>
            <div className={Styles.added_label}>
              <AddIcon />
              <span className={Styles.added_label_span}>
                <Input
                  accept="image/*"
                  type={"file"}
                  multi={false}
                  id={"iconId"}
                  name={"iconId"}
                  onChange={(e) => setSelectedFilesIcon([e.target.files[0]])}
                  className={Styles.added_file}
                />
              </span>
            </div>
          </div>
        </label>
      </div>
      <h2>Файл</h2>
      <div className={Styles.box_gallery_container}>
        {selectedFiles.length > 0 && (
          <div className={Styles.cell_gallery}>
            {selectedFiles[0]?.type?.match("image.*") && (
              <img
                src={URL.createObjectURL(selectedFiles[0])}
                alt={selectedFiles[0].name}
              />
            )}
            <p>
              {!selectedFiles[0]?.type?.match("image.*") &&
                selectedFiles[0].name}
            </p>
            <span
              className={Styles.delete_icon}
              onClick={() => handleOnClickDelete("file")}
            >
              <ClearIcon />
            </span>
          </div>
        )}
        <label className={Styles.add_info_banner} htmlFor={"fileId"}>
          <div className={Styles.added_input}>
            <div className={Styles.added_label}>
              <AddIcon />
              <span className={Styles.added_label_span}>
                <Input
                  accept={"image/*"}
                  type={"file"}
                  multi={false}
                  id={"fileId"}
                  name={"fileId"}
                  onChange={(e) => setSelectedFiles([e.target.files[0]])}
                  className={Styles.added_file}
                />
              </span>
            </div>
          </div>
        </label>
      </div>
      <div className={Styles.validation__inputs}>
        <div
          className={`${
            formik.errors["added"] && formik.touched["added"]
              ? Styles.validation__inputs__input_error
              : Styles.validation__inputs__input
          }`}
        >
          <Input
            name={"added"}
            id={"added"}
            value={inputValue}
            onChange={handlePostTitleChange}
            placeholder={"Название каталога"}
            type={"text"}
          />
          {inputValue && (
            <div
              className={Styles.icon_clear}
              onClick={() => setInputValue("")}
            >
              <CloseIcon />
            </div>
          )}
          <div
            className={`${
              formik.errors["added"] && formik.touched["added"]
                ? Styles.overflow__auto
                : Styles.overflow
            }`}
          >
            <span>{formik.errors["added"]}</span>
          </div>
        </div>
      </div>
      <div className={Styles.block_button}>
        <Button className={Styles.button_send} type={"submit"}>
          Сохранить
        </Button>
        <Button className={Styles.button_send} onClick={toggle}>
          Отменить
        </Button>
      </div>
    </form>
  );
};

export { ModalForm };
