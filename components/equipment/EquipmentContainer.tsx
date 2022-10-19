import { Container } from "../common/container";
import { FC } from "react";
import { IEquipmentData } from "./Equipment";
import Styles from "./Equipment.module.scss";
import { EquipmentItem } from "./EquipmentItem";
interface IEquipmentProps {
  props: IEquipmentData[];
}
const EquipmentContainer: FC<IEquipmentProps> = ({ props }) => {
  return (
    <Container className={"wrapper"}>
      <div className={Styles.equipment_container}>
        {props.map((e, i) => {
          return <EquipmentItem {...e} key={i} />;
        })}
      </div>
    </Container>
  );
};
export { EquipmentContainer };
