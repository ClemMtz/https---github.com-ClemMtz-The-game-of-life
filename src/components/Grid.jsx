import React, { useEffect} from 'react'
import Tiles from './Tiles';
import Error from '../subcomponents/Error';
import { useGlobalContext} from '../context';

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

  return (
    <div>Grid</div>
  )
}

export default Grid