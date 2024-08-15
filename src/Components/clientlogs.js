import React, { useState } from 'react';
import './clientlogs.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const UserSection = () => {
  const [username, setUsername] = useState('');
  const Navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email_id: '',
    password: '',
  });
  const handleLoginChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { email_id, password } = loginData;
    if (email_id && password) {
      try {
        const response = await axios.get('http://localhost:8080/api/registration');
        const userExist = response.data.some(
          (data) => data.email_id === email_id && data.password === password
        );
        if (userExist) {
          Navigate('/clhome')
        } else {
          alert('User Not Found');
        }
      } catch (error) {
        console.error('Error fetching users', error);
        alert('Error logging in');
      }
    } else {
      alert('Please fill all the fields');
    }
  };



//Sign up

    const [signupData, setSignupData] = useState({
      full_name:'',
        email_id: '',
        password: '',
      });
          
      const handleSignupChange = (e) => {
        const { name, value } = e.target;
        setSignupData((prevState) => ({
          ...prevState,
          [name]: value,
        }));
      };
      const handleSignupSubmit = async (e) => {
        e.preventDefault();
        const { full_name,email_id,password } = signupData;
        if ( full_name && email_id && password ) {
          try {
            await axios.post('http://localhost:8080/api/registration', signupData);
          } catch (error) {
            alert('Error creating user');
          }
        } else {
          alert('Please fill all the fields');
        }
      };

  const handleSignUpClick = () => {
    const userForms = document.getElementById('user_options-forms');
    userForms.classList.remove('bounceRight');
    userForms.classList.add('bounceLeft');
  };

  const handleLoginClick = () => {
    const userForms = document.getElementById('user_options-forms');
    userForms.classList.remove('bounceLeft');
    userForms.classList.add('bounceRight');
  };

  return (
    <div className='f'>
      <section className="user">
        <div className="user_options-container">
          <div className="user_options-text">
            <div className="user_options-unregistered">
              <h2 className="user_unregistered-title">Don't have an account?</h2>
              <button className="user_unregistered-signup" id="signup-button" onClick={handleSignUpClick}>Sign up</button>
            </div>

            <div className="user_options-registered">
              <h2 className="user_registered-title">Have an account?</h2>
              <button className="user_registered-login" id="login-button" onClick={handleLoginClick}>Login</button>
            </div>
          </div>

          <div className="user_options-forms" id="user_options-forms">
            <div className="user_forms-login">
              <h2 className="forms_title">Login</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input
                      type="text"
                      name='email_id'
                      placeholder="Email"
                      className="forms_field-input"
              
                      onChange={handleLoginChange}
                    />
                  </div>
                  <div className="forms_field">
                    <input type="password" name='password' onChange={handleLoginChange} placeholder="Password" className="forms_field-input" required />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <button type="button" className="forms_buttons-forgot">Forgot password?</button>
                  <input type="button" value="Log In" className="forms_buttons-action" onClick={handleLoginSubmit} />
                </div>
              </form>
            </div>

            <div className="user_forms-signup">
              <h2 className="forms_title">Sign Up</h2>
              <form className="forms_form">
                <fieldset className="forms_fieldset">
                  <div className="forms_field">
                    <input type="text" placeholder="Full Name" name='full_name' onChange={handleSignupChange} className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="email" placeholder="Email" name='email_id' onChange={handleSignupChange} className="forms_field-input" required />
                  </div>
                  <div className="forms_field">
                    <input type="password" placeholder="Password" name='password' onChange={handleSignupChange} className="forms_field-input" required />
                  </div>
                </fieldset>
                <div className="forms_buttons">
                  <input type="submit" value="Sign up"  onClick={handleSignupSubmit} className="forms_buttons-action" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UserSection;
