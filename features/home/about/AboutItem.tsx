import { FC } from "react";
import Styles from "./About.module.scss";
import { IImages } from "types/response";

interface IAboutItem {
  title: string;
  description?: string;
  images?: IImages;
}
const AboutItems: FC<IAboutItem> = ({ title, description, images }) => {
  return (
    <div className={Styles.card_user_item}>
      <div className={Styles.card_user_item_img}>
        <img src={images.pc} alt={title} />
      </div>
      <div className={Styles.card_user_item_details}>
        <div className={Styles.title}>
          {title.split(" ").map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <span className={Styles.info}>{description}</span>
      </div>
    </div>
  );
};

export { AboutItems };
