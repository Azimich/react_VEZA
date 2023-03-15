import React, { FC, useState } from "react";

import Styles from "./Decision.module.scss";
import { Input } from "components/input";
import { Button } from "components/button";
import { CloseIcon } from "components/icons";
import TextareaContainer from "components/textarea/TextareaContainer";

interface IData {
  title?: string;
  toggle?: () => void;
  alias?: string;
}

const AdminModal: FC<IData> = () => {
  const [inputValue, setInputValue] = useState("");
  const [descValue, setDescValue] = useState("");

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const onChangeTextarea = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDescValue(event.target.value);
  };

  return (
    <>
      <div className={Styles.add_info}>
        <div className={Styles.add_info_banner}>
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
        <div className={Styles.add_input_block}>
          <div className={Styles.add_input}>
            <Input
              name={"additional[]"}
              id={"additional[]"}
              value={inputValue}
              onChange={onChangeInput}
              placeholder={"Название отрасли"}
              type={"text"}
            />
            <span onClick={() => setInputValue("")}>
              <CloseIcon />
            </span>
          </div>
          <TextareaContainer
            value={descValue}
            onChange={() => onChangeTextarea}
            placeholder={"Введите описание"}
          />
        </div>
      </div>
      <Button children={"Сохранить"} theme={"news"} onClick={() => {}} />
    </>
  );
};

export { AdminModal };
