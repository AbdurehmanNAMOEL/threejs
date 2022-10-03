import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Moon from './Moon';
import Footer from './Footer';

const MoonContainer = ({title}) => {
  return (
    <div>
 <Canvas id="three-canvas-container" style={{width:"100%",height:"643px"}}>
    <Suspense fallback={null}>
      <Moon/>
    </Suspense>
   </Canvas>
    </div>
  )
}

export default MoonContainer