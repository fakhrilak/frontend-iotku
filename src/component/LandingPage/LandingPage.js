import React,{useState} from 'react'
import Login from "../Login/Login"
import Register from "../Register/Register"
import "./LandingPage.css"
import Logo from "../../img/logo.png"
const LandingPage = () => {
    const [handleLogin,setHandleLogin]=useState(false)
  return (
    <div className="container-landingpage">
      <img src={Logo} style={{height:100,width:100,paddingTop:50}}/>
      {!handleLogin && <Login/>}

      {handleLogin && <Register/>}

      {!handleLogin && <div>
        <p onClick={()=>setHandleLogin(!handleLogin)}>Dont Have Account ? Click Me</p>
      </div>}

      {handleLogin && <div>
        <p onClick={()=>setHandleLogin(!handleLogin)}>Have Account ? Click Me</p>
      </div>}

    </div>
  )
}

export default LandingPage
