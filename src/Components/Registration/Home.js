import {React} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
import { Link } from "react-router-dom"
import Container from '@material-ui/core/Container';
import Hello from "../../assets/happy-face.png"

import "./Home.css";

function Home() {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
      console.log('You are logged out')
    } catch (e) {
      console.log(e.message);
    }
}

  return (
    <Container className='welcomeHome'>
      <div className='welcome_container'>
        <div className='welcome_wrapper'>
          <h4>  </h4>
          <img src={Hello} />
          <div className="button_wrapper">
            <Link className='primary_button' to='/Register'>Register Me</Link>
            <Link className='primary_button' to='/Login'>Login Me In!</Link>
          </div>
        </div>
      </div>
    </Container>
  )
}
  
  export default Home;

