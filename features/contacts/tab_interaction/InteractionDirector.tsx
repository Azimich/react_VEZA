import { IInterationDirector } from "./Interaction";
import { FC } from "react";
import Styles from "./Interaction.module.scss";

const InteractionDirector: FC<IInterationDirector> = ({
  title = "",
  description = "",
  imageUrl = "",
  mail = "",
  phone = "",
}) => {
  return (
    <li className={Styles.interaction_items_item}>
      <h2>{title}</h2>
      <img src={imageUrl} alt={title} />
      <p>{description}</p>
      <p>{mail}</p>
      <p>{phone}</p>
    </li>
  );
};

export { InteractionDirector };
