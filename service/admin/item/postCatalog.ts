import useHttp from "store/hooks/useHttp";

const usePostCatalog = () => {
  const { request, loading, error } = useHttp();

  const postCatalog = async (fd: FormData) => {
    const result = request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/create_catalogue",
      "POST",
      fd,
      {
        "Content-Type": "multipart/form-data",
        Accept: "application/json, application/xml, text/plain, text/html, *.*",
      },
    );
    console.log("+++", await result);
    return result;
  };

  return { postCatalog, loading, error };
};

export { usePostCatalog };
