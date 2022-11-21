import { useCallback, useState } from "react";

const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | boolean>(false);

  const request = useCallback(
    async (
      url: string,
      method = "GET",
      body = null,
      headers = {
        "Content-Type": "application/json;charset=utf-8",
      }
    ) => {
      setLoading(true);
      try {
        const response = await fetch(url, { method, body, headers });
        const data = await response.json();

        if (!response.ok) {
          setError(data.message);
        }
        setLoading(false);

        return data;
      } catch (e) {
        setLoading(false);
        setError(e.message);
      }
    },
    []
  );

  return { request, loading, error };
};

export default useHttp;
