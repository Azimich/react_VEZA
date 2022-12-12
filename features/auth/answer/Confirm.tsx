import React, { ReactNode, useEffect, useState } from "react";
import { Container } from "components/common/container";
import Styles from "./Answer.module.scss";
import { SpinnerLoading } from "components/spinners";
import { useAuth } from "service/auth/auth";
import { useRouter } from "next/router";
import { Error, Success } from "features/auth";

const Confirm = () => {
  const { Confirm } = useAuth();
  const router = useRouter();
  const [context, setContext] = useState<ReactNode>(
    <>
      <p>Идет обработка данных...</p>
      <div>
        <SpinnerLoading />
      </div>
    </>,
  );

  useEffect(() => {
    router.query.token &&
      Confirm(router.query.token as string, router.query.login as string).then(
        (data) => {
          console.log("data", data);
          data?.hasError
            ? setContext(<Error {...data} />)
            : setContext(<Success {...data} />);
        },
      );
  }, [router.query.token]);

  return (
    <Container className={`wrapper_clear ${Styles.block_container}`}>
      <div className={Styles.answer_container}>{context}</div>
    </Container>
  );
};

export { Confirm };
