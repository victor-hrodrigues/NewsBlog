import React from 'react';
import MainPage from './UI/MainPage';
import {Provider} from 'react-redux';
import BlogDataStore from './Redux/BlogDataStore';

const App = () => {
  return (
    <Provider store={BlogDataStore}>
      <MainPage />
    </Provider>
  );
};
export default App;
