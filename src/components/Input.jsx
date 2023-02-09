import React from 'react'

const Input = ({inputValue, inputChange}) => {

  const handleChange = e => {
    inputChange(prev => e.target.value)
  }

  return (
    <div className='flex w-auto mb-4 flex-col justify-center'>
      <label className='text-center'>Type here:</label>
      <input type="text" value={inputValue} onChange={handleChange} className='text-center text-lg border-2 mx-2 rounded-md border-cyan-700'/>
    </div>
  )
}

export default Input
