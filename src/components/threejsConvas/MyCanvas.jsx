import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MeshContainer from './MeshContainer';
const MyCanvas = ({image,isPlanetRotating,planetRadius}) => {
  return (
   <Canvas  
     className='w-[200px] h-[200px] md:w-[500px] md:h-[500px]' 
     id="canvas-container" 
     style={{width:"500px",height:"500px"}}>
    <Suspense fallback={null}> 
    <MeshContainer 
      image={image} 
      isPlanetRotating={isPlanetRotating}
      planetRadius={planetRadius} 
    />
    </Suspense>
   </Canvas>
  )
}

export default MyCanvas