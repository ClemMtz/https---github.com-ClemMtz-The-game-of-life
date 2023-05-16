import React, { useState, useContext, useRef } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
   const [startGame, setStartGame] = useState(false);
   const [maxValue, setMaxValue] = useState(0);
   const [minValue] = useState(300);
   const [dimensions, setDimensions] = useState({});
   const [error, setError] = useState(false);
   const [showRules, setShowRules] = useState(false);
   const [resetBtnClicked, setResetBtnClicked] = useState(false);
   const [nextBtnClicked, setNextBtnClicked] = useState(false);
   const [playing, setPlaying] = useState(false);
   const running = useRef(false);
   const [tilesArr, setTilesArr] = useState([]);


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
         running,
         tilesArr,
         setTilesArr
      }}
   >
      {children}
   </AppContext.Provider>
};

export const useGlobalContext = () => {
   return useContext(AppContext)
};

export { AppContext, AppProvider }