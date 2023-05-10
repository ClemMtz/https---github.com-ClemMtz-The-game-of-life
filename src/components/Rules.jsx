import React from 'react'
import { RxCross1 } from 'react-icons/rx';
import { useGlobalContext } from '../context';

const Rules = () => {
  const {closeRules} = useGlobalContext();
  return (
    <div>Rules</div>
  )
}

export default Rules