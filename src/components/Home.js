import axios from 'axios';
import React, { useEffect } from 'react';
import Login from '../components/Login';
import Browse from '../components/Browse';

const Home = ({ isLogged, setIsLogged }) => {
  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://localhost:5000/user/loginStatus',
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then((response) => {
        setIsLogged(true);
      })
      .catch((error) => {
        setIsLogged(false);
      });
  }, []);

  if (isLogged) {
    return <Browse />;
  } else {
    return <Login />;
  }
};

export default Home;
