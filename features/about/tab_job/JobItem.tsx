import Styles from "./Job.module.scss";
import { IMockJob } from "./Job";
import { FC } from "react";
import { Button } from "components/button";

const JobItem: FC<IMockJob> = ({ url_hh, address, desc, title }) => {
  return (
    <li>
      <div>
        <div className={Styles.title}>{title}</div>
        <div className={Styles.address}>{address}</div>
        <div className={Styles.desc}>{desc}</div>
      </div>
      <div>
        <Button link={url_hh}>Узнать больше</Button>
      </div>
    </li>
  );
};
export { JobItem };
