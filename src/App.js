// import './App.css';
// import Header from './Header'
// import SayHello from './SayHello';
// import Omikuji from './Omikuji';
// const App = () =>{
//  return (
//  <>
//  <Header firstName="Taro" lastName="React"/> 
//  <Omikuji />
//  </>
//   );
// }
// export default App;
// src/App.js

// React 17以降ではインポートしなくても動作しますが、あってもOK
// import React from 'react';
import ProductList from './ProductList';

function App() {
  return (
    <div>
      <h1>商品管理アプリ</h1>
      <ProductList />
    </div>
  );
}

export default App;