import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import './App.css';
import CakeContainer from './container/CakeContainer';
import HookCakeContainer from './container/HookCakeContainer';
import IceCreamContainer from './container/IceCreamContainer';

function App() {
  return (
    <Provider store={ store }>
      <div className="App">
        <IceCreamContainer />
        <HookCakeContainer />
        <CakeContainer />
      </div>
    </Provider>
  );
}

export default App;
