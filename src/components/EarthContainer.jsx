import React from 'react'
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Earth from './Earth';
import {motion} from 'framer-motion'
import Footer from './Footer';

const EarthContainer = ({title}) => {
  return (
<div>
   <Canvas 
    id="three-canvas-container" 
    style={{width:"100%",height:"643px"}}>
    <Suspense fallback={null}>
      <Earth/>
    </Suspense>
   </Canvas>
</div>
  )
}

export default EarthContainer