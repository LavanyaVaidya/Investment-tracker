import React, { useState } from 'react';
import './lr.css'; // Import the CSS file
import { useNavigate } from 'react-router-dom';
import Home2 from '../../Components2/Home2';
import NavBar from '../Navbar/NavBar';


const SignInUp = () => {
  const token='eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJtdnRrIiwiZXhwIjoxNjk2OTgyODMwLCJpYXQiOjE2OTY5NDY4MzB9.w8b-g_cxJD2BiIqfHgRubbDQy9sHBXwZ5A8336prsGw';
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const toggleSignUp = () => {
    setIsSignUp(!isSignUp);
  };
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignUp = async () => {
    try {
      // Name validation: Only characters (letters)
    const nameRegex = /^[A-Za-z]+$/;
    if (!nameRegex.test(userData.userName)) {
      window.alert('Name should only contain characters (letters)');
      return;
    }

       // Email format validation using a regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(userData.email)) {
      console.error('Invalid email format');
      window.alert('Invalid email format');
      // Display an error message to the user, e.g., by updating state
      return;
    }
     // Password length validation
     if (userData.password.length <= 8) {
      window.alert('Password is too weak. It should be more than 8 characters.');
      return;
    }     

      const response = await fetch('http://localhost:8084/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(userData),
      });

  
      if (response.ok) {
        console.log('User registered successfully');
        window.alert('Successful registration');
                      // Reset the form fields
            setUserData({
              name: '',
              email: '',
              password: '',
            });
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

 

  // Function to fetch data from an authenticated API endpoint
// async function fetchData() {
//   // Get the JWT token from local storage (or wherever you stored it)
//   const token = localStorage.getItem('jwtToken');

//   // Define headers with the token
//   const headers = {
//     Authorization: `Bearer ${token}`,
//     'Content-Type': 'application/json',
//   }};

//   try {
//     // Send a GET request to your API endpoint
//     const response = await fetch('http://example.com/api/protected-resource', {
//       method: 'GET',
//       headers: headers,
//     });

//     if (response.ok) {
//       // Handle a successful response here
//       const data = await response.json();
//       console.log('Data:', data);
//     } else {
//       // Handle errors here (e.g., 401 Unauthorized)
//       console.error('API Request Failed:', response.statusText);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }

// // Call the fetchData function when you need to fetch data
// fetchData();

// Usage example:
// const response = await customFetch('http://your-api-endpoint.com/some-resource', {
//   method: 'GET',
// });

// Now the JWT token will be included in the request headers
  
  const handleSignIn = async () => {
    try {
       const response = await fetch(`http://localhost:8084/getUsers?email=${userData.email}&password=${userData.password}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        }
      });
      console.log(response);
      if (!response.ok) {
        console.error(`Request failed with status ${response.status}`);
        // Log the response text if needed: console.error(await response.text());
      }
      if (response.ok) {
        // const { token, username } = tokenData; // Assuming your response has a 'token' field
  
        // if (token && username) {
        // // Store the JWT token in local storage
        // localStorage.setItem('jwtToken', token);

      // console.log(response);
  
      // if (response.ok) {
        const responseData = await response.json();
        console.log('Response:', responseData);
  
        // Check if the response is an array of users
        if (Array.isArray(responseData) && responseData.length > 0) {
          const foundUser = responseData[0]; // Assuming the first user is found
        
          console.log('User logged in successfully');
          

          setIsLoggedIn(true); // Set isLoggedIn to true
          // Navigate to Home2 when user is logged in
          // navigate(`/welcome/${foundUser.userName}`);
          navigate(`/welcome/${foundUser.userName}`);
        } else {
          console.error('Token or username not provided in response.');
        }
      } else {
        console.error('User login failed');}
      // } else {
      //   console.error('User login failed');
      // }
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
              <label className='lb1' htmlFor="emailInputSignIn" data-testid='email-signin'>
                <span className='lbs'>Email</span>
                <input
                 data-testid='email-value-signin'
                 id='emailInputSignIn'
                  type="email"
                  className="signinupInput"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                />
              </label>
              <label className='lb1' htmlFor="passwordInputSignIn" data-testid='password-signin'>
                <span className='lbs'>Password</span>
                <input
                 data-testid='password-value-signin'
                 id='passwordInputSignIn'
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
            
                data-testid="signIn"
              >
                Login
              </button>
            </div>
            <div className="sub-cont">
              <div className="img">
                <div className="img__text m--up">
                  <h3>Don't have an account? Please Register!</h3>
                </div>
                <div className="img__text m--in">
                  <h3>If you already have an account, just login.</h3>
                </div>
                <div className="img__btn" onClick={toggleSignUp}>
                  <span className="m--up">Register</span>
                  <span className="m--in">Login</span>
                </div>
              </div>
              <div className="form sign-up">
                <h2 className="myh2">Create your Account</h2>
                <label className='lb1' htmlFor='nameInput' data-testid='name-signup'>
                  <span className='lbs'> Name</span>
                  <input
                   id='nameInput'
                    type="text"
                    name="userName"
                    value={userData.userName}
                    onChange={handleChange}
                    className="signinupInput"
                  />
                </label>
                <label className='lb1' htmlFor='emailInput' data-testid='email-signup'>
                  <span className='lbs'>Email</span>
                  <input
                  id='emailInput'
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleChange}
                    className="signinupInput"
                  />
                </label>
                <label className='lb1' htmlFor='passwordInput' data-testid='password-signup'>
                  <span className='lbs'>Password</span>
                  <input
                  id='passwordInput'
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
                  data-testid="signUp"
                >
                  Register
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
