import ReactDOM from 'react-dom/client';
import "./styles/style.css"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './content/Main/MainPage';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>
    <MainPage />
  </Provider>
);


