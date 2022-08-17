import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import store from './redux/configureStore';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

const loadingMarkup = (
  <div>
    <h2>Loading..</h2>
  </div>
);
root.render(
  <Provider store={store}>
    <Suspense fallback={loadingMarkup}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>
);
