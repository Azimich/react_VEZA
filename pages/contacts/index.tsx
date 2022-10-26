import { GetStaticProps } from "next";
import { wrapper } from "../../store/store";
import { Contacts } from "features/contacts";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  }
);

const ContactsSSR = (props: any) => <Contacts {...props} />;

export default ContactsSSR;
