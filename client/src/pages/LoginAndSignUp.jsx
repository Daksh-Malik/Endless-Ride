// App.js
import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HamburgerMenu from '../components/Hamburger';

function LoginAndSignup() {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [loggedInUsername, setLoggedInUsername] = useState(
    localStorage.getItem('loggedInUsername') || ''
  );
  const [isLogged, setIsLogged] = useState(
    localStorage.getItem('isLogged') === 'true'
  );
  const [isLoginForm, setIsLoginForm] = useState(false);
  const [isUserRegistered, setIsUserRegistered] = useState(
    localStorage.getItem('isUserRegistered') === 'true'
  );
  const [formVisible, setFormVisible] = useState(!isLogged);

  const handleLogin = () => {
    if (isLoginForm) {
      if (isUserRegistered) {
        setLoggedInUsername(loginUsername);
        setIsLogged(true);
        setFormVisible(false);
      } else {
        setLoggedInUsername('');
      }
    } else {
      setLoggedInUsername(signupUsername);
      setIsUserRegistered(true);
      setIsLogged(true);
      setFormVisible(false);
    }
  };

  const handleLogout = () => {
    setLoggedInUsername('');
    setIsLogged(false);
    setFormVisible(true);
    localStorage.removeItem('loggedInUsername');
    localStorage.setItem('isLogged', false);
  };

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  useEffect(() => {
    localStorage.setItem('loggedInUsername', loggedInUsername);
    localStorage.setItem('isLogged', isLogged);
    localStorage.setItem('isUserRegistered', isUserRegistered);
  }, [loggedInUsername, isLogged, isUserRegistered]);

  return (
    <>
      <Navbar />
      <HamburgerMenu/>
      <div class="login-container">
        {formVisible && (
          <div>
            {isLoginForm ? (
              <div class="login-form">
                <h2 class="login-head">LOGIN</h2>
                <input
                  type="text"
                  placeholder="Username"
                  class="form-inputs"
                  value={loginUsername}
                  onChange={(e) => setLoginUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  class="form-inputs"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button class="login-btn" onClick={handleLogin}>LOGIN</button>
                <p class="login-text">
                  Don't have an account?{' '}
                  <button class="switch-btn" onClick={toggleForm}>Switch to Sign Up</button>
                </p>
              </div>
            ) : (
              <div class="login-form">
                <h2 class="login-head">SIGN UP</h2>
                <input
                  type="text"
                  placeholder="Username"
                  class="form-inputs"
                  value={signupUsername}
                  onChange={(e) => setSignupUsername(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Password"
                  class="form-inputs"
                  value={signupPassword}
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
                <button class="login-btn" onClick={handleLogin}>SIGN UP</button>
                <p class="login-text">
                  Already have an account?{' '}
                  <button class="switch-btn" onClick={toggleForm}>Switch to Login</button>
                </p>
              </div>
            )}
          </div>
        )}
        {isLogged && (
          <div>
            <p class="login-welcome">Welcome, {loggedInUsername}!</p>
            <button class="login-btn logout-btn" onClick={handleLogout}>Logout</button>
          </div>
        )}
        <div>
          <p>{isUserRegistered ? '' : 'This username is not registered. Please SignUp'}</p>
        </div>
      </div>
    </>
  );
}

export default LoginAndSignup;
