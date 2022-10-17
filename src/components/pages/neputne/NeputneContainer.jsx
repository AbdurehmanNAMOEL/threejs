import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from './Neputne';


const NeputneContainer = ({title}) => {
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

export default NeputneContainer