import React from 'react'
import { useGlobalContext } from '../context';

const Start = () => {
  const { startPlaying, isHover, setIsHover } = useGlobalContext();
  return (
    <div className='startScreen-wrapper flex-column center'>
      <h1 className='startScreen-title' onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>Game {isHover ? <span>over</span> : <span> of Life</span>}</h1>
      <button className='startScreen-btn ' onClick={startPlaying}>Start Game</button>
    </div>
  )
}

export default Start