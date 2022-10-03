import React from 'react'
import { Html, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import SunImage from '../assets/sun.jpg'
import { Clock, TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useEffect,useState } from 'react'
import { useRef } from 'react'
import {motion} from 'framer-motion'
let count=10
const Sun = () => {
  let count =1.2
  const [sun] =useLoader(TextureLoader,[SunImage])
  const sunRef=useRef()
  const [angle,setAngle]=useState(count)
 useFrame(()=>{
  
    sunRef.current.rotation.y+=0.0015
 })
  return (
    <>
    <perspectiveCamera/>
    <pointLight position={[1,0,4]} intensity={1} color={"#fff"}/>
    <motion.mesh ref={sunRef} initial={{x:-250}} animate={{x:0}} >
      <sphereGeometry args={[2.5,32,32]}/>
      <meshStandardMaterial map={sun}/>
      <OrbitControls minPolarAngle={0} maxPolarAngle={3.14}/>
    </motion.mesh>
    </>
  )
}

export default Sun