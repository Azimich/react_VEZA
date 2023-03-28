import React, { ChangeEvent, FC, useState } from "react";
import Styles from "./ModalAddProduction.module.scss";
import { Input } from "components/input";
import { Button } from "components/button";
import { AddIcon, CloseIcon, DeleteIcon } from "components/icons";
import { RichText } from "components/RichTextEdit/RichTextEditContainer";
import { Tree } from "components/tree_select_product";

const ModalAddProduction: FC = () => {
  const [inputFields, setInputFields] = useState([""]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [richText, setRichText] = useState(undefined);
  console.log("richText", richText);
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
  const handleOnChangeFiles = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    } else {
      for (let i = 0; i < event.target.files.length; i++) {
        setSelectedFiles((prevState) => [...prevState, event.target.files[i]]);
      }
    }
  };

  const handleOnClickDelete = (id: number) => {
    setSelectedFiles(selectedFiles.filter((e, i) => i !== id));
  };
  const handleOnChangeRich = (e: { target: { getContent: () => string } }) => {
    setRichText(e.target.getContent());
  };

  const handleOnChangeTree = (data: any) => {
    console.log("data", data);
  };

  return (
    <div className={Styles.add_prod}>
      <h2>Добавить фото в галерею</h2>
      <div className={Styles.add_prod_banner_items}>
        {selectedFiles.map((file, i) => {
          return (
            <div className={Styles.cell_gallery} key={i}>
              <img src={URL.createObjectURL(file)} alt={file.name} />
              <span
                className={Styles.delete_icon}
                onClick={() => handleOnClickDelete(i)}
              >
                <CloseIcon />
              </span>
            </div>
          );
        })}
        <label className={Styles.add_prod_banner} htmlFor={"added"}>
          <div className={Styles.added_input}>
            <div className={Styles.added_label}>
              <AddIcon />
              <span className={Styles.added_label_span}>
                <Input
                  accept={"image/*"}
                  type={"file"}
                  id={"added"}
                  name={"added"}
                  onChange={(event) => {
                    handleOnChangeFiles(event);
                  }}
                  className={Styles.added_file}
                />
              </span>
            </div>
          </div>
        </label>
      </div>
      <h2>Добавление преимуществ</h2>
      <div className={Styles.add_prod_info}>
        <div className={Styles.add_prod_info_left}>
          <Button children={"Добавить"} onClick={() => addFields()} />
          <ul>
            {inputFields.map((input, index) => (
              <li key={index} className={Styles.add_prod_info_input}>
                <Input
                  id={index.toString()}
                  value={input}
                  onChange={(event) => handleFormChange(index, event)}
                  placeholder={""}
                  type={"text"}
                />
                <span onClick={() => deleteFields(index)}>
                  <DeleteIcon />
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className={Styles.add_prod_info_right}>В разработке</div>
      </div>
      <div className={Styles.block_desc}>
        <h2>Описание продукции</h2>
        <RichText
          description={""}
          onChange={(e: { target: { getContent: () => string } }) =>
            handleOnChangeRich(e)
          }
        />
      </div>
      <h2>Выберите дополнительное оборудование</h2>
      <div className={Styles.add_prod_block}>
        <Tree alias={"-"} onChange={handleOnChangeTree} buttonIsShow={false} />
      </div>
      <div className={Styles.add_prod_button}>
        <Button children={"Сохранить"} />
      </div>
    </div>
  );
};

export { ModalAddProduction };
