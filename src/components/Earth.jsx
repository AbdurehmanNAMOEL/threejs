import React from 'react'
import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import EarthImage from '../assets/earth.jpg'
import { Clock, TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect,useState } from 'react'
import { useRef } from 'react'
import {motion} from 'framer-motion'
let count=10
const Earth = () => {
  let count =1.2
  const [earth] =useLoader(TextureLoader,[EarthImage])
  const earthRef=useRef()
  const [angle,setAngle]=useState(count)
 useFrame(()=>{
  
    earthRef.current.rotation.y+=0.0015
 })
  return (
    <>
    <perspectiveCamera/>
    <pointLight position={[1,0,4]} intensity={1} color={"#fff"}/>
    <motion.mesh ref={earthRef} initial={{x:-250}} animate={{x:0}} >
      <sphereGeometry args={[2.5,52,52]}/>
      <meshStandardMaterial map={earth}/>
      <OrbitControls minPolarAngle={0} maxPolarAngle={3.14}/>
    </motion.mesh>

    
    
    </>
  )
}

export default Earth