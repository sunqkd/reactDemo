import React from 'react';
import ReactDOM from 'react-dom';
// import './assets/css/index.css'; // 公共样式
import App from './App'; // app 组件

// serviceWorker  加快 react运行速度的一个js运行文件
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root')); // 把 APP 组件 渲染到root节点上

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
