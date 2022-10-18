import SunImage from '../../../assets/sun.jpg'
import React from 'react'
import MyCanvas from '../../threejsConvas/MyCanvas'
import '../../style/home.css'
import sunAudio from '../../../audio/sun.ogg'
const Sun = () => {
  return (
    <div className='earth-container'>
     <audio src={sunAudio} autoPlay/>
     <MyCanvas image={SunImage}/>
    </div>
  )
}

export default Sun