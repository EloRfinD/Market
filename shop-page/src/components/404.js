import React from 'react';
import { Link } from 'react-router-dom';
import './shop.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, запрашиваемая страница не существует.</p>
      <Link to="/" className="home-link">Вернуться на главную</Link>
    </div>
  );
}