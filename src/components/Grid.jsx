import React, { useEffect } from 'react'
import Tiles from './Tiles';
import Error from '../subcomponents/Error';
import { useGlobalContext } from '../context';

const Grid = () => {
  const {
    gridSize,
    setGridSize,
    newGridSize,
    setNewGridSize,
    maxValue,
    setMaxValue,
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
    } else {
      setGridSize(newGridSize);
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
  }, [gridSize]);

  return (
    <div className='grid-wrapper flex-column'>
      <div style={{ width: gridSize, height: gridSize }} ref={ref}>
        <Tiles dimensions={dimensions} />
        <div className={`${showRules ? 'hidden2' : 'hidden'}`} />
      </div>
      <div>{error && <Error />}</div>
      <div>
        <input type="number" value={newGridSize} onChange={(e) => setNewGridSize(parseInt(e.target.value))} min='300' max={maxValue} ref={inputRef} />
        <button className='button buttonBS margin-left' onClick={handleResizeClick}>Resize Grid</button>
      </div>
    </div>
  )
}

export default Grid