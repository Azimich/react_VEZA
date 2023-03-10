import React, { useState } from "react";
import { FC } from "react";
import Styles from "./UtpModalAction.module.scss";
import { Button } from "components/button";
import { RichText } from "components/RichTextEdit/RichTextEditContainer";

interface IData {
  description: string;
  alias: string;
  toggle?: () => void;
}

const ModalFormDescriptionEdit: FC<IData> = ({
  description,
  alias,
  toggle,
}) => {
  const [descriptionEdit, setDescriptionEdit] = useState<string>();
  console.log("descriptionEdit", descriptionEdit, alias);
  const handleInputOnChange = (e: { target: { getContent: () => string } }) => {
    setDescriptionEdit(e.target.getContent());
  };
  const handleOnClickSave = () => {
    console.log("save");
  };
  return (
    <div className={Styles.action_container}>
      <RichText
        description={description}
        onChange={(e: { target: { getContent: () => string } }) =>
          handleInputOnChange(e)
        }
      />
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
export { ModalFormDescriptionEdit };
