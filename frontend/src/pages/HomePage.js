import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div>
      <h1>Главная страница (Кино-Магазин)</h1>
      <p>Добро пожаловать!</p>
      <Link to="/login">Войти</Link>
    </div>
  );
}