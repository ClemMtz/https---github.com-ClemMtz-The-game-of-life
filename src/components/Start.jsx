import React from 'react'
import { useGlobalContext } from '../context';
import { useState } from 'react';

const Start = () => {
  const { startPlaying, } = useGlobalContext();
  const [isHover, setIsHover] = useState(false);
  return (
    <div className='startScreen-wrapper flex-column center'>
      <h1 className='startScreen-title' onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>Game {isHover ? <span>over</span> : <span> of Life</span>}</h1>
      <button className='startScreen-btn ' onClick={startPlaying}>Start Game</button>
    </div>
  )
}

export default Start