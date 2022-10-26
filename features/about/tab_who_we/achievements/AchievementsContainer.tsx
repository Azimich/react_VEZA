import Styles from "./Achievements.module.scss";
import { AchievementsData } from "./mockData";
import { AchievementsItem } from "./AchievementsItem";
import { FC } from "react";
const AchievementsContainer: FC = () => {
  return (
    <div className={Styles.achievements_container}>
      <ul className={Styles.achievements_container}>
        {AchievementsData.map((e) => {
          return <AchievementsItem {...e} />;
        })}
      </ul>
    </div>
  );
};
export { AchievementsContainer };
