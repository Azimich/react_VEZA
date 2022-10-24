import { Accordeon } from "../../../components/accordeon";
import { SpecificationTable1 } from "./SpecificationTable1";
import { SpecificationTable2 } from "./SpecificationTable2";

const SpecificationContainer = () => {
  return (
    <div>
      <Accordeon title={"Название таблицы"} icon_show={false}>
        <SpecificationTable1 />
      </Accordeon>
      <Accordeon title={"Название таблицы"} icon_show={false}>
        <SpecificationTable2 />
      </Accordeon>
    </div>
  );
};

export { SpecificationContainer };
