import React,{useState} from 'react'
import {handleLogin}from "../../redux/action/auth"
import {connect}from "react-redux"
const Login = ({handleLogin}) => {

    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });
    
    const { email, password } = formData;

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        handleLogin(email, password);
      };
  return (
    <div>
        <form onSubmit={(e) => onSubmit(e)}>
              <div className='form-group'>
                  <input
                    type="text"
                    placeholder="Email"
                    value={email}
                    name="email"
                    onChange={(e) => onChange(e)}
                    className='custom-input'
                    />
              </div>
              <div className='form-group'>
                  <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    name="password"
                    onChange={(e) => onChange(e)}
                    placeholder='Password'
                    className='custom-input'
                    />
              </div>
              <div className='form-submit'>
                  <button
                    className='btn-submit'
                  >
                      LOGIN
                  </button>
              </div>            
          </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, { handleLogin })(Login);
