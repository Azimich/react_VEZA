import { FC } from "react";
import { IReferencesImages } from "./References";
import Styles from "./References.module.scss";

const ReferencesItem: FC<IReferencesImages> = (props) => {
  return (
    <div className={Styles.image_block} onClick={() => props.onClick(props)}>
      <div className={Styles.image_block}>
        <img src={props.image} alt={props.title} />
      </div>
      <p>{props.title}</p>
    </div>
  );
};
export { ReferencesItem };
