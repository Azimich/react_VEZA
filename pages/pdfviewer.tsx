import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { PdfViewer } from "features/resources/tab_certificates/certificates/PdfViewer";
import { fetchMenu } from "store/slice/MenuSlice";
import { menuListServer } from "service/index";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    store.dispatch(fetchMenu({ menuState: await menuListServer() }));
    return {
      props: {},
      revalidate: 10,
    };
  },
);

const Profile = () => <PdfViewer fileUrl={"/ex.pdf"} />;

export default Profile;
