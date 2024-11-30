import React from 'react';
import './shop.css'; // Стили для Footer

export default function Footer() {
  return (
    <footer>
    <div className='footer'>
      <div className="footer-up">
        <div className="footer-section logo-section">
          <h2>LOGO</h2>
          <p>DevCut - это YouTube-канал для практического обучения на основе проектов.</p>
        </div>
        <div className="footer-sections">
          <div className="footer-section">
            <h3>ПОДДЕРЖКА</h3>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Условия использования</a></li>
              <li><a href="#">Политика Приватности</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>КОМПАНИЯ</h3>
            <ul>
              <li><a href="#">О Нас</a></li>
              <li><a href="#">Контакт</a></li>
              <li><a href="#">Вакансии</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>МАГАЗИН</h3>
            <ul>
              <li><a href="#">Личный Кабинет</a></li>
              <li><a href="#">Заказы</a></li>
              <li><a href="#">Корзина</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-section">
          <h3>ПРИЁМ ПЛАТЕЖЕЙ</h3>
          {/* Добавьте иконки способов оплаты, если нужно */}
        </div>
      </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 DevCut. Все права соблюдены.</p>
      </div>
    </footer>
  );
}
