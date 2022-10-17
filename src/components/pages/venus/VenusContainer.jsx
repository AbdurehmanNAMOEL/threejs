import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from './Venus';
import venusAudio from '../../../audio/venus.ogg'

const VenusContainer = ({title}) => {
  return (
<div>
  <audio src={venusAudio} autoPlay>Venus</audio>
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

export default VenusContainer