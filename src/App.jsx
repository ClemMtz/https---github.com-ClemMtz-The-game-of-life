import './App.css'
import { Home, Rules, Start } from './components';
import { RxCross1 } from 'react-icons/rx';
import { BsQuestionLg } from 'react-icons/bs';
import { useGlobalContext } from './context';

function App() {
  const { showRules, openRules, startGame, backToStartScreen } = useGlobalContext();


  return (
    <>
      {
        startGame ?

          <div>
            <div className='icons'>
              <div className='icon1'><BsQuestionLg onClick={openRules} /></div>
              <div><RxCross1 onClick={backToStartScreen} className='icon2' /></div>
            </div>
            {showRules && <Rules />}
            <Home />
          </div>
          :
          <Start />
      }
    </>
  )
}

export default App
