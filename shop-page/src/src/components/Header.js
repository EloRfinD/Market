import React from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import './shop.css'; // Стили для Header

export default function Header() {
  return (
    <header>
      <section className="notification">
        <p>СКИДКА 25% на первый заказ.</p>
        <p>Закажи сейчас.</p>
      </section>
      <section className="navigation">
        <div className="navigation_img">
          <img src="\images\Logo.svg" alt="Логотип" />
        </div>
        <nav>
          <ul>
            <li><Link to="/home">Главная</Link></li>
            <li>
              Категории
              <img src="\images\Vector.svg" alt="Стрелочка" className="image_category" />
            </li>
            <li><Link to="/about">О Нас</Link></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
        <section className='form_nav'><form id="search">
          <input type="text" id="search_bar" placeholder="Найти"/>
        </form>
        </section>
      </section>
    </header>
  );
}
