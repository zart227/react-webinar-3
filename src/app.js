import React from 'react';
// import { createElement } from './utils.js';
import './styles.css';

// Функция для правильной формы слова "раз"
function getSelectionText(count) {
  const lastDigit = count % 10;
  const lastTwoDigits = count % 100;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
    return 'раз';
  }

  if (lastDigit === 1) {
    return 'раз';
  }

  if (lastDigit >= 2 && lastDigit <= 4) {
    return 'раза';
  }

  return 'раз';
}

/**
 * Приложение
 * @param store {Store} Состояние приложения
 * @returns {React.ReactElement}
 */
function App({ store }) {
  const list = store.getState().list;

  return (
    <div className="App">
      <div className="App-head">
        <h1>Приложение на чистом JS</h1>
      </div>
      <div className="App-controls">
        <button onClick={() => store.addItem()}>Добавить</button>
      </div>
      <div className="App-center">
        <div className="List">
          {list.map(item => (
            <div key={item.code} className="List-item">
              <div
                className={'Item' + (item.selected ? ' Item_selected' : '')}
                onClick={() => store.selectItem(item.code)}
              >
                <div className="Item-code">{item.code}</div>
                <div className="Item-title">
                  {item.title} 
                  {item.selectionCount > 0 && ` | Выделяли ${item.selectionCount} ${getSelectionText(item.selectionCount)}`}
                </div>
                {/* {item.selectionCount > 0 && (
                  <div className="Item-selectionCount">
                    Выделяли {item.selectionCount} раз
                  </div>
                )} */}
                <div className="Item-actions">
                  <button onClick={(e) => {
                    e.stopPropagation();
                    store.deleteItem(item.code)
                  }}>Удалить</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
