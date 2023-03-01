import { FC } from "react";
import Styles from "./OwnObject.module.scss";
import { IObjects } from "../../types/response";

const OwnObjectItem: FC<IObjects> = ({
  title,
  // titleDelivery,
  imageUrl,
  categories,
  address,
  slidePosition,
}) => {
  const slide_class = `col${slidePosition}`;

  return (
    <li className={Styles[slide_class]}>
      <img src={imageUrl} alt="Фото" />
      <div className={Styles.object__slider}>
        <span>
          <p className={Styles.title}>{title}</p>
          <p className={Styles.address}>{address}</p>
          {/*<p className={Styles.sub__title}>{titleDelivery}</p>*/}
          {categories?.map((data, i) => {
            return <p key={i}>{data.title}</p>;
          })}
        </span>
      </div>
    </li>
  );
};

export { OwnObjectItem };
