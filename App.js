import React from 'react';
import MainNavigator from './src/MainNavigator';
import {Provider} from 'react-redux';
import {store} from './src/store/Store';
import {ToastProvider} from './src/context/ToastContext';

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ToastProvider>
          <MainNavigator />
        </ToastProvider>
      </Provider>
    </>
  );
};

export default App;
