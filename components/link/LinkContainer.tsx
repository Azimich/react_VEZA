import React, { FC, ReactNode } from "react";
import Link from "next/link";

interface ILink {
  children: ReactNode;
  url: string;
  classLink?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  download?: string;
  onClick?: (event: Event) => void;
  disabled?: boolean;
  className?: string;
}

const LinkContainer: FC<ILink> = ({
  children,
  url = "",
  classLink = "",
  target,
  download = "",
}) => {
  const downloader = download ? { download: download } : {};
  return (
    <Link href={url} as={url}>
      <a className={classLink} target={target} {...downloader}>
        {children}
      </a>
    </Link>
  );
};

export { LinkContainer };
