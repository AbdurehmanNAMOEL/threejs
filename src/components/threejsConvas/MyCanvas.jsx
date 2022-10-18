import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MeshContainer from './MeshContainer';
const MyCanvas = ({image}) => {
  return (
   <Canvas   
     id="canvas-container" 
      style={{width:"100%",height:"643px"}}>
    <Suspense fallback={null}> 
    <MeshContainer image={image} />
    </Suspense>
   </Canvas>
  )
}

export default MyCanvas