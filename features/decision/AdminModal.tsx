import React, { FC, useState } from "react";

import Styles from "./Decision.module.scss";
import { Input } from "components/input";
// import TextareaContainer from "components/textarea/TextareaContainer";
import { Button } from "components/button";
import { RichText } from "components/RichTextEdit/RichTextEditContainer";

interface IDATA {
  toggle?: () => void;
  desc?: string;
  alias?: string;
  shortDescription?: string;
}

const AdminModal: FC<IDATA> = ({ desc, alias }) => {
  const [descriptionEdit, setDescriptionEdit] = useState<string>();
  console.log("ddddddd", descriptionEdit, alias);
  const handleInputOnChange = (e: { target: { getContent: () => string } }) => {
    console.log("getContent", e.target.getContent());
    setDescriptionEdit(e.target.getContent());
  };

  const handleOnClickSave = () => {
    console.log("save");
    // toggle()
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
        <div className={Styles.add_input}>
          <RichText
            description={desc}
            onChange={(e: { target: { getContent: () => string } }) =>
              handleInputOnChange(e)
            }
          />
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
