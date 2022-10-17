import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Mars from './Mars';
import marsAudio from '../../../audio/mars.ogg'

const EarthContainer = ({title}) => {
  return (
<div>
   <audio src={marsAudio} autoPlay>Mars</audio>
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