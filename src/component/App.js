import React from 'react';

import SearchBar from './SearchBar';
import Counter from './Counter';
import Calculator from './Calculator';
import './App.css';
import { AppTitle } from './styled';

const App = () => {
  return (
    <div className="ui container App">
      {/* <SearchBar />
      <Counter /> */}
      <Calculator />
      <AppTitle>Hello World!</AppTitle>
    </div>
  );
};

export default App;
