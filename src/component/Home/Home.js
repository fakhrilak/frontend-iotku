import React,{useEffect,useState} from 'react'
import LandingPage from "../LandingPage/LandingPage"
import Logo from "../../img/logo.png"
import {connect} from "react-redux"
import "./Home.css"
import socketIOClient from "socket.io-client";
import PostData from "../PostData/PostData"
import {API} from "../../config/api"
import Voice from "../voice/voice"

const Home = ({auth:{isAuthenticated,user}}) => {
  const ENDPOINT = "https://fakhrilak-iotku.herokuapp.com/";
  const socket = socketIOClient(ENDPOINT);
  const [Data,setData] = useState(false)
  const [getAlldata,setGetAlldata] = useState("")
  const [sensor,setsensor]= useState("")
  
  useEffect(()=>{
    if (user){
      socket.emit('getAlldata',user.id)
    }  
  },[Data,user])

  useEffect(()=>{
    socket.on('responsegetall',data=>{
    setGetAlldata(data)
  })
  },[Data,user])
  useEffect(()=>{
    socket.on("sendgivedata",data=>{
      setsensor(data)
    })
  },[sensor])
  let sorted = 0
  if(getAlldata !== 0){
    sorted = [...getAlldata].sort((a,b)=>{
      return a.id - b.id
    })
  }
  
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
        <div className="lcd">
          <h1>{sensor}</h1>
        </div>
        <Voice socket={socket}/>
        {!Data && <div className="Body-Home">
            {getAlldata == 0 ? (<div>loading...</div>):
                (sorted.map((datas,index)=>(
              <div key={index}>
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
//https://fakhrilak.github.io/frontend-iotku/
export default connect(mapStateToProps, {})(Home);
