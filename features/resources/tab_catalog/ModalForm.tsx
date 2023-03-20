import React, { useState } from "react";
import { FC } from "react";
import Styles from "./ModalForm.module.scss";
import { Input } from "components/input";
import { AddIcon, CloseIcon } from "components/icons";
import { Button } from "components/button";
import { usePostCatalog } from "service/admin/item/postCatalog";

interface IData {
  toggle?: () => void;
}

const ModalForm: FC<IData> = ({ toggle }) => {
  const [selectedFilesIcon, setSelectedFilesIcon] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [inputValue, setInputValue] = useState(undefined);
  const { postCatalog } = usePostCatalog();
  const handleOnClickSave = () => {
    const fd = new FormData();
    fd.append("icon", selectedFilesIcon[0]);
    fd.append("file", selectedFiles[0]);
    fd.append("title", inputValue);

    postCatalog(fd).then((data) => {
      console.log("data", data);
    });
  };
  const handleOnClickDelete = (type: string) => {
    if (type === "icon") {
      setSelectedFilesIcon([]);
    } else if (type === "file") {
      setSelectedFiles([]);
    }
  };

  return (
    <div className={Styles.div_container}>
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
              <CloseIcon />
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
              <CloseIcon />
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
      <div>
        <Input
          type={"text"}
          id={"added"}
          name={"added"}
          placeholder={"Название каталога"}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          // className={Styles.added_file}
        />
      </div>
      <div className={Styles.block_button}>
        <Button
          className={Styles.button_send}
          onClick={() => handleOnClickSave()}
        >
          Сохранить
        </Button>
        <Button className={Styles.button_send} onClick={toggle}>
          Отменить
        </Button>
      </div>
    </div>
  );
};

export { ModalForm };
