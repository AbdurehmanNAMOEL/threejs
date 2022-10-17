import React from 'react'
import { OrbitControls } from '@react-three/drei'
import MoonImage from '../../../assets/moon.jpg'
import {TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import {motion} from 'framer-motion'

const Moon = () => {
  const [moon] =useLoader(TextureLoader,[MoonImage])
  const moonRef=useRef()
 

  useFrame(()=>{
  
    moonRef.current.rotation.y+=0.0015
 })
  return (
    <>
    <perspectiveCamera/>
    <pointLight 
      position={[1,0,4]} 
      intensity={1} 
      color={"#fff"}
    />
    <motion.mesh 
    ref={moonRef} 
    initial={{x:-250}} 
    animate={{x:0}}>
      <sphereGeometry args={[2.5,32,32]}/>
      <meshStandardMaterial map={moon}/>
      <OrbitControls minPolarAngle={0} maxPolarAngle={3.14}/>
    </motion.mesh>    
    </>
  )
}

export default Moon