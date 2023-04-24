import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

import { useNavigate } from 'react-router-dom';

function HeroSection() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform any necessary login actions
    navigate('/login');
  };

  return (
    <div className='hero-container'>
      <video src='/videos/video-3.mp4' autoPlay loop muted />
      <h1>Drone surveillance made easy</h1>
      <p>Elevate your security with our advanced drone surveillance technology</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={handleLogin}
        >
          Login
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Register
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
