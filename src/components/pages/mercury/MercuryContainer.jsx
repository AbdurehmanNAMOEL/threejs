import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from './Mercury';
import mercuryAudio from '../../../audio/mercury.ogg'

const MercuryContainer = ({title}) => {
  return (
<div>
     <audio src={mercuryAudio} autoPlay>Mercury</audio>
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

export default MercuryContainer