import React, { FC } from "react";
import Styles from "../../features/auth/SignContainer.module.scss";
import { Input } from "../../components/input/Index";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";

const SingInForm: FC = () => {
  return (
    <div className={Styles.authorization__form}>
      <form className={Styles.authorization__form__item}>
        <Input />
        <Input />
        <div className={Styles.authorization__form__item__forgot}>
          <CheckboxWithLabel />
          <a href="#">Забыл пароль?</a>
        </div>
        <Button />
      </form>
    </div>
  );
};

export { SingInForm };
