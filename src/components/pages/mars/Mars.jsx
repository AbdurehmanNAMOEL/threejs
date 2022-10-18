import MarsImage from '../../../assets/mars.jpg'
import React from 'react'
import MyCanvas from '../../threejsConvas/MyCanvas'
import '../../style/home.css'
import marsAudio from '../../../audio/mars.ogg'
const Mars = () => {
  return (
    <div className='earth-container'>
     <audio src={marsAudio} autoPlay>Mars</audio>
     <MyCanvas image={MarsImage}/>
    </div>
  )
}

export default Mars