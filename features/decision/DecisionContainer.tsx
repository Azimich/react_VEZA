import { decisionData } from "./MockData";

const DecisionContainer = () => {
  console.log("decisionData", decisionData);
  return (
    <div>
      <img src={"/images/industry_banner.jpg"} />
    </div>
  );
};
export { DecisionContainer };
