import React, { FC } from "react";
import Styles from "./ModalBanner.module.scss";
import { Button } from "components/button";
import { Input } from "components/input";

const ModalBannerAdded: FC = () => {
  return (
    <div className={Styles.banner_modal_container}>
      <div className={Styles.banner_modal_added}>
        <div className={Styles.added_banner}>
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
        <div></div>
      </div>
      <Button children={"Сохранить"} />
    </div>
  );
};

export { ModalBannerAdded };
