import React, { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import PlanetCard from './PlanetCard';
import { useNavigate } from 'react-router-dom';
const PlanetCanvas = ({image,title,type,about,audio,setAudio,setTexture,setData}) => {
    console.log(title,type,about)
const navigate=useNavigate()
const handleClick=(e)=>{  
  navigate(`/planet`)
 setTexture(image)
  setAudio(audio)
  setData({title,type,about})
  
}
  return (
    <div className='canvas-container'>
    <Canvas 
     title={title}  
     id="three-canvas-container" 
     style={{width:"150px",height:"150px"}}
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