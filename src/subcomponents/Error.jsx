import React, { useEffect } from 'react'
import { useGlobalContext } from '../context';

const Error = () => {
    const{error, setError, maxValue} = useGlobalContext();
  return (
    <div>Error</div>
  )
}

export default Error