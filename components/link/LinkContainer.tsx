import React, { FC, ReactNode } from "react";
import Link from "next/link";

interface ILink {
  children: ReactNode;
  url: string;
  classLink?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  download?: boolean;
}

const LinkContainer: FC<ILink> = ({
  children,
  url = "",
  classLink = "",
  target,
  download = false,
}) => {
  return (
    <Link href={url} as={url}>
      <a className={classLink} target={target} download={download}>
        {children}
      </a>
    </Link>
  );
};

export { LinkContainer };
