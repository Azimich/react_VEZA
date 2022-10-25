import { FC } from "react";
import { INewDataItem } from "./News";

const NewsItem: FC<INewDataItem> = ({ title }) => {
  console.log("title", { title });
  return <div>{title}</div>;
};

export { NewsItem };
