import MoonImage from '../../../assets/moon.jpg'
import React from 'react'
import MyCanvas from '../../threejsConvas/MyCanvas'
import '../../style/home.css'
import moonAudio from '../../../audio/moon.ogg'
const Moon = () => {
  return (
    <div className='earth-container'>
     <audio src={moonAudio} autoPlay>Moon</audio>
      <MyCanvas image={MoonImage}/>
    </div>
  )
}

export default Moon