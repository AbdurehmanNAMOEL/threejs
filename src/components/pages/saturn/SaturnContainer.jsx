import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Sun from './Saturn';

const SaturnContainer = () => {
  return (
    <div>
 <Canvas id="canvas-container" style={{width:"100%",height:"643px"}}>
    <Suspense fallback={null}>
      <Sun/>
    </Suspense>
   </Canvas>
    </div>
  )
}

export default SaturnContainer