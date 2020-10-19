import React,{useState} from 'react'
import {postData} from "../../redux/action/iot"
import {connect} from "react-redux"
import "./PostData.css"
import {handleLogout} from "../../redux/action/auth"
const PostData = ({handleLogout,postData,auth:{token},setData,Data}) => {
    const [formData, setFormData] = useState({
        text: "",
        type: "",
      });
    
      const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
      const { text, type } = formData;
      const onSubmit = (e) => {
        e.preventDefault();
        postData(
          text,
          type
        );
        setFormData({
          text: "",
          type: "",
        })
      };

      const HandleLogout=()=>{
        handleLogout();
        setData(!Data)
      }
      const onCopy =(e)=>{
        document.execCommand('copy');
        e.target.focus(token)
      }
  return (
    <div className="Containet-PostData">
      <form onSubmit={(e)=>onSubmit(e)}>
              <div className='form-group'>
                  <input
                    type="text"
                    placeholder='Text'
                    className='custom-input'
                    value={text}
                    name="text"
                    onChange={(e) => onChange(e)}
                    />
              </div>
              <div className='form-group'>
                  <input
                    type="type"
                    placeholder='Type'
                    className='custom-input'
                    value={type}
                    name="type"
                    onChange={(e) => onChange(e)}
                    />
              </div>
              <div className='form-submit'>
                  <button
                    className='btn-submit'
                  >
                      SUBMIT
                  </button>
              </div>
          </form>
          <div style={{paddingTop:200,display: token?'flex':"default",paddingLeft:190}}>
           {token && <div style={{paddingRight:10}}>
              <button onClick={() => {navigator.clipboard.writeText(token)}} 
           className='btn-submit'
           >
              Copy Token
            </button>
            </div>}
           
            <button  className='btn-submit'
            onClick={()=>HandleLogout()}
            >
                  Logout
            </button>
          </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
    auth: state.Auth,
  });
  
  export default connect(mapStateToProps, { postData,handleLogout })(PostData);
