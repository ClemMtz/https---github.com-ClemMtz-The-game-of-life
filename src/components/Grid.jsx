import React, { useEffect } from 'react'
import Tiles from './Tiles';
import Error from '../subcomponents/Error';
import { useGlobalContext } from '../context';

const Grid = () => {
  const {
    gridSizeWidth,
    setGridSizeWidth,
    newGridSizeWidth,
    setNewGridSizeWidth,
    gridSizeHeight,
    setGridSizeHeight,
    newGridSizeHeight,
    setNewGridSizeHeight,
    maxValue,
    setMaxValue,
    minValue,
    dimensions,
    setDimensions,
    error,
    setError,
    showRules,
    ref,
    inputRef
  } = useGlobalContext();


  const handleResizeClick = (e) => {
    e.preventDefault();

    if (inputRef.current.value > inputRef.current.max) {
      setError(true);
      setGridSize(maxValue);
    } else if (inputRef.current.value < inputRef.current.min) {
      setError(true);
      setGridSize(minValue);
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
        <div className={`${showRules ? 'hidden2' : 'hidden'}`} />
      </div>
      <div>{error && <Error />}</div>
      <div>
        <input type="number" value={newGridSizeWidth} onChange={(e) => setNewGridSizeWidth(parseInt(e.target.value))} min={minValue} max={maxValue} ref={inputRef} />
        <input type="number" value={newGridSizeHeight} onChange={(e) => setNewGridSizeHeight(parseInt(e.target.value))} min={minValue} max={maxValue} ref={inputRef} />
        <button className='button buttonBS margin-left' onClick={handleResizeClick}>Resize Grid</button>
      </div>
    </div>
  )
}

export default Grid