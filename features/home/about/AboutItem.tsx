import { FC } from "react";
import Styles from "./About.module.scss";
import { IImages } from "types/response";

interface IAboutItem {
  title: string;
  description: string;
  images: IImages;
  img: string;
  desc: string;
}

const AboutItems: FC<IAboutItem> = ({ title, img, desc }) => {
  return (
    <div className={Styles.card_user_item}>
      <div className={Styles.card_user_item_img}>
        <img src={img} alt={title} />
      </div>
      <div className={Styles.card_user_item_details}>
        <h4 className={Styles.title}>{title}</h4>
        <p className={Styles.info}>{desc}</p>
      </div>
    </div>
  );
};

export { AboutItems };
