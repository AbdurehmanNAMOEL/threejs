import React from 'react'
import {OrbitControls} from '@react-three/drei'
import NeputneImage from '../../../assets/neputne.jpg'
import {TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import {motion} from 'framer-motion'

const Neputne = () => {

  const [neputne] =useLoader(TextureLoader,[NeputneImage])
  const neputneRef=useRef()
 
 useFrame(()=>{
    neputneRef.current.rotation.y+=0.0015
 })
  return (
    <>
    <perspectiveCamera/>
    <pointLight position={[1,0,4]} intensity={1} color={"#fff"}/>
    <motion.mesh ref={neputneRef} initial={{x:-250}} animate={{x:0}} >
      <sphereGeometry args={[2.5,52,52]}/>
      <meshStandardMaterial map={neputne}/>
      <OrbitControls minPolarAngle={0} maxPolarAngle={3.14}/>
    </motion.mesh>

    
    
    </>
  )
}

export default Neputne