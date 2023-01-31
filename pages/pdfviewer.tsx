import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { PdfViewer } from "features/resources/tab_certificates/certificates/PdfViewer";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  },
);

const Profile = () => <PdfViewer fileUrl={"/ex.pdf"} />;

export default Profile;
