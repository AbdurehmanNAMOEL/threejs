import React from 'react'
import MyCanvas from '../../components/threejsConvas/MyCanvas'
import '../../components/style/home.css'
import earth from '../../assets/earth.jpg'
import Paper from '../../components/Paper'
import {FaPlay,FaPause,FaMinusSquare,FaPlusSquare}  from 'react-icons/fa'
import { useState } from 'react'

const PlanetsHome = ({audio,texture,data}) => {
   const [isPlanetRotating,setIsPlanetRotating]= useState(true)
   const [planetRadius,setIsPlanetRadius]= useState(3)

  return (
    <div className='planet-container'>
      <Paper 
        name={data.title}
        type={data.type} 
        about={data.about}
        audio={audio}
      />
      
      <div className='planet-component-container'>
          <MyCanvas 
            planetRadius={planetRadius}
            isPlanetRotating={isPlanetRotating} 
            image={texture? texture:earth}
          />
          <div className='play-planet-motion'>
          <FaMinusSquare onClick={()=>setIsPlanetRadius(prev=>prev-=0.03)} className='minus-icon'/>
          {isPlanetRotating?<FaPause onClick={()=>setIsPlanetRotating(false)} className='pause-button'/>
           :<FaPlay onClick={()=>setIsPlanetRotating(true)} className='play-button'/>}
           <FaPlusSquare onClick={()=>setIsPlanetRadius(prev=>prev+=0.03)} className='plus-icon'/>
          </div>
        </div>

    </div>
  )
}

export default PlanetsHome