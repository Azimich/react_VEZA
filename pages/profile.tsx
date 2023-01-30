import { GetStaticProps } from "next";
import { wrapper } from "store/store";
import { ProfileContainer } from "features/profile/ProfileContainer";

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  () => async () => {
    return {
      props: {},
      revalidate: 10,
    };
  },
);

const Profile = () => <ProfileContainer />;

export default Profile;
