import './App.css';
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pagenotfound from './components/Pagenotfound';
import ForgotPassword from './components/ForgotPassword';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/signup' element={<Signup />}></Route>
        <Route exact path='/login' element={<Login />}></Route>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/*' element={<Pagenotfound />}></Route>
        <Route
          exact
          path='/forgotPassword'
          element={<ForgotPassword />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
