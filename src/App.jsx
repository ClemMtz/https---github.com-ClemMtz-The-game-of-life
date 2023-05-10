import './App.css'
import { Home, Rules, Start } from './components';
import { RxCross1 } from 'react-icons/rx';
import { BsQuestionLg } from 'react-icons/bs';
import { useGlobalContext } from './context';

function App() {
 const {showRules,openRules, startGame, backToStartScreen} = useGlobalContext();


  return (
    <>
      <Rules/>
      <Home/>
      <Start/>
    </>
  )
}

export default App
