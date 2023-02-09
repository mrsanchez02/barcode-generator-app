import React, { useState } from 'react'
import BarCodeRenderer from './components/BarCodeRenderer'
import Input from './components/Input'

const App = () => {

  const [data, setData] = useState('https://github.com/mrsanchez02')

  return (
    <div className='flex justify-center flex-col items-center h-screen'>
      <h1 className='text-3xl font-bold undelrine mb-10'>Barcode Generator</h1>
      <Input inputValue={data} inputChange={setData} />
      <BarCodeRenderer text={data}/>
    </div>
  )
}

export default App
