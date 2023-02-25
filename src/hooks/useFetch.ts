import { useEffect, useState } from "react";

export function useFetch<T>(funcApi: Promise<T>) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<any>();
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      try {
        const res = await funcApi;
        setData(res);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };

    fetch().then();
  }, []);

  return {
    data,
    error,
    loading,
  };
}
