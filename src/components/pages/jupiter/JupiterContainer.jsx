import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from './Jupiter';


const JupiterContainer = ({title}) => {
  return (
<div>
   <Canvas 
    id="canvas-container" 
    style={{width:"100%",height:"643px"}}>
    <Suspense fallback={null}>
      <Earth/>
    </Suspense>
   </Canvas>
</div>
  )
}

export default JupiterContainer