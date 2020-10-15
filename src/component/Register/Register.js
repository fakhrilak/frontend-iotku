import React,{useState} from 'react'
import { handleRegister } from "../../redux/action/auth";
import { connect } from "react-redux";
const Register = ({handleRegister}) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
        fullname: "",
        phone: ""
      });
    
      const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };

      const { email, password, fullname, phone } = formData;
      console.log(email)
      const onSubmit = (e) => {
        e.preventDefault();
        handleRegister(
          email,
          password,
          fullname,
          phone
        );
        console.log("test")
      };
  return (
    <div>
      <form onSubmit={(e)=>onSubmit(e)}>
              <div className='form-group'>
                  <input
                    type="text"
                    placeholder='Full Name'
                    className='custom-input'
                    value={fullname}
                    name="fullname"
                    onChange={(e) => onChange(e)}
                    />
              </div>
              <div className='form-group'>
                  <input
                    type="email"
                    placeholder='Email'
                    className='custom-input'
                    value={email}
                    name="email"
                    onChange={(e) => onChange(e)}
                    />
              </div>
              <div className='form-group'>
                  <input
                    type="password"
                    placeholder='Password'
                    className='custom-input'
                    value={password}
                    name="password"
                    onChange={(e) => onChange(e)}
                    />
              </div>
              <div className='form-group'>
                  <input
                    type="text"
                    placeholder='Phone'
                    className='custom-input'
                    value={phone}
                    name="phone"
                    onChange={(e) => onChange(e)}
                    />
              </div>
              <div className='form-submit'>
                  <button
                    className='btn-submit'
                  >
                      REGISTER
                  </button>
              </div>
          </form>
    </div>
  )
}

const mapStateToProps = (state) => ({
    auth: state.auth,
  });
  
  export default connect(mapStateToProps, { handleRegister })(Register);
