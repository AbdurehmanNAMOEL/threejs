import React from 'react'
import { OrbitControls} from '@react-three/drei'
import { TextureLoader } from 'three'
import { useFrame, useLoader } from '@react-three/fiber'
import { useRef } from 'react'
import {motion} from 'framer-motion'
const MeshContainer = ({image,isPlanetRotating,planetRadius}) => {
 const [planet] =useLoader(TextureLoader,[image])
 const planetRef=useRef()

 useFrame(()=>{
  if(isPlanetRotating) planetRef.current.rotation.y+=0.0015
  else planetRef.current.rotation.y+=0
})
  return (
<>
 <perspectiveCamera/>
 <pointLight position={[1,0,4]} intensity={1} color={"#fff"}/>
 <motion.mesh ref={planetRef} initial={{x:-250}} animate={{x:0}} >
  <sphereGeometry args={[planetRadius,32,32]}/>
  <meshStandardMaterial map={planet}/>
  <OrbitControls minPolarAngle={0} maxPolarAngle={3.14}/>
 </motion.mesh>
</>
  )
}

export default MeshContainer