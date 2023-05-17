import React from 'react'
import { useGlobalContext } from '../context';
import { useRef, useState } from 'react';

const Buttons = () => {
  const {
    resetBtnClicked,
    setResetBtnClicked,
    nextBtnClicked,
    setNextBtnClicked,
    setPlaying,
    playing,
    running,
  } = useGlobalContext();

  const [startBtnText, setStartBtnText] = useState('Start');


  const resetTiles = () => {
    setStartBtnText('Start');
    running.current = false
    setPlaying(false)
    setResetBtnClicked(resetBtnClicked ? false : true)
  };

  const nextBtnClick = () => {
    setStartBtnText('Start');
    running.current = false
    setPlaying(false)
    setNextBtnClicked(nextBtnClicked ? false : true)
  };

  const startBtnClick = () => {
    setStartBtnText('Stop');
    if (!running.current) {
      running.current = true
      setPlaying(true)
    }
  };

  const stopBtnClick = () => {
    setStartBtnText('Start');
    running.current = false;
    setPlaying(false)
  };

  return (
    <div className="center btn-container flex-row">
      <button id="start-btn" className="button buttonBS " onClick={playing ? stopBtnClick : startBtnClick}>{startBtnText}</button>
      <button id="next-btn" className="button margin-left buttonBS" onClick={nextBtnClick}>Next</button>
      <button id="reset-btn" className="button margin-left buttonBS" onClick={resetTiles}>Reset</button>
    </div>
  )
}

export default Buttons