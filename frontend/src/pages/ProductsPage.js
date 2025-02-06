import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useServerGoods from '../hooks/useServerGoods';

export default function ProductsPage() {
  const navigate = useNavigate();

  // Проверяем, залогинен ли пользователь
  useEffect(() => {
    const isAuth = localStorage.getItem('isAuth');
    if (!isAuth) {
      navigate('/login');
    }
  }, [navigate]);

  const { movies, error, loading, loadMore } = useServerGoods(10);

  if (loading && !movies.length) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>Ошибка соединения</div>;
  }

  return (
    <div>
      <h1>Список фильмов</h1>
      {movies.length ? (
        <table border="1">
          <thead>
            <tr>
              <th>Название</th>
              <th>Дата выпуска</th>
              <th>Цена</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie) => (
              <tr key={movie.id}>
                <td>{movie.title}</td>
                <td>{movie.release_date}</td>
                <td>{movie.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}

      {loading && <div>Загрузка...</div>}

      <button onClick={loadMore}>Загрузить больше</button>
    </div>
  );
}