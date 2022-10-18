import React from 'react'
import EarthImage from '../../../assets/earth.jpg'
import MyCanvas from '../../threejsConvas/MyCanvas'
import '../../style/home.css'
import earthAudio from '../../../audio/earth.ogg'
const Earth = () => {
  return (
    <div className='earth-container'>
     <audio src={earthAudio} autoPlay>Earth</audio>
     <MyCanvas image={EarthImage}/>
    </div>
  )
}

export default Earth