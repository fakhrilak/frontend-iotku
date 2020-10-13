import React from 'react';
import Button from "./component/Button/Button"
import './App.css';
import { Provider } from "react-redux";
import store from "./redux/store/store";
import logo from './img/logo.png'
function App() {
  const [count,setCount]=React.useState(0)

  return (
    <Provider store={store}>
      <img src={logo} style={{height:60,width:60,paddingTop:50,paddingLeft:50}}/>
    <div className="Container-button"> 
      <Button setCount={setCount} count={count}/>   
    </div>
    </Provider>
  );
}

export default App;
