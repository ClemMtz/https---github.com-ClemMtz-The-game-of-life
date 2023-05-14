import React, { useState, useContext, useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   const [startGame, setStartGame] = useState(false);
   const [gridSizeWidth, setGridSizeWidth] = useState(300);
   const [gridSizeHeight, setGridSizeHeight] = useState(300);
   const [newGridSizeWidth, setNewGridSizeWidth] = useState(gridSizeWidth);
   const [newGridSizeHeight, setNewGridSizeHeight] = useState(gridSizeHeight);
   const [maxValue, setMaxValue] = useState(0);
   const [minValue, setMinValue] = useState(300);
   const [dimensions, setDimensions] = useState({});
   const [tilesArr, setTilesArr] = useState([]);
   const [clicker, setClicker] = useState(false);
   const [error, setError] = useState(false);
   const [showRules, setShowRules] = useState(false);
   const [resetBtnClicked, setResetBtnClicked] = useState(false);
   const [nextBtnClicked, setNextBtnClicked] = useState(false);
   const [playing, setPlaying] = useState(false);
   const ref = useRef(false);
   const inputHeight = useRef('');
   const inputWidth = useRef('');
   const running = useRef(false);
   const startBtn = useRef();
   const [isHover, setIsHover] = useState(false);

   const openRules = () => {
      setShowRules(true)
   };

   const closeRules = () => {
      setShowRules(false)
   };

   const startPlaying = () => {
      setStartGame(true)
   };

   const backToStartScreen = () => {
      setStartGame(false)
   };


   return <AppContext.Provider
      value={{
         startPlaying,
         backToStartScreen,
         startGame,
         setStartGame,
         tilesArr,
         setTilesArr,
         clicker,
         setClicker,
         gridSizeWidth,
         setGridSizeWidth,
         newGridSizeWidth,
         setNewGridSizeWidth,
         gridSizeHeight,
         setGridSizeHeight,
         newGridSizeHeight,
         setNewGridSizeHeight,
         maxValue,
         minValue,
         setMaxValue,
         dimensions,
         setDimensions,
         error,
         setError,
         openRules,
         closeRules,
         showRules,
         resetBtnClicked,
         setResetBtnClicked,
         nextBtnClicked,
         setNextBtnClicked,
         playing,
         setPlaying,
         ref,
         inputWidth,
         inputHeight,
         running,
         startBtn,
         isHover,
         setIsHover,
      }}
   >
      {children}
   </AppContext.Provider>
};

export const useGlobalContext = () => {
   return useContext(AppContext)
};

export { AppContext, AppProvider }