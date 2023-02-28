import Styles from "./Box_icon_social.module.scss";
import { PhoneFooterIcon, TelegaIcon, VkIcon, YouTubeIcon } from "../icons";

const Box_icon_social_container = () => {
  return (
    <section className={Styles.banner}>
      <div className={Styles.banner__icon_box}>
        <a
          href={process.env.NEXT_PUBLIC_TELEGA}
          target={"_blank"}
          className={`${Styles.banner__icon} ${Styles.telega}`}
        >
          <TelegaIcon />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_VK}
          target={"_blank"}
          className={`${Styles.banner__icon} ${Styles.vk}`}
        >
          <VkIcon />
        </a>
        <a
          href={process.env.NEXT_PUBLIC_YOUTUBE}
          target={"_blank"}
          className={`${Styles.banner__icon} ${Styles.ok__ru}`}
        >
          <YouTubeIcon />
        </a>
        <a
          href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
          rel="nofollow"
          className={Styles.btn_call}
        >
          <div className={Styles.btn_call__ico}>
            <PhoneFooterIcon />
          </div>
        </a>
      </div>
    </section>
  );
};

export { Box_icon_social_container };
