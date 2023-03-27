import useHttp from "store/hooks/useHttp";

const usePutCatalog = () => {
  const { request, loading, error } = useHttp();

  const putCatalog = async (
    alias: string,
    toggle: () => void,
    seoTitle: string,
    seoMetaH1: string,
    seoDescription: string,
    seoKeyword: string,
  ) => {
    const fd = {
      alias: alias,
      seoTitle: seoTitle,
      seoMetaH1: seoMetaH1,
      seoDescription: seoDescription,
      seoKeyword: seoKeyword,
    };

    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/put_catalogue_seo",
      "PUT",
      JSON.stringify(fd),
    );
  };

  return { putCatalog, loading, error };
};

export { usePutCatalog };
