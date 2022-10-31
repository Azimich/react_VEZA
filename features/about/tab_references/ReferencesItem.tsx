import { FC } from "react";
import { IReferencesImages } from "./References";

const ReferencesItem: FC<IReferencesImages> = (props) => {
  return (
    <li onClick={() => props.onClick(props)}>
      <span>
        <img src={props.image} alt={props.title} />
      </span>
      <p>{props.title}</p>
    </li>
  );
};
export { ReferencesItem };
