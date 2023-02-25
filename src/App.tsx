import React from 'react';
import configureStore from './store/configureStore';
import StoreContext from './store/storeContext';

const store = configureStore();
const App = () => (
  <StoreContext.Provider value={store}>

  <h1>Hello React</h1>
  </StoreContext.Provider>
);

export default App;
