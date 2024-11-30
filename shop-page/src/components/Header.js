import React from 'react';
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
            <li><a href="#">Главная</a></li>
            <li>
              Категории
              <img src="\images\Vector.svg" alt="Стрелочка" className="image_category" />
            </li>
            <li><a href="#">О Нас</a></li>
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
