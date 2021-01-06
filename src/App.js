import React,{useEffect} from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store/store";
import logo from './img/logo.png'
import { loadUser } from "./redux/action/auth";
import { setAuthToken } from "./config/api";
import Home from './component/Home/Home';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {

  useEffect(() => {
    store.dispatch(loadUser());
    }, []);
  return (
    <Provider store={store}>
     <div className="App">
        <Home/>
     </div>
    </Provider>
  );
}

export default (App)
