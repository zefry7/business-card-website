import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import "./styles/style.css"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { data } from "./data";
import MainPage from './content/Main/MainPage';
import Layout from './content/Layout/Layout';
import { Provider } from 'react-redux';
import store from './store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

const url = window.location.pathname.split("/")

if (url.length <= 2) {
  window.location.href += "/"
}

export const UserContext = createContext()

root.render(
  <Provider store={store}>
    <UserContext.Provider value={data}>
      <BrowserRouter basename={`${url[1]}/`}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </UserContext.Provider>
  </Provider>
);


