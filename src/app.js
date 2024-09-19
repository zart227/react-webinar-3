import React, { useCallback, useState  } from 'react';
import List from './components/list';
import Head from './components/head';
import PageLayout from './components/page-layout';
import CartModal from './components/cart-modal';

/**
 * Приложение
 * @param store {Store} Хранилище состояния приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const { list, cart } = store.getState();
  const [isCartOpen, setCartOpen] = useState(false);

  const callbacks = {
    onAddToCart: useCallback(
      code => {
        store.addToCart(code);
      },
      [store],
    ),
    onRemoveFromCart: useCallback(
      code => {
        store.removeFromCart(code);
      },
      [store],
    ),
    onOpenCart: useCallback(() => {
      setCartOpen(true);
    }, []),
    onCloseCart: useCallback(() => {
      setCartOpen(false);
    }, []),
  };

  return (
    <PageLayout>
      <Head title="Магазин" cart={cart} onOpenCart={callbacks.onOpenCart} />
      <List
        list={list}
        onAddToCart={callbacks.onAddToCart}
      />
      {isCartOpen && (
        <CartModal
          cart={cart}
          onClose={callbacks.onCloseCart}
          onRemoveFromCart={callbacks.onRemoveFromCart}
        />
      )}
    </PageLayout>
  );
}

export default App;
