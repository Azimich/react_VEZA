import useHttp from "store/hooks/useHttp";

const useGetCertificatesItem = () => {
  const { request, loading, error } = useHttp();

  const getCertificatesItem = (url = "") => {
    return request(
      process.env.NEXT_PUBLIC_APP_FETCH +
        "/api/v1/produktsiya/get_certificates/" +
        url,
      "GET",
    );
  };

  return { getCertificatesItem, loading, error };
};

export { useGetCertificatesItem };
