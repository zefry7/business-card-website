import ReactDOM from 'react-dom/client';
import "./styles/style.css"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import MainPage from './content/Main/MainPage';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const url = window.location.pathname.split("/")

if (url.length <= 2) {
  window.location.href += "/"
}


root.render(
  <Provider store={store}>
      <BrowserRouter basename={`${url[1]}/`}>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter >
  </Provider>
);


