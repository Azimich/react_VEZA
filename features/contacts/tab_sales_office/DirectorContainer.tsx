import React from "react";
import { sallesOfficeData } from "./mockData";
import Styles from "../Contacts.module.scss";
import { ISalles } from "./SalesOffice";

const DirectorContainer = () => {
  // const [currentDirector, setCurrentDirector] = React.useState(() => sallesOfficeData.filter((e: ISalles) => e.code = "director"));

  const directorsItems = sallesOfficeData.filter(
    (e: ISalles) => e.items?.shift()?.type_code === "director"
  );

  console.log();

  return (
    <div className={Styles.director}>
      <div className={Styles.director__items}>
        <div className={Styles.director__item}>
          <div className={Styles.director__item__img}>
            <img src="" alt="" />
          </div>
          <div className={Styles.director__item__info}>
            <h3></h3>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DirectorContainer };
