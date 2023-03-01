import Styles from "./Job.module.scss";
import { IJob } from "./Job";
import { FC } from "react";
import { Link } from "components/link";

const JobItem: FC<IJob> = ({
  title,
  description,
  country,
  city,
  district,
  url,
}) => {
  return (
    <li>
      <div>
        <div className={Styles.title}>{title}</div>
        <div className={Styles.address}>
          {country + ", " + district + ", " + city}
        </div>
        <div className={Styles.desc}>{description}</div>
      </div>
      <div className={Styles.button__job}>
        <Link target={"_blank"} url={url}>
          Узнать больше
        </Link>
      </div>
    </li>
  );
};
export { JobItem };
