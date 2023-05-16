import React, { useEffect } from 'react'
import { useGlobalContext } from '../context';


const Error = () => {
  const { error, setError, maxValue, minValue, } = useGlobalContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setError(false)
    }, 4000)
    return () => clearTimeout(timeout)
  }, [error]);


  return (
    <p className='error'>Value must be more than or equal to {minValue} less or equal than {maxValue}</p>
  )
}

export default Error