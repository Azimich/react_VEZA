import React, { FC, useState } from "react";
import Styles from "./ModalAddProduction.module.scss";
import { Input } from "components/input";
import { Button } from "components/button";
import { CheckIcon, CloseIcon } from "components/icons";
const ModalAddProduction: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    setInputValue(event.target.value);
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
          <Button children={"Добавить"} />
          <div className={Styles.add_prod_info_input}>
            <Input
              value={inputValue}
              type={"text"}
              onChange={handleOnChange}
              name={"search_catalog"}
              id={"search_catalog_id"}
              placeholder={"Какое-то поле"}
              className={Styles.input_field}
            />
            {inputValue && (
              <span>
                <CloseIcon onClick={() => setInputValue("")} />
                <CheckIcon />
              </span>
            )}
          </div>
        </div>
        <div className={Styles.add_prod_info_right}>
          <Button children={"Добавить"} />
        </div>
      </div>
      <textarea
        className={Styles.add_prod_text}
        placeholder={"Введите описание"}
      />
      <div className={Styles.add_prod_button}>
        <Button children={"Сохранить"} />
      </div>
    </div>
  );
};

export { ModalAddProduction };
