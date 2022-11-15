import { FetchService } from "../../Service";

const giftList = async () => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_FETCH + "api/gifts"
  );
};

export { giftList };
