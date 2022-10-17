import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Sun from './Sun';
import sunAudio from '../../../audio/sun.ogg'
const SunContainer = () => {
  return (
    <div>
    <audio src={sunAudio} autoPlay>Sun</audio>
    <Canvas id="canvas-container" style={{width:"100%",height:"643px"}}>
    <Suspense fallback={null}>
      <Sun/>
    </Suspense>
   </Canvas>
    </div>
  )
}

export default SunContainer