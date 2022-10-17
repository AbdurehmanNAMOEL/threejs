import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from './Neputne';
import neptuneAudio from '../../../audio/neputen.ogg'

const NeputneContainer = ({title}) => {
  return (
<div>
  <audio src={neptuneAudio} autoPlay>Neptune</audio>
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