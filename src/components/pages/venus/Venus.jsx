import VenusImage from '../../../assets/venus.jpg'
import React from 'react'
import MyCanvas from '../../threejsConvas/MyCanvas'
import '../../style/home.css'
import venusAudio from '../../../audio/venus.ogg'
const Venus = () => {
  return (
    <div className='earth-container'>
     <audio src={venusAudio} autoPlay/>
     <MyCanvas image={VenusImage}/>
    </div>
  )
}

export default Venus