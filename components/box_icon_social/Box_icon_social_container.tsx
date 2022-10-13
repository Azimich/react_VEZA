import Styles from "./Box_icon_social.module.scss";
import { PhoneFooterIcon, TelegaIcon, VkIcon, YouTubeIcon } from "../icons";

const Box_icon_social_container = () => {
  return (
    <section className={Styles.banner}>
      <div className={Styles.banner__icon_box}>
        <a
          href={`tel:${process.env.NEXT_PUBLIC_PHONE}`}
          className={`${Styles.banner__icon} ${Styles.telega}`}
        >
          <TelegaIcon />
        </a>
        <a
          href="https://vk.com/veza_official"
          className={`${Styles.banner__icon} ${Styles.vk}`}
        >
          <VkIcon />
        </a>
        <a
          href="https://www.youtube.com/channel/UCsNlnQ7uhAc_cOgHJPYMnRQ"
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
