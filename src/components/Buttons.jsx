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

  const resetTiles = () => {
    startBtn.current.innerText = "Start"
    running.current = false
    setPlaying(false)
    setResetBtnClicked(resetBtnClicked ? false : true)
  };

  const nextBtnClick = () => {
    startBtn.current.innerText = "Start"
    running.current = false
    setPlaying(false)
    setNextBtnClicked(nextBtnClicked ? false : true)
  };

  const startBtnClick = () => {
    if (!running.current) {
      startBtn.current.innerText = "Stop"
      running.current = true
      setPlaying(true)
    }
  };

  const stopBtnClick = () => {
    startBtn.current.innerText = "Start"
    running.current = false
    setPlaying(false)
  };


  return (
    <div className="center btn-container flex-row">
      <button id="start-btn" className="button buttonBS " ref={startBtn} onClick={playing ? () => { stopBtnClick() } : () => { startBtnClick() }}>Start</button>
      <button id="next-btn" className="button margin-left buttonBS" onClick={() => { nextBtnClick() }}>Next</button>
      <button id="reset-btn" className="button margin-left buttonBS" onClick={() => { resetTiles() }}>Reset</button>
    </div>
  )
}

export default Buttons