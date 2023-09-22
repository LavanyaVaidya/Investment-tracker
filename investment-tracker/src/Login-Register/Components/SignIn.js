import React, {useState} from 'react';

function SignIn() {
  const [formSignInLeft, setFormSignInLeft] = useState(false);
  const [formSignUpLeft, setFormSignUpLeft] = useState(false);
  const [frameLong, setFrameLong] = useState(false);
  const [signupActive, setSignupActive] = useState(false);
  const [signinInactive, setSigninInactive] = useState(false);
  const [forgotLeft, setForgotLeft] = useState(false);
  const [navUp, setNavUp] = useState(false);
  const [formSignUpDown, setFormSignUpDown] = useState(false);
  const [successLeft, setSuccessLeft] = useState(false);
  const [frameShort, setFrameShort] = useState(false);
  const [btnAnimateGrow, setBtnAnimateGrow] = useState(false);
  const [welcomeLeft, setWelcomeLeft] = useState(false);
  const [coverPhotoDown, setCoverPhotoDown] = useState(false);
  const [profilePhotoDown, setProfilePhotoDown] = useState(false);
  const [btnGoBackUp, setBtnGoBackUp] = useState(false);
  const [forgotFade, setForgotFade] = useState(false);

  const handleExistingUserClick = () => {
    // Toggle form visibility for Existing User
    setFormSignInLeft(!formSignInLeft);
    setFormSignUpLeft(false); // Hide New User form
  };
  const handleNewUserClick = () => {
    // Toggle form visibility for New User
    setFormSignUpLeft(!formSignUpLeft);
    setFormSignInLeft(false); // Hide Existing User form
  };

  const handleSignUpClick = () => {
    setNavUp(!navUp);
    setFormSignUpDown(!formSignUpDown);
    setSuccessLeft(!successLeft);
    setFrameShort(!frameShort);
  };

  
  const handleSignInClick = () => {
    setBtnAnimateGrow(!btnAnimateGrow);
    setWelcomeLeft(!welcomeLeft);
    setCoverPhotoDown(!coverPhotoDown);
    setFrameShort(!frameShort);
    setProfilePhotoDown(!profilePhotoDown);
    setBtnGoBackUp(!btnGoBackUp);
    setForgotFade(!forgotFade);
  };

  return (
    <div className={`container ${frameLong ? 'frame-long' : ''}`}>
      <div className={`frame ${frameShort ? 'frame-short' : ''}`}>
        <div className="nav">
          <ul className={`links ${navUp ? 'nav-up' : ''}`}>
            <li className={`signin-${signinInactive ? 'inactive' : 'active'}`}>
              <a className="btn" onClick={handleExistingUserClick}>
                Existing User
              </a>
            </li>
            <li className={`signup-${signupActive ? 'active' : 'inactive'}`}>
              <a className="btn" onClick={handleNewUserClick}>
                New User
              </a>
          </li>

          </ul>
        </div>
        <div>
        <form
            className={`form-signin ${formSignInLeft ? 'form-signin-left' : ''}`}
            action=""
            method="post"
            name="form"
          > <label htmlFor="fullname">Full name</label>
            <input className="form-styling" type="text" name="username" placeholder="" />
            <label htmlFor="dlno">E-mail ID </label>
            <input className="form-styling" type="text" name="username" placeholder="" />
            <label htmlFor="password">Password</label>
            <input className="form-styling" type="text" name="password" placeholder="" />
            <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox">
              <span className="ui"></span>Keep me signed in
            </label>
            <div className="btn-animate"> 
              <a className="btn-signin">Login to your account</a>
            </div>
          </form>
          <form
            className={`form-signup ${formSignUpLeft ? 'form-signup-left' : ''}`}
            action=""
            method="post"
            name="form"
          >

            <label htmlFor="fullname">Full name</label>
            <input className="form-styling" type="text" name="email" placeholder="" />
            <label htmlFor="email">Email</label>
            <input className="form-styling" type="text" name="email" placeholder="" />
            <label htmlFor="dlno">Enter Pan Number</label>
            <input className="form-styling" type="text" name="dlno" placeholder="" />
            <label htmlFor="password">Create password</label>
            <input className="form-styling" type="text" name="confirmpassword" placeholder="" />
            <a onClick={handleSignUpClick} className="btn-signup">
              REGISTER
            </a>
          </form>
          <div className={`success ${successLeft ? 'success-left' : ''}`}>
            <svg width="270" height="270" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 60 60" id="check">
              <path fill="#ffffff" d="M40.61,23.03L26.67,36.97L13.495,23.788c-1.146-1.147-1.359-2.936-0.504-4.314 c3.894-6.28,11.169-10.243,19.283-9.348c9.258,1.021,16.694,8.542,17.622,17.81c1.232,12.295-8.683,22.607-20.849,22.042 c-9.9-0.46-18.128-8.344-18.972-18.218c-0.292-3.416,0.276-6.673,1.51-9.578" />
              <div className="successtext">
                <p> New User registered, Kindly check your email for confirmation.</p>
              </div>
            </svg>
          </div>
        </div>
        <div className={`forgot ${forgotFade ? 'forgot-fade' : ''}`}>
          <a href="#">Forgot your password?</a>
        </div>
        <div>
          <div className="cover-photo"></div>
          <div className="profile-photo"></div>
          <h1 className={`welcome ${welcomeLeft ? 'welcome-left' : ''}`}>Welcome, User</h1>
          <a
            className={`btn-goback ${btnGoBackUp ? 'btn-goback-up' : ''}`}
            value="Refresh"
            onClick={() => {
              /* Handle click event */
            }}
          >
            Go back
          </a>
        </div>
      </div>
      <a id="refresh" value="Refresh" onClick={() => { /* Handle click event */ }}>
      <svg
          className="refreshicon"
          version="1.1"
          id="Capa_1"
          x="0px"
          y="0px"
          width="25px"
          height="25px"
          viewBox="0 0 322.447 322.447"
          style={{ enableBackground: 'new 0 0 322.447 322.447' }}
          xmlSpace="preserve"
        >
          <path
            d="M321.832,230.327c-2.133-6.565-9.184-10.154-15.75-8.025l-16.254,5.281C299.785,206.991,305,184.347,305,161.224 c0-84.089-68.41-152.5-152.5-152.5C68.411,8.724,0,77.135,0,161.224s68.411,152.5,152.5,152.5c6.903,0,12.5-5.597,12.5-12.5 c0-6.902-5.597-12.5-12.5-12.5c-70.304,0-127.5-57.195-127.5-127.5c0-70.304,57.196-127.5,127.5-127.5 c70.305,0,127.5,57.196,127.5,127.5c0,19.372-4.371,38.337-12.723,55.568l-5.553-17.096c-2.133-6.564-9.186-10.156-15.75-8.025 c-6.566,2.134-10.16,9.186-8.027,15.751l14.74,45.368c1.715,5.283,6.615,8.642,11.885,8.642c1.279,0,2.582-0.198,3.865-0.614 l45.369-14.738C320.371,243.946,323.965,236.895,321.832,230.327z"
          />
        </svg>
      </a>
    </div>
  );
}

export default SignIn;

