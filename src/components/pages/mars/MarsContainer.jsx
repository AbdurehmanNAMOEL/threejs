import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Mars from './Mars';


const EarthContainer = ({title}) => {
  return (
<div>
   <Canvas 
    id="canvas-container" 
    style={{width:"100%",height:"643px"}}>
    <Suspense fallback={null}>
      <Mars/>
    </Suspense>
   </Canvas>
</div>
  )
}

export default EarthContainer