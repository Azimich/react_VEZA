import { whoweabout } from "./mockData";
import Styles from "./WhoWeAbout.module.scss";

const WhoWeAboutContainer = () => {
  return (
    <div className={Styles.WhoweAbout_container}>
      <img src={whoweabout.image} alt={whoweabout.title} />
      <div className={Styles.WhoweAbout_container_about}>
        <h1 className={Styles.WhoweAbout_container_about_title}>
          {whoweabout.title}
        </h1>
        <div className={Styles.WhoweAbout_container_about_text}>
          {whoweabout.description}
        </div>
      </div>
    </div>
  );
};

export { WhoWeAboutContainer };
