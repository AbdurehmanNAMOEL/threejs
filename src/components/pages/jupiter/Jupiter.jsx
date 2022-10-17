import React from 'react'
import {OrbitControls} from '@react-three/drei'
import JupiterImage from '../../../assets/Jupiter.jpg'
import {TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import {motion} from 'framer-motion'

const Jupiter = () => {

  const [Jupiter] =useLoader(TextureLoader,[JupiterImage])
  const jupiterRef=useRef()
 
 useFrame(()=>{
  
    jupiterRef.current.rotation.y+=0.0015
 })
  return (
    <>
    <perspectiveCamera/>
    <pointLight position={[1,0,4]} intensity={1} color={"#fff"}/>
    <motion.mesh ref={jupiterRef} initial={{x:-250}} animate={{x:0}} >
      <sphereGeometry args={[2.5,52,52]}/>
      <meshStandardMaterial map={Jupiter}/>
      <OrbitControls minPolarAngle={0} maxPolarAngle={3.14}/>
    </motion.mesh>

    
    
    </>
  )
}

export default Jupiter