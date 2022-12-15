import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App/App';
import { store, persistor } from './redux/store';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter basename="/goit-react-hw-08-phonebook">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
    <ToastContainer autoClose={1500} />
  </>
);
