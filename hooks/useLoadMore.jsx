import { useEffect, useState } from "react";

export default function useLoadMore(data, defaultURL) {
  const [page, setPage] = useState(1);
  const [results, setResults] = useState(data);
  const [isTheLastPage, setIsTheLastPage] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  const loadMore = () => setPage(page + 1);

  const url = `${defaultURL}&page=${page}`;

  useEffect(() => {
    setIsLoading(true);
    let mounted = true;

    const fetchData = async (url) => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (mounted) {
          setResults((prevResults) => [...prevResults, ...data.results]);
          setIsTheLastPage(page > data.pages - 1);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
        setResults((prevResults) => [...prevResults]);
        setIsTheLastPage(true);
        setIsLoading(false);
      }
    };

    fetchData(url);

    return () => (mounted = false);
  }, [page, url]);

  return [isLoading, isTheLastPage, results, loadMore];
}
