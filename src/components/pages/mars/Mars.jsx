import React from 'react'
import {OrbitControls} from '@react-three/drei'
import MarsImage from '../../../assets/mars.jpg'
import {TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import {motion} from 'framer-motion'

const Mars = () => {

  const [mars] =useLoader(TextureLoader,[MarsImage])
  const marsRef=useRef()
 
 useFrame(()=>{
    marsRef.current.rotation.y+=0.0015
 })
  return (
    <>
    <perspectiveCamera/>
    <pointLight position={[1,0,4]} intensity={1} color={"#fff"}/>
    <motion.mesh ref={marsRef} initial={{x:-250}} animate={{x:0}} >
      <sphereGeometry args={[2.5,52,52]}/>
      <meshStandardMaterial map={mars}/>
      <OrbitControls minPolarAngle={0} maxPolarAngle={3.14}/>
    </motion.mesh>

    </>
  )
}

export default Mars