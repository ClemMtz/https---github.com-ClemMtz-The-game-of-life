import React, { useEffect} from 'react'
import { useGlobalContext } from '../context';

const Tiles = ({dimensions}) => {
    const {
         tilesArr,
         setTilesArr,
         gridSize, 
         clicker, 
         setClicker, 
         resetBtnClicked,
         nextBtnClicked, 
         playing, 
         setPlaying, 
         running 
        } = useGlobalContext();
        
  return (
    <div>Tiles</div>
  )
}

export default Tiles