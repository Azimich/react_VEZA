import React, { FC } from "react";
import Styles from "../../features/auth/SignContainer.module.scss";
import { Input } from "../../components/input/Index";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";
import Link from "next/link";

const SingInForm: FC = () => {
  return (
    <div className={Styles.authorization__form}>
      <form className={Styles.authorization__form__item}>
        <div className={Styles.authorization__form__item__input}>
          <Input placeholder={"Логин *"} />
          <Input placeholder={"Пароль *"} />
        </div>
        <div className={Styles.authorization__form__item__forgot}>
          <CheckboxWithLabel title="Запомни меня" />
          <Link href={"/auth/forgot"}>Забыл пароль?</Link>
        </div>
        <Button children={"Войти"} />
      </form>
    </div>
  );
};

export { SingInForm };
