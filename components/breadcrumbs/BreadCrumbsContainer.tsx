import Styles from "./BreadCrumbs.module.scss";
import { Container } from "components/common/container";
import { FC } from "react";
import { IBreadCrumbs } from "components/breadcrumbs/BreadCrumbs.d";
import { BreadCrumbsItem } from "components/breadcrumbs/BreadCrumbsItem";
import { HomeIcon } from "components/icons";
import { Link } from "components/link";

interface IBreadCrumbsProps {
  data: IBreadCrumbs[];
}

const BreadCrumbsContainer: FC<IBreadCrumbsProps> = ({ data }) => {
  return (
    <Container
      el={"section"}
      className={`wrapper_clear ${Styles.breadcrumbs_container}`}
      clean={true}
    >
      <ul>
        <li>
          <Link url={process.env.NEXT_PUBLIC_APP_URL}>
            <HomeIcon />
            Главная:
          </Link>
        </li>
        {data.map((e, i) => {
          return (
            <BreadCrumbsItem data={e} key={i} last={data.length === i + 1} />
          );
        })}
      </ul>
    </Container>
  );
};

export { BreadCrumbsContainer };
