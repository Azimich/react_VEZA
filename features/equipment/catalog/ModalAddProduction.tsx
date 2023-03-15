import React, { FC, useState } from "react";
import Styles from "./ModalAddProduction.module.scss";
import { Input } from "components/input";
import { Button } from "components/button";
import { DeleteIcon } from "components/icons";

const ModalAddProduction: FC = () => {
  const [inputFields, setInputFields] = useState([""]);

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

  return (
    <div className={Styles.add_prod}>
      <div className={Styles.add_prod_banner_items}>
        <div className={Styles.add_prod_banner}>
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
        <div className={Styles.add_prod_info_right}>
          <Button children={"Добавить"} />
        </div>
      </div>
      <textarea
        className={Styles.add_prod_text}
        placeholder={"Введите описание"}
      />
      <div className={Styles.add_prod_block}>
        <div className={Styles.add_prod_first}>first</div>
        <div className={Styles.add_prod_second}>second</div>
      </div>
      <div className={Styles.add_prod_button}>
        <Button children={"Сохранить"} />
      </div>
    </div>
  );
};

export { ModalAddProduction };
