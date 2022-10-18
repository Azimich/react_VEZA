import React, { FC } from "react";
import { useState } from "react";
import Select from "react-select";
import Styles from "../../features/auth/SignContainer.module.scss";
import { Input } from "../../components/input/Index";
import { CheckboxWithLabel } from "components/checkbox";
import { Button } from "components/button";

const SingUpForm: FC = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const options = [
    { value: "Россия", label: "Москва" },
    { value: "Казахстан", label: "Саратов" },
    { value: "Белорусия", label: "Астрахань" },
  ];

  return (
    <div className={Styles.registration__form}>
      <form className={Styles.registration__form__items}>
        <div className={Styles.registration__form__item}>
          <Input placeholder={"Имя *"} />
          <Input placeholder={"Фамилия *"} />
        </div>
        <div className={Styles.registration__form__item}>
          <Input placeholder={"Почта *"} />
          <Input placeholder={"Телефон *"} />
        </div>
        <div className={Styles.registration__form__item}>
          <Input placeholder={"ИНН компании *"} />
          <Input placeholder={"Дата рождения *"} />
        </div>
        <div className={Styles.registration__form__item}>
          <Input placeholder={"Укажите должность *"} />
        </div>
        <div className={Styles.registration__form__selected}>
          <Select
            className={Styles.registration__form__select}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
          <Select
            className={Styles.registration__form__select}
            defaultValue={selectedOption}
            onChange={setSelectedOption}
            options={options}
          />
        </div>
        <div className={Styles.registration__form__item}>
          <Input placeholder={"Пароль *"} />
          <Input placeholder={"Подтвердите пароль *"} />
        </div>
        <div className={Styles.registration__form__item__forgot}>
          <CheckboxWithLabel
            title={"Согласие на обработку персональных данных с условиями"}
          />
        </div>
        <Button children={"Зарегистрироваться"} />
      </form>
    </div>
  );
};

export { SingUpForm };
