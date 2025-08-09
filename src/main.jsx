import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Routes } from './routes';
import { Provider } from 'react-redux';
import { store } from './store/index';
import GlobalStyles from './styles/global';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <GlobalStyles />
       <Routes />
    </Provider>
  </StrictMode>,
);
