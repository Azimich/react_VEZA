import { Container } from "../../../components/common/container";
import { FC } from "react";
import { Description_Images } from "./Images";
import { Button } from "../../../components/button";
import Styles from "./Description.module.scss";
import { Accordeon } from "../../../components/accordeon";
import { DescriptionTable } from "./DescriptionTable";

const DescriptionContainer: FC = () => {
  const handleButtonClick = () => {
    console.log("1111");
  };
  return (
    <Container className={"wrapper"}>
      <Description_Images />
      <div className={Styles.button}>
        <Button
          theme={"news"}
          size={"small"}
          onClick={() => handleButtonClick()}
        >
          Документация
        </Button>
      </div>
      <Accordeon title={"Название таблицы"} icon_show={true}>
        <DescriptionTable />
      </Accordeon>
    </Container>
  );
};
export { DescriptionContainer };
