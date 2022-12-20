import { FetchService } from "../../Service";

const decisionItem = async (alias = "") => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_FETCH +
      "/api/v1/decision/get_decision/" +
      alias,
  );
};

export { decisionItem };
