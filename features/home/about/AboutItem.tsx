import Link from "next/link";
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
  ImgClassName = "",
  LinkClassName = "",
}) => {
  return (
    <Link href={""} key={keyLink}>
      <a className={`${Styles.tile} ${Styles[LinkClassName]}`}>
        <img src={img} alt={alt} className={Styles[ImgClassName]} />
        <div className={Styles.details}>
          <span className={Styles.title}>{title}</span>
          <span className={Styles.info}>{desc}</span>
        </div>
      </a>
    </Link>
  );
};

export { AboutItems };