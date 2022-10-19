import React, { FC } from "react";
import Styles from "../../features/auth/SignContainer.module.scss";
import { Input } from "../../components/input/Index";
import { Button } from "components/button";

const SingForgotForm: FC = () => {
  return (
    <div className={Styles.forgot__form}>
      <h1>Восстановить пароль</h1>
      <form className={Styles.forgot__form__item}>
        <div className={Styles.forgot__form__item__input}>
          <Input value={""} name={"forgot"} placeholder={"Введите почту *"} />
        </div>
        <Button children={"Восстановить"} />
      </form>
    </div>
  );
};

export { SingForgotForm };
