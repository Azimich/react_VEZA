import { FC } from "react";
import Styles from "./About.module.scss";
import { IImages } from "types/response";

interface IAboutItem {
  title: string;
  description: string;
  images: IImages;
}

const AboutItems: FC<IAboutItem> = ({ title, description, images }) => {
  return (
    <div className={Styles.card_user_item}>
      <div className={Styles.card_user_item_img}>
        <img src={images.pc} alt={title} />
      </div>
      <div className={Styles.card_user_item_details}>
        <h4 className={Styles.title}>{title}</h4>
        <p className={Styles.info}>{description}</p>
      </div>
    </div>
  );
};

export { AboutItems };
