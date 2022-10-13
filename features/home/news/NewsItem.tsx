import Styles from "./News.module.scss";
import { FC } from "react";
import { INewsProps } from "./News";
import { ArrowRightIcon, EyeIcon } from "../../../components/icons";

import { Button } from "../../../components/button/Button";

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

          <Button link={props.url} theme={"news"} size={"context"}>
            <div>
              <span>Подробнее</span>
              <ArrowRightIcon />
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
};
export { NewsItem };
