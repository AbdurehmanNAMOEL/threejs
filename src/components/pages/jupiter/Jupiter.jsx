import JupiterImage from '../../../assets/Jupiter.jpg'
import React from 'react'
import MyCanvas from '../../threejsConvas/MyCanvas'
import '../../style/home.css'
import jupiterAudio from '../../../audio/jupiter.ogg'
const Jupiter = () => {
  return (
    <div className='earth-container'>
     <audio src={jupiterAudio} autoPlay>Jupiter</audio>
     <MyCanvas image={JupiterImage}/>
    </div>
  )
}

export default Jupiter