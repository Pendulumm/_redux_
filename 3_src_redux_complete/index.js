import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

store.subscribe(() => {
  // DOM diffing不会引起大面积重绘重排
  root.render(
    <App />
  );
})

