import { IBreadCrumbs } from "components/breadcrumbs/BreadCrumbs.d";
import { ArrowDownIcon } from "components/icons";
import { Link } from "components/link";
import { FC } from "react";
interface IBreadCrumbsProps {
  data: IBreadCrumbs;
  last: boolean;
}

const BreadCrumbsItem: FC<IBreadCrumbsProps> = ({ data, last }) => {
  return (
    <>
      <li>
        {!last ? <Link url={data.alias}>{data?.title}</Link> : data?.title}
        {!last && (
          <span>
            <ArrowDownIcon />
          </span>
        )}
      </li>
    </>
  );
};
export { BreadCrumbsItem };
