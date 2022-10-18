import React from 'react'
import MyCanvas from '../../components/threejsConvas/MyCanvas'
import '../../components/style/home.css'
import earth from '../../assets/earth.jpg'
const PlanetsHome = ({audio,texture}) => {
   
  return (
    <div className='planet-container'>
        <audio src={audio} autoPlay/>
        <MyCanvas image={texture? texture:earth}/>
    </div>
  )
}

export default PlanetsHome