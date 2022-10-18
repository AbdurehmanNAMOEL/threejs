import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MeshContainer from './MeshContainer';
const MyCanvas = ({image}) => {
  return (
   <Canvas   
     id="canvas-container" 
     style={{width:"500px",height:"500px"}}>
    <Suspense fallback={null}> 
    <MeshContainer image={image} />
    </Suspense>
   </Canvas>
  )
}

export default MyCanvas