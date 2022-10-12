import Styles from "./News.module.scss";
import { FC } from "react";
import { INewsProps } from "./News";
import { ArrowRightIcon, EyeIcon } from "../../../components/icons";
import Link from "next/link";

interface INewsItemProps {
  className: string;
  props: INewsProps;
}

const NewsItem: FC<INewsItemProps> = ({ className, props }) => {
  return (
    <div className={Styles[className]}>
      <div className={Styles.news__item}>
        <div className={Styles.news__item_left}>
          <div className={Styles.news__counter_icon}>
            <EyeIcon />
            {props.countView}
          </div>
          <img src={props.img} alt="foto" />
        </div>
        <div className={Styles.news__item_info}>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            placeat officia totam, laudantium rerum assumenda maxime velit
            blanditiis! Beatae quod nobis optio voluptatem, ipsum quas veniam
            hic est incidunt cupiditate?
          </p>
          <Link href={props.url}>
            <a>
              Подробнее
              <ArrowRightIcon />
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};
export { NewsItem };
