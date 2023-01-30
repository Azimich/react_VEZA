import React from "react";

interface IHeaderIconMenu {
  url: string;
  name: string;
  ext: number;
  svg: React.SFC<React.SVGProps<SVGSVGElement>>;
}

export { IHeaderIconMenu };
