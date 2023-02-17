import React, { useState } from 'react'
import BarCodeRenderer from './components/BarCodeRenderer'
import Input from './components/Input'
import { useTheme } from './hooks/useTheme'

const App = () => {
  const [data, setData] = useState('https://github.com/mrsanchez02')

  const { darkMode, toggleTheme } = useTheme()

  return (
      <div className={`flex justify-center flex-col items-center h-screen ${darkMode&&'bg-slate-700 text-white'}`}>
        <header className='mb-10 text-center'>
        <h1 className='text-3xl font-bold'>Barcode Generator</h1>
        <a href='https://github.com/mrsanchez02/barcode-generator-app' target='_blank' rel='noreferrer'>Github code</a>
        </header>
        <Input inputValue={data} inputChange={setData} />
        <BarCodeRenderer text={data} />
        <div className='mt-2'>
          <label htmlFor='darkmode'>Dark mode? </label>
          <input type='checkbox' id='darkmode' onClick={toggleTheme} checked={darkMode} />
        </div>
      </div>
  )
}

export default App
