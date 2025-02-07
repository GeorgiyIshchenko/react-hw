import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.substring(0, name.length + 1) === (name + '=')) {
          cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookieValue;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const csrftoken = getCookie('csrftoken');  // Get CSRF token from cookies

    try {
      const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken // Include CSRF token in the headers
        },
        body: JSON.stringify({ username, password }),
      });
      
      if (response.ok) {
        localStorage.setItem('isAuth', 'true');
        navigate('/products');
      } else {
        alert('Неверные учетные данные');
      }
    } catch (error) {
      alert('Ошибка соединения с сервером');
    }
  };

  return (
    <div>
      <h1>Страница входа</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Логин</label>
          <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div>
          <label>Пароль</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <button type="submit">Войти</button>
      </form>
    </div>
  );
}