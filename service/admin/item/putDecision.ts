import useHttp from "store/hooks/useHttp";

const usePutDecision = () => {
  const { request, loading, error } = useHttp();

  const putDecision = async (
    alias: string,
    description: string,
    toggle: () => void,
    shortDescription: string,
    title: string,
    imageUrl: any,
    seoTitle: string,
    seoMetaH1: string,
    seoDescription: string,
    seoKeyword: string,
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
    fd.append("seoTitle", seoTitle);
    fd.append("seoMetaH1", seoMetaH1);
    fd.append("seoDescription", seoDescription);
    fd.append("seoKeyword", seoKeyword);
    fd.append("imageUrl", imageUrl);

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
