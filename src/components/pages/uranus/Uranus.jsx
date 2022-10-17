import React from 'react'
import { OrbitControls} from '@react-three/drei'
import UranusImage from '../../../assets/uranus.jpg'
import {TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import {motion} from 'framer-motion'

const Uranus = () => {
  const [uranus] =useLoader(TextureLoader,[UranusImage])
  const planetRef=useRef()

 useFrame(()=>{
  
    planetRef.current.rotation.y+=0.0015
 })
  return (
    <>
    <perspectiveCamera/>
    <pointLight position={[1,0,4]} intensity={1} color={"#fff"}/>
    <motion.mesh ref={planetRef} initial={{x:-250}} animate={{x:0}} >
      <sphereGeometry args={[2.5,32,32]}/>
      <meshStandardMaterial map={uranus}/>
      <OrbitControls minPolarAngle={0} maxPolarAngle={3.14}/>
    </motion.mesh>
    </>
  )
}

export default Uranus