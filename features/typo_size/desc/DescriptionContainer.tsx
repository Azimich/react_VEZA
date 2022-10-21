import { Container } from "../../../components/common/container";
import { FC } from "react";
import { Description_Images } from "./Images";

const DescriptionContainer: FC = () => {
  return (
    <Container className={"wrapper"}>
      <Description_Images />
    </Container>
  );
};
export { DescriptionContainer };
