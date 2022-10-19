import { FC } from "react";
import Styles from "./OwnObject.module.scss";
import { IOwnObjects } from "../../features/decision/Decision";

const OwnObjectItem: FC<IOwnObjects> = ({
  titleObject,
  titleDeliveryObject,
  image,
  deliveryProducts,
  address,
  slide_position,
}) => {
  const slide_class = `col${slide_position}`;

  return (
    <li className={Styles[slide_class]}>
      <img src={image} alt="ФОто" />
      <div className={Styles.object__slider}>
        <span>
          <p className={Styles.title}>{titleObject}</p>
          <p className={Styles.address}>{address}</p>
          <p className={Styles.sub__title}>{titleDeliveryObject}</p>
          {deliveryProducts.map((data) => {
            return <p>{data.name}</p>;
          })}
        </span>
      </div>
    </li>
  );
};

export { OwnObjectItem };
