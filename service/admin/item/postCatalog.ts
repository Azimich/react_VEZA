import useHttp from "store/hooks/useHttp";

const usePostCatalog = () => {
  const { request, loading, error } = useHttp();

  const postCatalog = async (fd: FormData) => {
    const result = request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/create_catalogue",
      "POST",
      fd,
      {},
    );
    return result;
  };

  return { postCatalog, loading, error };
};

export { usePostCatalog };
