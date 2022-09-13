import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import validator from 'validator';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = ({ isLogged, setIsLogged }) => {
  const history = useNavigate();
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  var user = {};
  const handleClick = () => {
    setIsLogged(true);
    if (user.email && user.password) {
      console.log('User entered ', user);

      axios({
        url: 'http://localhost:5000/user/login',
        method: 'post',
        data: user,
      })
        .then((response) => {
          console.log('Response from API is', response);
          console.log('Header Authorization', response.headers.authorization);
          localStorage.setItem('token', response.headers.authorization);
          setMessage(response.data.message);
          history('/profile');
        })
        .catch((error) => {
          console.log('error from API is', error);
          setError(error.response.data.message);
        });
    } else {
      setMessage('Please fill details first');
    }
  };
  const getEmail = (event) => {
    user.email = event.target.value;
    if (!validator.isEmail(user.email)) {
      setError('Enter valid Email!');
      console.log('User entered ', event.target.value);
    } else {
      setError(null);
    }
    console.log('User entered ', event.target.value);
  };

  const getPassword = (event) => {
    user.password = event.target.value;
  };
  return (
    !isLogged && (
      <div className='container'>
        <div className='col' style={{ textAlign: 'center' }}>
          <h1>Login Component</h1>
          <div className='form-group'>
            <label>Email</label>
            <input
              type='email'
              onChange={getEmail}
              className='form-control'
              required
            />
          </div>
          <div className='form-group'>
            <label>Password</label>
            <input
              type='password'
              onChange={getPassword}
              className='form-control'
            />
          </div>
          {message ? (
            <div className='alert alert-success'>{message}</div>
          ) : error ? (
            <div className='alert alert-danger'>{error}</div>
          ) : (
            ''
          )}
          <button
            type='submit'
            onClick={handleClick}
            className='btn btn-primary'
          >
            Submit
          </button>
          <div className='linkToLogin'>
            <Link to='/forgotPassword'>Forgot Your Password?</Link>
            <Link to='/signup'>New User ?</Link>
          </div>
        </div>
      </div>
    )
  );
};

export default Login;
