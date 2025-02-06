import { useState, useEffect } from 'react';

export default function useServerGoods(initialPageSize = 10) {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  useEffect(() => {
    const controller = new AbortController();
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`/api/movies/?page=${page}&page_size=${pageSize}`, {
          signal: controller.signal,
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies((prev) => [...prev, ...data.results]);
      } catch (e) {
        if (e.name === 'AbortError') return;
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    return () => controller.abort();
  }, [page, pageSize]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return { movies, error, loading, loadMore };
}