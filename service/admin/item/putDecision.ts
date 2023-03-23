import useHttp from "store/hooks/useHttp";

const usePutDecision = () => {
  const { request, loading, error } = useHttp();

  const putDecision = async (
    alias: string,
    description: string,
    toggle: () => void,
    shortDescription: string,
    title: string,
    seoTitle: string,
    seoMetaH1: string,
    seoDescription: string,
    seoKeyword: string,
    imageUrl: any,
  ) => {
    const fd = new FormData();
    fd.append("alias", alias);
    fd.append("description", description);
    fd.append("shortDescription", shortDescription);
    fd.append("title", title);
    fd.append("seoTitle", seoTitle);
    fd.append("seoMetaH1", seoMetaH1);
    fd.append("seoDescription", seoDescription);
    fd.append("seoKeyword", seoKeyword);
    // fd.append("imageUrl", imageUrl);
    const blob = await fetch(imageUrl).then((response) => response.blob());
    fd.append("image", blob);

    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/put_industry_info",
      "PUT",
      fd,
      {},
    );
  };

  return { putDecision, loading, error };
};

export { usePutDecision };
