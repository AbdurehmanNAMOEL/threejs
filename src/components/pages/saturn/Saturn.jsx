import SaturnImage from '../../../assets/saturn.jpg'
import React from 'react'
import MyCanvas from '../../threejsConvas/MyCanvas'
import '../../style/home.css'
import saturnAudio from '../../../audio/saturn.ogg'
const Mars = () => {
  return (
    <div className='earth-container'>
     <audio src={saturnAudio} autoPlay/>
     <MyCanvas image={SaturnImage}/>
    </div>
  )
}

export default Mars