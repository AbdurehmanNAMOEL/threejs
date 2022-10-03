import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Moon from './Moon';
import Footer from './Footer';
import Sun from './Sun';

const SunContainer = ({title}) => {
  return (
    <div>
 <Canvas id="three-canvas-container" style={{width:"100%",height:"643px"}}>
    <Suspense fallback={null}>
      <Sun/>
    </Suspense>
   </Canvas>
    </div>
  )
}

export default SunContainer