import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// 检测redux中状态的改变，若redux的状态发生了改变，那么重新渲染App组件
store.subscribe(() => {
  // DOM diffing不会引起大面积重绘重排
  root.render(
    <App />
  );
})

