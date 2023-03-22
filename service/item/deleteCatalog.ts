import useHttp from "store/hooks/useHttp";

const useDeleteCatalog = () => {
  const { request, loading, error } = useHttp();

  const deleteCatalog = (id = 0) => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/delete_catalogue/" +
        id,
      "DELETE",
    );
  };

  return { deleteCatalog, loading, error };
};

export { useDeleteCatalog };
