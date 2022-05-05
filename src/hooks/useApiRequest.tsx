import { useQuery } from "react-query";

export const useApiRequest = (url: string) => {
  const { isLoading, data, isFetching } = useQuery(["event", url], async () => {
    const response = await fetch(url, {
      method: "get",
    });
    if (!response.ok) throw new Error(response.statusText);
    return await response.json();
  });

  return { data, isLoading, isFetching };
};
