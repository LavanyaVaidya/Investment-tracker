import React, { useState } from 'react';
import './lr.css'; // Import the CSS file

const SignInUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };
  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log('User registered successfully');
      } else {
        console.error('User registration failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (
    <body className='signinup-body'>
    <div>
      <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
        <div className="form sign-in">
          <h2 className="myh2">Welcome</h2>
          <label>
            <span>Email</span>
            <input type="email" className='signinupInput' />
          </label>
          <label>
            <span>Password</span>
            <input type="password"  className='signinupInput'/>
          </label>
          <p className="forgot-pass">Forgot password?</p>
          <button type="button" className="signinupsubmit">
            Sign In
          </button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h3>Don't have an account? Please Sign up!</h3>
            </div>
            <div className="img__text m--in">
              <h3>If you already have an account, just sign in.</h3>
            </div>
            <div className="img__btn" onClick={toggleSignUp}>
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2 className="myh2">Create your Account</h2>
            <label>
              <span>Name</span>
              <input type="text" name="name" value={userData.name} onChange={handleChange}  className='signinupInput'/>
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" value={userData.email} onChange={handleChange}  className='signinupInput'/>
            </label>
            <label>
              <span>Password</span>
              <input type="password" name="password" value={userData.password} onChange={handleChange}  className='signinupInput'/>
            </label>
            <button type="button" className="signinupsubmit" onClick={handleSignUp}>
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
    </body>
  );
};

export default SignInUp;
