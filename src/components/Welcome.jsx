import React from 'react';
import { useNavigate } from 'react-router-dom';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import '../styles/Welcome.css';

function Welcome() {
    const navigate = useNavigate();

  return (
    <div className='welcome'>
      <div className='welcome-top'>
        <EmojiEmotionsIcon className='welcome-icon' />
        <h2> Welcome </h2>
        <h1> Otunba's Todo App </h1>
        <p> Manage your task very easily! </p>
      </div>

      <div className='welcome-bottom'>
        <button onClick={() => navigate ("/Todo")} className='next-btn'> Next <span className='navi-icons'> <NavigateNextIcon /> <NavigateNextIcon /> </span></button>
      </div>
    </div>
  )
}

export default Welcome;
