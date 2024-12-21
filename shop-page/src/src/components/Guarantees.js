import React from 'react';
import './shop.css'; // Стили для Guarantees

export default function Guarantees() {
  return (
    <section className="guarantee">
      <figure id="free">
        <img src="\images\Free.svg" alt="Бесплатная доставка" />
        <figcaption>
          <h3>Бесплатная Доставка</h3>
          <p>Измени свой стиль сегодня и получи БЕСПЛАТНУЮ доставку на все заказы! Не пропусти.</p>
        </figcaption>
      </figure>
      <figure id="quality">
        <img src="\images\Guarantee.svg" alt="Гарантия качества" />
        <figcaption>
          <h3>Гарантия Качества</h3>
          <p>Магазин гарантирует качество! Оцени его или сделай возврат.</p>
        </figcaption>
      </figure>
      <figure id="protection">
        <img src="\images\Secure.svg" alt="Платежи защищены" />
        <figcaption>
          <h3>Защищённые Платежи</h3>
          <p>Ваша безопасность - наша забота. Ваши платежи под нашей защитой.</p>
        </figcaption>
      </figure>
    </section>
  );
}
