import { Container } from "../common/container";
import { FC } from "react";
import Styles from "./Equipment.module.scss";
import { EquipmentItem } from "./EquipmentItem";
import { IEquipment } from "features/decision/Decision";

interface IEquipmentProps {
  props: IEquipment[];
  alias: string;
}

const EquipmentContainer: FC<IEquipmentProps> = ({ props, alias }) => {
  return (
    <Container className={"wrapper"}>
      <div className={Styles.equipment_container}>
        {props.map((e, i) => {
          return <EquipmentItem {...e} key={i} aliasOtr={alias} />;
        })}
      </div>
    </Container>
  );
};
export { EquipmentContainer };
