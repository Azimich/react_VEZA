import React from "react";
import { FC } from "react";
import Styles from "./SearchModal.module.scss";
import { Button } from "components/button";
import { Input } from "components/input/InputContainer";
import { SearchInputIcon } from "components/icons/includes/SearchInputIcon";
import { CloseIcon } from "components/icons";

const SearchModal: FC = () => {
  const [inputValue, setInputValue] = React.useState<string>();
  const handleOnChangeSearch = (event: any) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={Styles.search}>
      <div className={Styles.search__content}>
        <img
          className={Styles.search__logo}
          src="/images/logo.svg"
          alt="Logo"
        />
        <div className={Styles.search__items}>
          <div className={Styles.search__items__input}>
            <Input
              value={inputValue}
              type={"text"}
              onChange={(event) => handleOnChangeSearch(event)}
              name={"search_catalog"}
              placeholder={"Поиск"}
              className={Styles.input_field}
            />
            <SearchInputIcon />
            {inputValue && (
              <span onClick={() => setInputValue("")} className={Styles.clear}>
                <CloseIcon />
              </span>
            )}
          </div>
        </div>
        <div className={Styles.search__items__info}>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            fuga repudiandae. Nulla, possimus? Facilis, recusandae. Dolorum a
            reiciendis repudiandae sequi enim rem ratione, totam, quaerat
            eligendi, deserunt voluptates exercitationem porro?
          </p>
        </div>
        <div className={Styles.search__items__info}>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            fuga repudiandae. Nulla, possimus? Facilis, recusandae. Dolorum a
            reiciendis repudiandae sequi enim rem ratione, totam, quaerat
            eligendi, deserunt voluptates exercitationem porro?
          </p>
        </div>
        <div className={Styles.search__items__info}>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            fuga repudiandae. Nulla, possimus? Facilis, recusandae. Dolorum a
            reiciendis repudiandae sequi enim rem ratione, totam, quaerat
            eligendi, deserunt voluptates exercitationem porro?
          </p>
        </div>
        <div className={Styles.search__items__info}>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            fuga repudiandae. Nulla, possimus? Facilis, recusandae. Dolorum a
            reiciendis repudiandae sequi enim rem ratione, totam, quaerat
            eligendi, deserunt voluptates exercitationem porro?
          </p>
        </div>
        <div className={Styles.search__items__info}>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            fuga repudiandae. Nulla, possimus? Facilis, recusandae. Dolorum a
            reiciendis repudiandae sequi enim rem ratione, totam, quaerat
            eligendi, deserunt voluptates exercitationem porro?
          </p>
        </div>
        <div className={Styles.search__items__info}>
          <h1>Hello World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugit,
            fuga repudiandae. Nulla, possimus? Facilis, recusandae. Dolorum a
            reiciendis repudiandae sequi enim rem ratione, totam, quaerat
            eligendi, deserunt voluptates exercitationem porro?
          </p>
        </div>
        <Button children={"Показать ещё"} />
      </div>
    </div>
  );
};

export { SearchModal };
