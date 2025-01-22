import React from "react";
import { Provider } from 'react-redux';
import Counterdisplay from './counterDisplay';
import Store from './store';

const App = () => {
  return (
    <div>
      <Provider store={Store}>
        <Counterdisplay />
      </Provider>
    </div>
  );
};

export default App;
