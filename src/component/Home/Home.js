import React,{useEffect,useState} from 'react'
import LandingPage from "../LandingPage/LandingPage"
import Logo from "../../img/logo.png"
import {connect} from "react-redux"
import {getDataId,editData,getDataUserId}from "../../redux/action/iot"
import "./Home.css"
import PostData from "../PostData/PostData"


const Home = ({getDataUserId,editData,auth:{isAuthenticated,user},Iot:{data_userId}}) => {
  const [Data,setData]=useState(false)
  useEffect(()=>{
    if(user){
      getDataUserId(user.id)
    }       
  },[user,Data])
  
  let Dataa = data_userId

  const HandleEdit=(id,data)=>{
    if(data=== "0"){
      editData("1",id)
    }else if(data==="1"){
      editData("0",id)
    }
    getDataUserId(user.id)
  }
  return (
    <div className="container-Home">
      {isAuthenticated &&<div>
        <img src={Logo} className="img-home" onClick={()=>setData(!Data)}/>
      </div>}

      {!isAuthenticated &&<div>
        <LandingPage/>
      </div>}

      {!Data && <div className="Body-Home">
          {user == null? (<div> Loading...</div>):
          (Dataa.map((data)=>
              <div className="objeck-render">
                {

                data.type == "Button" ? 
                (<button
                  onClick={()=>HandleEdit(data.id,data.data)}
                  style={{background: data.data === "0"?"white":"grey"}}
                >{data.text}</button>):

                data.type == "Input" ?
                (<div>
                    <input
                  placeholder={data.text}
                  />
                  <div style={{paddingTop:10}}>
                    <button style={{minWidth:50}}>
                      Kirim
                    </button>
                  </div>
                </div>):
                null
                }
              </div>
            ))}
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

export default connect(mapStateToProps, { getDataId,editData,getDataUserId})(Home);
