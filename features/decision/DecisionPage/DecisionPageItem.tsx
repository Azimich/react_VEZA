import { FC, useEffect, useState } from "react";
import Styles from "./DecisionPage.module.scss";
import { IDecisionData } from "../Decision";

interface IDecision {
  data: IDecisionData[];
}

const DecisionPageItem: FC<IDecision> = ({ data }) => {
  const [dataPage, setDataPage] = useState<IDecisionData>();
  useEffect(() => {
    data?.length > 0 && setDataPage(data.shift());
  }, [data]);

  return (
    <div className={Styles.Decision_container}>
      <div className={Styles.Decision_container_img}>
        <img src={dataPage?.image} alt="Фото" />
      </div>
      <div className={Styles.Decision_container_info}>
        <h1>{dataPage?.title}</h1>
        <p>{dataPage?.description_full}</p>
      </div>
    </div>
  );
};

export { DecisionPageItem };
