import { useEffect, useState } from "react";

async function request(url?: string) {
  const response = await fetch(
    `${process.env.REACT_APP_REMOTE_JSON_URL}/${url}`
  );
  return response.json();
}

type RequestStateType<T> = {
  loading: boolean;
  error: boolean;
  value?: T;
};

export default function useRemoteJson<T>(
  file?: string,
  init?: T
): [T | undefined, boolean, boolean] {
  const [data, setData] = useState<RequestStateType<T>>({
    loading: false,
    error: false,
    value: init,
  });

  useEffect(() => {
    const handleFetch = async () => {
      setData((current) => ({ ...current, loading: true }));
      const result = await request(file);
      setData((current) => ({ ...current, loading: false, value: result }));
    };

    handleFetch();
  }, [file]);

  return [data.value, data.loading, data.error];
}
