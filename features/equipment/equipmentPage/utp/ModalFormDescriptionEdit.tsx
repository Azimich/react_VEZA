import React, { FC, useState } from "react";

import Styles from "./UtpModalAction.module.scss";
import { Button } from "components/button";
import { RichText } from "components/RichTextEdit/RichTextEditContainer";
import { usePutDescription } from "service/admin/item/putDescription";

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
  const { putDescription } = usePutDescription();

  const handleInputOnChange = (e: { target: { getContent: () => string } }) => {
    setDescriptionEdit(e.target.getContent());
  };
  const handleOnClickSave = () => {
    putDescription(alias, descriptionEdit).then((data: any) => {
      toggle();
      console.log("data", data);
    });
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
