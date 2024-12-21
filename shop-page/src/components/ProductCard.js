import React from 'react';
import './shop.css'; // Стили для ProductCard

export default function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
          disabled={!product.inStock}
        >
          В Корзину 🛒
        </button>
      </div>
      <div className="product-info">
        <div className="product-name">{product.name}</div>
        <div className="stock-price">
          <div className="stock-status">
            {product.inStock ? 'В НАЛИЧИИ' : 'НЕТ В НАЛИЧИИ'}
          </div>
          <div className="product-price">{product.price} руб.</div>
        </div>
      </div>
    </div>
  );
}
