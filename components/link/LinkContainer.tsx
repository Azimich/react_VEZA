import React, { FC, ReactNode } from "react";
import Link from "next/link";

interface ILink {
  children: ReactNode;
  url: string;
  classLink?: string;
}
const LinkContainer: FC<ILink> = ({ children, url = "", classLink = "" }) => {
  return (
    <Link href={url} as={url}>
      <a className={classLink}>{children}</a>
    </Link>
  );
};

export { LinkContainer };
