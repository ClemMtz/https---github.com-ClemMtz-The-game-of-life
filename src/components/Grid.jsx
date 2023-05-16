import React, { useEffect, useState, useRef } from 'react'
import Tiles from './Tiles';
import Error from '../subcomponents/Error';
import { useGlobalContext } from '../context';

const Grid = () => {
  const {
    maxValue,
    setMaxValue,
    minValue,
    dimensions,
    setDimensions,
    error,
    setError
  } = useGlobalContext();

  const [gridSizeWidth, setGridSizeWidth] = useState(300);
  const [gridSizeHeight, setGridSizeHeight] = useState(300);
  const [newGridSizeWidth, setNewGridSizeWidth] = useState(gridSizeWidth);
  const [newGridSizeHeight, setNewGridSizeHeight] = useState(gridSizeHeight);
  const ref = useRef('');
  const inputHeight = useRef('');
  const inputWidth = useRef('');

  const handleResizeClick = (e) => {
    e.preventDefault();

    if (inputHeight.current.value > inputHeight.current.max) {
      setError(true);
      setGridSizeHeight(maxValue);
    } else if (inputHeight.current.value < inputHeight.current.min) {
      setError(true);
      setGridSizeHeight(minValue);
    } else if (inputWidth.current.value > inputWidth.current.max) {
      setError(true);
      setGridSizeWidth(maxValue);
    } else if (inputWidth.current.value < inputWidth.current.min) {
      setError(true);
      setGridSizeWidth(minValue);
    } else {
      setGridSizeWidth(newGridSizeWidth);
      setGridSizeHeight(newGridSizeHeight)
      setError(false)
    }
  };


  useEffect(() => {
    if (window.innerWidth < 900) {
      setMaxValue(400)
    } else {
      setMaxValue(500)
    }
  }, [window.innerWidth]);

  useEffect(() => {
    const containerHeight = ref.current.clientHeight - 16;
    const conatinerWidth = ref.current.clientWidth - 16;
    const tileContainerDimensions = { height: containerHeight, width: conatinerWidth }
    setDimensions(tileContainerDimensions)
  }, [gridSizeWidth, gridSizeHeight]);

  return (
    <div className='grid-wrapper flex-column'>
      <div style={{ width: gridSizeWidth, height: gridSizeHeight }} ref={ref}>
        <Tiles dimensions={dimensions} />
      </div>
      <div>{error && <Error />}</div>
      <div className='inputs-buttonResizeGrid-container'>
        <input className='margin inputWidth' type="number" value={newGridSizeWidth} onChange={(e) => setNewGridSizeWidth(parseInt(e.target.value))} min={minValue} max={maxValue} ref={inputWidth} />
        <div className='multiplication-sign margin'>X</div>
        <input className='margin inputHeight' type="number" value={newGridSizeHeight} onChange={(e) => setNewGridSizeHeight(parseInt(e.target.value))} min={minValue} max={maxValue} ref={inputHeight} />
        <button className='button buttonBS margin' onClick={handleResizeClick}>Resize Grid</button>
      </div>
    </div >
  )
}

export default Grid