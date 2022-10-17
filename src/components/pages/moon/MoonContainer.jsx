import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Moon from './Moon';
import moonAudio from '../../../audio/moon.ogg'
const MoonContainer = () => {
  return (
    <div>
    <audio src={moonAudio} autoPlay>Moon</audio>
     <Canvas id="canvas-container" style={{width:"100%",height:"643px"}}>
      <Suspense fallback={null}>
        <Moon/>
      </Suspense>
     </Canvas>
    </div>
  )
}

export default MoonContainer