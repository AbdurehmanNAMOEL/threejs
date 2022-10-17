import React, { useState } from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import PlanetCard from './PlanetCard';
import { useNavigate } from 'react-router-dom';
const PlanetCanvas = ({image,title,audio}) => {
    const navigate=useNavigate()
    const [isAudioOn,setAudio]=useState(false)
    const handleClick=(e)=>{
        console.log(e.target.name===title);
        if(e.target.name===title){
          setAudio(true)
          navigate(`/${e.target.name}`)
        }else setAudio(false)
      
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
   <span>
   {title}
    </span>
   </button>
   </div>
  )
}

export default PlanetCanvas