import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import { useGlobalContext } from '../context';

const Rules = () => {
  const { closeRules } = useGlobalContext();

  return (
    <div className='rules-wrapper center'>
      <div className='rules flex-column'>
        <RxCross1 className='close-rules' onClick={closeRules} />
        <h1 className='rules-title'>Rules :</h1>
        <h2 className='rules-instrucutons'>- Slect a grid size.</h2>
        <h2 className='rules-instrucutons'>- Add living cells by clicking on grid's tiles.</h2>
        <h2 className='rules-instrucutons'>- Click on 'Next' to display the next cells generation.</h2>
      </div>
    </div>
  )
}

export default Rules