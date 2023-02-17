import React from 'react'

const Input = ({inputValue, inputChange}) => {

  const handleChange = e => {
    inputChange(prev => e.target.value)
  }

  return (
    <form className='flex w-auto mb-4 flex-col justify-center'>
      <label className='text-center' htmlFor='text2transform'>Type here:</label>
      <input id='text2transform' type='text' value={inputValue} onChange={handleChange} className='text-center text-lg border-2 mx-2 rounded-md border-cyan-700 bg-transparent'/>
    </form>
  )
}

export default Input
