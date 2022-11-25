import { Container } from "components/common/container";
import Styles from "features/page404/Page404Item.module.scss";
import { NotFoundIcon } from "components/icons";
import React from "react";

const Page404Container = () => {
  return (
    <Container className={"wrapper"}>
      <div className={Styles.container__404}>
        <NotFoundIcon />
      </div>
    </Container>
  );
};

export { Page404Container };
