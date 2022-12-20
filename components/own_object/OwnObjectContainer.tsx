import Styles from "./OwnObject.module.scss";
import { FC } from "react";
import { IObjects } from "../../types/response";

const OwnObjectContainer: FC<IObjects> = ({ title }) => {
  console.log("11123", title);
  return (
    <ul className={Styles.container}>
      {/*
      {ownObjects.map((e) => {
        return <OwnObjectItem {...e} key={e.slide_position} />;
      })}
*/}
    </ul>
  );
};

export { OwnObjectContainer };
