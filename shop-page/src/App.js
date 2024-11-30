import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductSlider from './components/ProductSlider';
import Guarantees from './components/Guarantees';
import './components/shop.css';

export default function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]); // Состояние для корзины

  // Имитация загрузки данных
  useEffect(() => {
    setTimeout(() => {
      setProducts([
        { id: 1, name: 'Однотонные футболки', price: 3500, inStock: true, image: 'https://via.placeholder.com/800x400/FF5733/FFFFFF' },
        { id: 2, name: 'Однотонный гардероб', price: 2700, inStock: true, image: 'https://via.placeholder.com/800x400/33FF57/FFFFFF' },
        { id: 3, name: 'Нейтральные', price: 2200, inStock: false, image: 'https://via.placeholder.com/800x400/3357FF/FFFFFF' },
        { id: 4, name: 'Камуфляж', price: 3200, inStock: true, image: 'https://via.placeholder.com/800x400/FF33A1/FFFFFF' },
        { id: 5, name: 'Сексуальная футболка', price: 2800, inStock: true, image: 'https://via.placeholder.com/800x400/FF5733/FFFFFF' },
        { id: 6, name: 'Женский гардероб', price: 2900, inStock: true, image: 'https://via.placeholder.com/800x400/33FF57/FFFFFF' },
        { id: 7, name: 'Классическая футболка', price: 2500, inStock: true, image: 'https://via.placeholder.com/800x400/3357FF/FFFFFF' },
        { id: 8, name: 'Поло', price: 3000, inStock: false, image: 'https://via.placeholder.com/800x400/FF33A1/FFFFFF' },
        { id: 9, name: 'Летняя футболка', price: 3500, inStock: true, image: 'https://via.placeholder.com/800x400/FF5733/FFFFFF' },
        { id: 10, name: 'Топ с вырезом', price: 3100, inStock: true, image: 'https://via.placeholder.com/800x400/33FF57/FFFFFF' },
        { id: 11, name: 'Футболка с принтом', price: 2800, inStock: true, image: 'https://via.placeholder.com/800x400/3357FF/FFFFFF' },
        { id: 12, name: 'Мужской костюм', price: 4500, inStock: false, image: 'https://via.placeholder.com/800x400/FF33A1/FFFFFF' },
      ]);
      setLoading(false);
    }, 2000);
  }, []);

  // Добавление товара в корзину
  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  // Вывод сообщения во время загрузки
  if (loading) return <p>Загрузка...</p>;

  return (
    <div className="App">
      {/* Хедер */}
      <Header />

      {/* Основной контент */}
      <main>
        {/* Слайдер товаров */}
        <ProductSlider products={products} onAddToCart={addToCart} />

        {/* Блок гарантий */}
        <Guarantees />
      </main>

      {/* Футер */}
      <Footer />
    </div>
  );
}
