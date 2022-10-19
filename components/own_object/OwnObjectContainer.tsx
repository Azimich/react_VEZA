import { ownObjects } from "features/decision/MockData";
import Styles from "./OwnObject.module.scss";
import { OwnObjectItem } from "./OwnObjectItem";

const OwnObjectContainer = () => {
  return (
    <ul className={Styles.container}>
      {ownObjects.map((e) => {
        return <OwnObjectItem {...e} key={e.slide_position} />;
      })}
    </ul>
  );
};

export { OwnObjectContainer };
