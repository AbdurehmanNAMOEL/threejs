import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from './Earth';
import earthAudio from '../../../audio/earth.ogg'

const EarthContainer = () => {
  return (
<div>
  <audio src={earthAudio} autoPlay>Earth</audio>
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

export default EarthContainer