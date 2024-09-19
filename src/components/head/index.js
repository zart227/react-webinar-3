import React from 'react';
import PropTypes from 'prop-types';
import { plural } from '../../utils';
import './style.css';

function Head({ title, cart, onOpenCart }) {
  const totalItems = cart.reduce((sum, item) => sum + item.count, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.count, 0);

  return (
    <div className="Head">
      <h1>{title}</h1>
      <div className="CartInfo">
        <span>
          В корзине: {cart.length}{' '}
          {plural(cart.length, { one: 'товар', few: 'товара', many: 'товаров' })}, на сумму{' '}
          {totalPrice} руб.
        </span>
        <button onClick={onOpenCart}>Открыть корзину</button>
      </div>    
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.node.isRequired,
  cart: PropTypes.array.isRequired,
  onOpenCart: PropTypes.func.isRequired,
};

export default React.memo(Head);
