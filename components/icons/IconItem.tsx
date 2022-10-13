import Link from "next/link";
import Styles from "../common/header/Header.module.scss";
import { FC } from "react";
import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
interface IHeaderIconProps {
  url: string;
  children: ReactJSXElement;
  className: string;
}
const IconItem: FC<IHeaderIconProps> = ({ url, children, className }) => {
  return (
    <Link href={url}>
      <a className={Styles[className]}>{children}</a>
    </Link>
  );
};
export { IconItem };
