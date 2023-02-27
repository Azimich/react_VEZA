import Styles from "./InDevelopmentContainer.module.scss";
import React from "react";
import { Link } from "components/link";
import { Button } from "components/button";
import { Container } from "components/common/container";

const InDevelopmentContainer = () => {
  return (
    <Container className="wrapper_clear">
      <div className={Styles.development}>
        <img src={"/images/dev.jpg"} alt={"development"} />
        <div className={Styles.development__info}>
          <h1>
            <p>Страница</p> находится в разработке
          </h1>
          <Link url={"/"}>
            <Button theme={"industries"} children={"Главная"} />
          </Link>
        </div>
      </div>
    </Container>
  );
};

export { InDevelopmentContainer };
