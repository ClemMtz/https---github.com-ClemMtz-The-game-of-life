import React from 'react'
import { useGlobalContext } from '../context';

const Buttons = () => {
 const {
        resetBtnClicked, 
        setResetBtnClicked, 
        nextBtnClicked, 
        setNextBtnClicked, 
        setPlaying, 
        playing, 
        running, 
        startBtn
        } = useGlobalContext();
        
  return (
    <div>Buttons</div>
  )
}

export default Buttons