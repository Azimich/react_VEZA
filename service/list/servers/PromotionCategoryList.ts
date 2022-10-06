import { FetchService } from "../../Service";

const PromotionCategoryList = async () => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_URL + "api/category_blocks"
  );
};

export { PromotionCategoryList };