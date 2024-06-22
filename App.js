import React from 'react';
import MainNavigator from './src/MainNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store/Store';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    </>
  );
};

export default App;
