import React, { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import PlanetCard from './PlanetCard';
import { useNavigate } from 'react-router-dom';
const PlanetCanvas = ({image,title,audio,setAudio,setTexture}) => {
    
const navigate=useNavigate()
const handleClick=(e)=>{
  let planetName =e.target.name     
  navigate(`/planet`)
 setTexture(image)
  setAudio(audio)
  
}
  return (
    <div className='canvas-container'>
    <Canvas 
     title={title}  
     id="three-canvas-container" 
     style={{width:"200px",height:"200px"}}
    >
    <Suspense fallback={null}> 
    <PlanetCard image={image} />
    </Suspense>
   </Canvas>
  <button 
   name={title}
   onClick={handleClick}>
   </button>
   </div>
  )
}

export default PlanetCanvas