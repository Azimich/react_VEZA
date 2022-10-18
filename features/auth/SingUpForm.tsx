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
          <Input />
          <Input placeholder={"gtueiu"} />
        </div>
        <div className={Styles.registration__form__item}>
          <Input />
          <Input />
        </div>
        <div className={Styles.registration__form__item}>
          <Input />
          <Input />
        </div>
        <div className={Styles.registration__form__job}>
          <Input />
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
          <Input />
          <Input />
        </div>
        <div className={Styles.registration__form__item__forgot}>
          <CheckboxWithLabel />
        </div>
        <Button />
      </form>
    </div>
  );
};

export { SingUpForm };
