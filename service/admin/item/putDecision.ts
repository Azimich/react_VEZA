import useHttp from "store/hooks/useHttp";

const usePutDecision = () => {
  const { request, loading, error } = useHttp();

  const putDecision = async (
    alias: string,
    description: string,
    toggle: () => void,
    shortDescription: string,
    title: string,
    seo: string,
    image: any,
  ) => {
    // const req = {
    //   alias: alias,
    //   description: description,
    //   shortDescription: shortDescription,
    // };
    const fd = new FormData();
    fd.append("alias", alias);
    fd.append("title", title);
    fd.append("description", description);
    fd.append("shortDescription", shortDescription);
    fd.append("seo", seo);
    fd.append("image", image);

    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/put_industry_info",
      "PUT",
      fd,
    );
  };

  return { putDecision, loading, error };
};

export { usePutDecision };
