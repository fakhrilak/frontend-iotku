import React,{useEffect,useState} from 'react'
import LandingPage from "../LandingPage/LandingPage"
import Logo from "../../img/logo.png"
import {connect} from "react-redux"
import "./Home.css"
import socketIOClient from "socket.io-client";
import PostData from "../PostData/PostData"


const Home = ({auth:{isAuthenticated,user}}) => {
  const ENDPOINT = "ws://fakhrilak-iotku.herokuapp.com/";
  const socket = socketIOClient(ENDPOINT);
  const [Data,setData] = useState(false)
  const [getAlldata,setGetAlldata] = useState("")
  
  useEffect(()=>{
    if (user){
      socket.emit('getAlldata',user.id)
      console.log(user.id)
    }  
  },[Data,user])

  useEffect(()=>{
    socket.on('responsegetall',data=>{
    setGetAlldata(data)
    console.log("seted")
  })
  },[Data,user])
  
const HandleUpdate=(id,data)=>{
  if (data === '1'){
    socket.emit('news', {data:0,token:"xnxx",id:id,user:user.id});
  }else if (data === '0'){
    socket.emit('news', {data:1,token:"xnxx",id:id,user:user.id});
  }
  
}
  return (
    <div className="container-Home">
      {isAuthenticated &&<div>
        <img src={Logo} className="img-home" onClick={()=>setData(!Data)}/>
        {!Data && <div className="Body-Home">
            {getAlldata == 0 ? (<div>loading...</div>):
                (getAlldata.map((datas)=>(
              <div key={datas.id}>
                <button onClick={()=>HandleUpdate(datas.id,datas.data)}
                style={{backgroundColor:datas.data == '0'? "white":"grey"}}
              >{datas.text}</button>
            </div>
        )))}
        </div>}
      </div>}

      {!isAuthenticated &&<div>
        <LandingPage/>
      </div>}
      
      
      {Data && <PostData setData={setData} Data={Data}/>

      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  auth: state.Auth,
  Iot: state.Iot
});

export default connect(mapStateToProps, {})(Home);
