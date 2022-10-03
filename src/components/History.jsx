import React from 'react'
import '../components/style/history.css'
const History = ({name,size,weight,distance}) => {
  return (
    <div className='history-container'>
        <div className="box">{name}</div>
        <div className="box">{weight}</div>
        <div className="box">{size}</div>
        <div className="box">{distance}</div>
    </div>
  )
}

export default History