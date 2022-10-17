import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Uranus from './Uranus';
import uranusAudio from '../../../audio/uranus.ogg'
const UranusContainer = () => {
  return (
    <div>
    <audio src={uranusAudio} autoPlay>Uranus</audio>
    <Canvas id="canvas-container" style={{width:"100%",height:"643px"}}>
    <Suspense fallback={null}>
      <Uranus/>
    </Suspense>
   </Canvas>
    </div>
  )
}

export default UranusContainer