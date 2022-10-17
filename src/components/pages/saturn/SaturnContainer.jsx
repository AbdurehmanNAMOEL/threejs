import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Sun from './Saturn';
import saturnAudio from '../../../audio/saturn.ogg'
const SaturnContainer = () => {
  return (
    <div>
    <audio src={saturnAudio} autoPlay>Saturn</audio>
    <Canvas id="canvas-container" style={{width:"100%",height:"643px"}}>
      <Suspense fallback={null}>
        <Sun/>
      </Suspense>
    </Canvas>
    </div>
  )
}

export default SaturnContainer