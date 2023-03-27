import useHttp from "store/hooks/useHttp";

const useDeleteProduct = () => {
  const { request, loading, error } = useHttp();

  const deleteProduct = (alias = "") => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/administrator/send_equipment_to_archive/" +
        alias,
      "DELETE",
    );
  };

  return { deleteProduct, loading, error };
};

export { useDeleteProduct };
