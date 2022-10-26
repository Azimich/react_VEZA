import { FC } from "react";
import { IAchievementsData } from "./Achievements";
import Styles from "./Achievements.module.scss";

const AchievementsItem: FC<IAchievementsData> = ({
  id,
  description,
  video,
  poster,
  name,
}) => {
  return (
    <li className={Styles.achievements_container_item}>
      <div className={Styles.achievements_container_item_video}>
        <video controls={true} preload="metadata" poster={poster} muted={true}>
          <source type="video/mp4" src={video} />
        </video>
      </div>
      <div className={Styles.info}>
        <h2>{name}</h2>
        <div className={Styles.info_desc}>{description}</div>
      </div>
    </li>
  );
};
export { AchievementsItem };
