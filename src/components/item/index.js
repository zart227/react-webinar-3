import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Item({ item, onAddToCart = () => {} }) {
  const handleAddToCart = () => {
    onAddToCart(item.code);
  };

  return (
    <div className="Item">
      <div className="Item-code">Код: {item.code}</div>
      <div className="Item-title">{item.title}</div>
      <div className="Item-price">Цена: {item.price} руб.</div>
      <div className="Item-actions">
        <button onClick={handleAddToCart}>Добавить в корзину</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func,
};

export default React.memo(Item);
