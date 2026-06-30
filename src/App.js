import React from 'react';
import Header from './components/Header';
import "./App.scss";
import Keyword from './components/Keyword';
import MainInfo from './components/MainInfo';

const App = () => {
  return (
    <div id='app'>
      <Header/>
      <Keyword/>
      <MainInfo/>
    </div>
  );
};

export default App;
