import React, { useState } from 'react';
import './lr.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import Home2 from '../../Components2/Home2';
import NavBar from '../Navbar/NavBar';

const SignInUp = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
        // Navigate to the login page or perform any other action you want
      } else {
        const responseBody = await response.json();
        if (response.status === 409) {
          console.error('Email ID already exists, try logging in');
          // Display an error message to the user, e.g., by updating state
        } else {
          console.error('User registration failed');
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const handleSignIn = async () => {
    try {
      const response = await fetch(`http://localhost:3000/users?email=${userData.email}&password=${userData.password}`, {
        method: 'GET',
      });
  
      console.log(response);
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);
  
        // Check if the response is an array of users
        if (Array.isArray(responseData) && responseData.length > 0) {
          const foundUser = responseData[0]; // Assuming the first user is found
  
          console.log('User logged in successfully');
          setIsLoggedIn(true); // Set isLoggedIn to true
          // Navigate to Home2 when user is logged in
          navigate(`/welcome/${foundUser.name}`);
        } else {
          console.error('User login failed');
        }
      } else {
        console.error('User login failed');
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  };
  
  return (
    <>
    <NavBar/>
    <body className="signinup-body">
      <div>
          <div className={`cont ${isSignUp ? 's--signup' : ''}`}>
            <div className="form sign-in">
              <h2 className="myh2">Welcome</h2>
              <label className='lb1'>
                <span className='lbs'>Email</span>
                <input
                  type="email"
                  className="signinupInput"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </label>
              <label className='lb1'>
                <span className='lbs'>Password</span>
                <input
                  type="password"
                  className="signinupInput"
                  name="password"
                  value={userData.password}
                  onChange={handleChange}
                />
              </label>
              <p className="forgot-pass">Forgot password?</p>
              <button
                type="button"
                className="signinupsubmit"
                onClick={handleSignIn}
              >
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
                <label className='lb1'>
                  <span className='lbs'>Name</span>
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleChange}
                    className="signinupInput"
                  />
                </label>
                <label className='lb1'>
                  <span className='lbs'>Email</span>
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="signinupInput"
                  />
                </label>
                <label className='lb1'>
                  <span className='lbs'>Password</span>
                  <input
                    type="password"
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    className="signinupInput"
                  />
                </label>
                <button
                  type="button"
                  className="signinupsubmit"
                  onClick={handleSignUp}
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
      </div>
    </body>
    </>
  );
};

export default SignInUp;
