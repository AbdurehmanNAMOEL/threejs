import NeptuneImage from '../../../assets/neputne.jpg'
import React from 'react'
import MyCanvas from '../../threejsConvas/MyCanvas'
import '../../style/home.css'
import neptuneAudio from '../../../audio/neputen.ogg'
const Neptune = () => {
  return (
    <div className='earth-container'>
     <audio src={neptuneAudio} autoPlay>Neptune</audio>
     <MyCanvas image={NeptuneImage}/>
    </div>
  )
}

export default Neptune