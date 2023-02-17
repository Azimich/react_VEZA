import React, { FC, useState } from "react";
import Styles from "./ModalBanner.module.scss";
import { Button } from "components/button";
import { LayoutInput } from "components/input";
// @ts-ignore
import { Textarea } from "components/textarea";
import { Editor } from "components/editor_pen";

const ModalBannerEdit: FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [buttonLink, setButtonLink] = useState("");

  const handleOnChange = (event: any) => {
    setInputValue(event.target.value);
  };
  const handleOnChangeButton = (event: any) => {
    setButtonLink(event.target.value);
  };

  return (
    <div className={Styles.banner_modal_container}>
      <div className={Styles.banner_modal}>
        <div className={Styles.banner_modal_item}>
          <div className={Styles.edit_modal}>
            <label>
              <Editor />
              <input type="file" />
            </label>
          </div>
          <img src={"/images/banner.jpg"} alt={"banner"} />
        </div>
        <div className={Styles.banner_modal_item}>
          <div className={Styles.information}>
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Введите заголовок"}
              value={inputValue}
              onChange={handleOnChange}
            />
            <Textarea placeholder={"Введите описаение"} />
            <LayoutInput
              name={"email"}
              id={"email_id"}
              title={"Введите ссылку для кнопки"}
              value={buttonLink}
              onChange={handleOnChangeButton}
            />
          </div>
        </div>
      </div>
      <Button children={"Сохранить"} />
    </div>
  );
};

export { ModalBannerEdit };
