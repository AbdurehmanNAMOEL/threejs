import React from 'react'
import {OrbitControls} from '@react-three/drei'
import VenusImage from '../../../assets/venus.jpg'
import {TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import {motion} from 'framer-motion'

const Venus = () => {

  const [venus] =useLoader(TextureLoader,[VenusImage])
  const venusRef=useRef()
 
 useFrame(()=>{
    venusRef.current.rotation.y+=0.0015
 })
  return (
    <>
    <perspectiveCamera/>
    <pointLight position={[1,0,4]} intensity={1} color={"#fff"}/>
    <motion.mesh ref={venusRef} initial={{x:-250}} animate={{x:0}} >
      <sphereGeometry args={[2.5,52,52]}/>
      <meshStandardMaterial map={venus}/>
      <OrbitControls minPolarAngle={0} maxPolarAngle={3.14}/>
    </motion.mesh>

    
    
    </>
  )
}

export default Venus