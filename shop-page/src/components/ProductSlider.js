import React, { useState, useEffect } from 'react';
import ProductCard from './ProductCard'; // Импортируем ProductCard
import './shop.css'; // Стили для слайдера

export default function ProductSlider({ products, onAddToCart }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Функция для разделения продуктов на группы по 4 элемента
  const chunkedProducts = [];
  for (let i = 0; i < products.length; i += 4) {
    chunkedProducts.push(products.slice(i, i + 4));
  }

  const totalSlides = chunkedProducts.length;

  // Переключение слайдов
  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  // Автоматическая смена слайдов
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval); // Очистка интервала при размонтировании
  }, [totalSlides]);

  return (
    <div className="slider-container">
      {/* Слайды */}
      <div className="slides">
        {chunkedProducts.map((chunk, index) => (
          <div
            key={index}
            className={`slide ${currentSlide === index ? 'active' : ''}`}
            style={{
              transform: `translateX(${currentSlide === index ? '0%' : currentSlide > index ? '-100%' : '100%'})`,
              opacity: currentSlide === index ? 1 : 0,
            }}
          >
            <div className="product-grid">
              {chunk.map((product) => (
                <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Точки навигации */}
      <div className="dots">
        {chunkedProducts.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => changeSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}
