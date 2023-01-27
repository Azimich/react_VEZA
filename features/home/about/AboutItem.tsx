import { FC } from "react";
import Styles from "./About.module.scss";

interface AboutItem {
  LinkClassName: string;
  title: string;
  desc: string;
  keyLink: number;
  img: string;
  alt: string;
  ImgClassName: string;
}

const AboutItems: FC<AboutItem> = ({
  alt = "",
  keyLink = 0,
  img = "",
  title = "",
  desc = "",
}) => {
  return (
    <div key={keyLink} className={Styles.card_user}>
      <div className={Styles.card_user_item}>
        <div className={Styles.card_user_item_img}>
          <img src={img} alt={alt} />
        </div>
        <div className={Styles.card_user_item_details}>
          <h4 className={Styles.title}>{title}</h4>
          <p className={Styles.info}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export { AboutItems };
