import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import { store } from './redux/store';
import TariffList from './views/tariff/TariffList'
function App() {
  return (
    <Provider store={store}>
      <Router>
          <Routes>
            <Route path="/" element={<TariffList />} />
          </Routes>
      </Router>
    </Provider>
  );
} 

export default App;
