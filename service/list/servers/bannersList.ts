import { FetchService } from "../../Service";

const BannersList = async () => {
  return await FetchService.getData(
    process.env.NEXT_PUBLIC_APP_URL + "api/banners"
  );
};

export { BannersList };
