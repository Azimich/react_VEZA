import useHttp from "store/hooks/useHttp";

const useGetListFactory = () => {
  const { request, loading, error } = useHttp();

  const listFactoryData = () => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH + "/api/Company/get_plant",
      "GET",
    );
  };

  return { listFactoryData, loading, error };
};

export { useGetListFactory };
