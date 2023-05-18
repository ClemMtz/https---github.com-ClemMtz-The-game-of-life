import React from 'react'
import { useGlobalContext } from '../context';


const Buttons = () => {
  const {
    resetBtnClicked,
    setResetBtnClicked,
    nextBtnClicked,
    setNextBtnClicked,
    setPlaying,
    running,
  } = useGlobalContext();


  const resetTiles = () => {
    running.current = false
    setPlaying(false)
    setResetBtnClicked(resetBtnClicked ? false : true)
  };

  const nextBtnClick = () => {
    running.current = false
    setPlaying(false)
    setNextBtnClicked(nextBtnClicked ? false : true)
  };

  const startBtnClick = () => {
    if (!running.current) {
      running.current = true
      setPlaying(true)
    }
  };

  const stopBtnClick = () => {
    running.current = false;
    setPlaying(false)

  };


  return (
    <div className="center btn-container flex-row">
      <button id="start-btn" className="button buttonBS " onClick={startBtnClick}>Start</button>
      <button id="start-btn" className="button buttonBS " onClick={stopBtnClick}>Stop</button>
      <button id="next-btn" className="button margin-left buttonBS" onClick={nextBtnClick}>Next</button>
      <button id="reset-btn" className="button margin-left buttonBS" onClick={resetTiles}>Reset</button>
    </div>
  )
}

export default Buttons