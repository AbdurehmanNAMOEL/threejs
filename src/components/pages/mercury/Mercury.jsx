import MercuryImage from '../../../assets/mercury.jpg'
import React from 'react'
import MyCanvas from '../../threejsConvas/MyCanvas'
import '../../style/home.css'
import mercuryAudio from '../../../audio/mercury.ogg'
const Mercury = () => {
  return (
    <div className='earth-container'>
     <audio src={mercuryAudio} autoPlay>Mercury</audio>
     <MyCanvas image={MercuryImage}/>
    </div>
  )
}

export default Mercury