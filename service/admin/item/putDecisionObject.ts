import useHttp from "store/hooks/useHttp";

const usePutDecisionObject = () => {
  const { request, loading, error } = useHttp();

  const putDecisionObject = async (
    toggle: () => void,
    address: string,
    alias: string | string[],
    title: string,
    imageUrl: any,
    industryObjectId: number | any,
    slidePosition?: number | any,
  ) => {
    const fd = new FormData();
    fd.append("title", title);
    fd.append("address", address);
    // @ts-ignore
    fd.append("alias", alias);
    const blob = await fetch(imageUrl).then((response) => response.blob());
    fd.append("image", blob);
    fd.append("objectId", industryObjectId);
    fd.append("slidePosition", slidePosition);

    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/put_industry_object",
      "PUT",
      fd,
      {},
    );
  };

  return { putDecisionObject, loading, error };
};

export { usePutDecisionObject };
