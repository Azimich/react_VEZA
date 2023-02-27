import { IInterationDirector } from "./Interaction";
import { FC } from "react";
import Styles from "./Interaction.module.scss";
import { EmailIcon, PhoneFooterIcon } from "components/icons";

const InteractionDirector: FC<IInterationDirector> = ({
  title = "",
  description = "",
  mail = "",
  phone = "",
}) => {
  return (
    <li
      className={`${Styles.interaction_items_item} ${Styles.interaction_items_item_director}`}
    >
      <h3>{title}</h3>
      <div className={Styles.info}>
        <p>{description}</p>
        <p>
          <EmailIcon />
          {mail}
        </p>
        <p>
          <span className={Styles.svg__phone}>
            <PhoneFooterIcon />
          </span>
          {phone}
        </p>
      </div>
    </li>
  );
};

export { InteractionDirector };
