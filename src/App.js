import './App.css';
import { useState } from 'react';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagenotfound from './components/Pagenotfound';
import ForgotPassword from './components/ForgotPassword';
import AddVideo from './components/AddVideo';
import Profile from './components/Profile';
import Browse from './components/Browse';
import Playvideo from './components/PlayVideo';

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.token ? true : false);
  return (
    <Router>
      <Navbar isLogged={isLogged} />
      <Routes>
        <Route
          exact
          path='/'
          element={<Home isLogged={isLogged} setIsLogged={setIsLogged} />}
        ></Route>
        <Route
          exact
          path='/login'
          element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />}
        ></Route>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/addVideo' element={<AddVideo />}></Route>
        <Route exact path='/browse' element={<Browse />} />
        <Route exact path='/profile' element={<Profile />}></Route>
        <Route
          exact
          path='/forgotPassword'
          element={<ForgotPassword />}
        ></Route>

        <Route path='/watch/:videoid' element={<Playvideo />} />
        <Route exact path='/*' element={<Pagenotfound />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
