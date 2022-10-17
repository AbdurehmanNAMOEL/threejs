import React from 'react'
import { OrbitControls} from '@react-three/drei'
import SaturnImage from '../../../assets/saturn.jpg'
import {TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import {motion} from 'framer-motion'

const Saturn = () => {
  const [saturn] =useLoader(TextureLoader,[SaturnImage])
  const saturnRef=useRef()

 useFrame(()=>{
  
    saturnRef.current.rotation.y+=0.0015
 })
  return (
    <>
    <perspectiveCamera/>
    <pointLight position={[1,0,4]} intensity={1} color={"#fff"}/>
    <motion.mesh ref={saturnRef} initial={{x:-250}} animate={{x:0}} >
      <sphereGeometry args={[2.5,32,32]}/>
      <meshStandardMaterial map={saturn}/>
      <OrbitControls minPolarAngle={0} maxPolarAngle={3.14}/>
    </motion.mesh>
    </>
  )
}

export default Saturn