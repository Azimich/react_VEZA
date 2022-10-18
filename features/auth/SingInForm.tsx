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
        <Input placeholder={"Логин*"} />
        <Input placeholder={"Пароль*"} />
        <div className={Styles.authorization__form__item__forgot}>
          <CheckboxWithLabel title="Запомни меня" />
          <Link href={"#"}>Забыл пароль?</Link>
        </div>
        <Button children={"Войти"} />
      </form>
    </div>
  );
};

export { SingInForm };
