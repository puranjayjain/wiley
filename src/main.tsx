import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

declare global {
  interface Array<T> {
    except(o: T): Array<T>;
  }
}

// array prototype here
Array.prototype.except = function (val) {
  return this.filter(function (x) {
    return x !== val;
  });
};
