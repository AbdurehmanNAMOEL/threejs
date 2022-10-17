import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from './Jupiter';
import jupiterAudio from '../../../audio/jupiter.ogg'

const JupiterContainer = () => {
  return (
<div>
    <audio src={jupiterAudio} autoPlay>Jupiter</audio>
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