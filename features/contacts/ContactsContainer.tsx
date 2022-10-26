import { Interaction, SalesOffice, Support } from "./index";
import { Container } from "../../components/common/container";

const ContactsContainer = () => {
  return (
    <Container className={"wrapper"}>
      Contacts OK
      <SalesOffice />
      <Interaction />
      <Support />
    </Container>
  );
};

export { ContactsContainer };
