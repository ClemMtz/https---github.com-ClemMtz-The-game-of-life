import React from 'react'
import { useGlobalContext } from '../context';

const Start = () => {
    const {startPlaying, isHover, setIsHover} = useGlobalContext();
  return (
    <div>Start</div>
  )
}

export default Start