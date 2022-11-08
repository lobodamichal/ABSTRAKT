import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import store from "./store/index-store";

const firebaseConfig = {
  apiKey: "AIzaSyBWP0rlvv8PWj_35BaIkR1vJPnKMRZwydU",
  authDomain: "abstrakt-5e25f.firebaseapp.com",
  databaseURL:
    "https://abstrakt-5e25f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "abstrakt-5e25f",
  storageBucket: "abstrakt-5e25f.appspot.com",
  messagingSenderId: "767029382554",
  appId: "1:767029382554:web:eaa3f24d68bbb8c6babe23",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
