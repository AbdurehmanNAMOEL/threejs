import UranusImage from '../../../assets/uranus.jpg'
import React from 'react'
import MyCanvas from '../../threejsConvas/MyCanvas'
import '../../style/home.css'
import uranusAudio from '../../../audio/uranus.ogg'
const Uranus = () => {
  return (
    <div className='earth-container'>
     <audio src={uranusAudio} autoPlay/>
     <MyCanvas image={UranusImage}/>
    </div>
  )
}

export default Uranus