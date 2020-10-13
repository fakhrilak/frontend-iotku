import React from 'react'
import "./Button.css"
import {editData,getData} from '../../redux/action/iot'
import {connect}from 'react-redux'
import { useState } from 'react'

const Button = ({editData,getData}) => {
  const [cont,setCount]=useState(false)
  const [title,setTitle]=useState('')

  const handleClick =()=>{
    setCount(!cont)
    let data = null
    if(cont== false){
      data = 0
      setTitle('MATI')
    }else if(cont == true){
      data = 1
      setTitle('URIP')
    }
    editData(data)
  }
  return (
    <div className="Container-button">
        <div>
            <h1>{title}</h1>
            <button onClick={()=>handleClick()}>Zilog</button>
        </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  Iots: state.Iot
});
export default connect(mapStateToProps, { editData,getData })(Button);
