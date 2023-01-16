import { FC, useEffect } from "react";
import { FormNews } from "features/news/action/Form";
import { useAppSelector } from "store/hooks";
import { getAuth } from "features/auth/AuthSlice";
import { useRouter } from "next/router";
import { SingInPath } from "utils/bootstrap";

const AddNews: FC = () => {
  const auth = useAppSelector(getAuth);
  const router = useRouter();

  useEffect(() => {
    auth.identify &&
      !auth.data &&
      auth.data?.response.role !== 1 &&
      router.push(SingInPath);
  }, [auth.identify]);

  return (
    <div>{auth.identify && auth.data?.response.role === 1 && <FormNews />}</div>
  );
};

export { AddNews };
