import 'react-native-gesture-handler';
import React from 'react';
import Router from './Router';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './store';

const App = () => {

  let persistor = persistStore(store);

  return (
      <>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App;
