import Styles from "./Tabs.module.scss";
import { FC } from "react";
import { ITabs } from "./Tabs.d";

const Tabs: FC<ITabs[]> = (props) => {
  console.log(props);

  return (
    <div className={Styles.tabs__container}>
      <ul className={Styles.tabs__container__menu}>
        {props.length > 0 &&
          props.map((e) => {
            console.log("888", e);
          })}
      </ul>
      <div className={Styles.tabs__container__line}></div>
    </div>
  );
};

export { Tabs };
