import Styles from "./Achievements.module.scss";
import { AchievementsData } from "./mockData";
import { AchievementsItem } from "features/about";
import { FC } from "react";
const AchievementsContainer: FC = () => {
  return (
    <div className={Styles.achievements_container}>
      <ul className={Styles.achievements_container_ul}>
        {AchievementsData.map((e) => {
          return <AchievementsItem {...e} key={e.id} />;
        })}
      </ul>
    </div>
  );
};
export { AchievementsContainer };
