import React, { useState } from 'react';
import axios from 'axios';
import validator from 'validator';

const ForgotPassword = () => {
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    var user = {};
    const getEmail = (event) => {
        user.email = event.target.value;
        if (!validator.isEmail(user.email)) {
            setError('Enter valid Email!')
            console.log('User entered ', event.target.value);
        } else {
            setError(null)
        }
        console.log('User entered ', event.target.value);
    };
    const handleClick = () => {
        if (user.email) {
            console.log('User entered ', user);
            axios({
                url: 'http://localhost:5000/user/forgotPassword',
                method: 'post',
                data: user,
            })
                .then((response) => {
                    console.log('Response from API is', response);
                    setMessage(response.data.message);
                })
                .catch((error) => {
                    console.log('error from API is', error);
                    setError(error?.response?.data?.message);
                });
        } else {
            setMessage('Please fill details first');
        }
    };
    return (
        <>
            <div className='container'>
                <h1>Forgot Your Password</h1>
                <div className='form-group'>
                    <label>Email</label>
                    <input
                        type="email"
                        onChange={getEmail}
                        className='form-control'
                        style={{ marginBottom: '10px' }}
                        required
                    />
                </div>
                {message ? (
                    <div className='alert alert-success'>{message}</div>
                ) : error ? (
                    <div className='alert alert-danger'>{error}</div>
                ) : (
                    ''
                )}
                <button type='submit' onClick={handleClick} className='btn btn-primary'>
                    Submit
                </button>
            </div>
        </>
    );
};

export default ForgotPassword;
