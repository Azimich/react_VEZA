import { Accordeon } from "../../../components/accordeon";
import { SpecificationTable1 } from "./SpecificationTable1";

const SpecificationContainer = () => {
  return (
    <div>
      <Accordeon title={"Название таблицы"} icon_show={false}>
        <SpecificationTable1 />
      </Accordeon>
    </div>
  );
};

export { SpecificationContainer };
