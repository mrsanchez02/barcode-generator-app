import React from 'react'
import Barcode from 'react-barcode'

const BarCodeRenderer = ({text}) => {

  if(text.trim()==='') return <p>Please start typing something!</p>
  return (
    <>
      <Barcode value={text} renderer='img'/>
    </>
  )
}

export default BarCodeRenderer
