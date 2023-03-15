import React, { FC, useState } from "react";

import Styles from "./Decision.module.scss";
import { Input } from "components/input";
import { Button } from "components/button";
import { usePutDescription } from "service/admin/item/putDescription";
import { CloseIcon } from "components/icons";
import TextareaContainer from "components/textarea/TextareaContainer";

interface IData {
  toggle?: () => void;
  desc?: string;
  alias?: string;
  shortDescription?: string;
}

const AdminModal: FC<IData> = ({ alias, toggle }) => {
  const { putDescription } = usePutDescription();

  const [descriptionEdit, setDescriptionEdit] = useState<string>();
  console.log("ddddddd", descriptionEdit, alias);
  const handleInputOnChange = () => {
    setDescriptionEdit("");
  };

  const handleOnClickSave = () => {
    putDescription(alias, descriptionEdit).then((data: any) => {
      toggle();
      console.log("data", data);
    });
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
              id={""}
              value={""}
              onChange={handleInputOnChange}
              placeholder={"Название отрасли"}
              type={"text"}
            />
            <span onClick={() => {}}>
              <CloseIcon />
            </span>
          </div>
          <TextareaContainer placeholder={"Введите описание"} />
        </div>
      </div>
      <Button
        children={"Сохранить"}
        theme={"news"}
        onClick={handleOnClickSave}
      />
    </>
  );
};

export { AdminModal };
