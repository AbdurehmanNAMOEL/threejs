import React, { useRef } from "react";
import { Canvas,useFrame,useLoader} from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";
import { TextureLoader } from 'three'
import { planetSizeData } from "../components/utils/planetData";
import SunTexture from '../assets/sun.jpg'
// import "./styles.css";

 const SolarSystem=()=> {
  return (
    <div className="w-full h-[100vh]">
      <Canvas 
       camera={{ position: [0, 20, 25], fov: 45 }}>
        <Stars/>
        <Sun/>
        {planetSizeData.map((planet,index) => (
          <Planet image={planet.image} planet={planet} key={index} />
        ))}
        <Lights />
        <OrbitControls />
      </Canvas>
    </div>
  );
}
function Sun() {
    const planetRef=useRef()
     useFrame(()=>{
     planetRef.current.rotation.y+=0.015
   })
    const [planet] =useLoader(TextureLoader,[SunTexture])
  return (
    <mesh ref={planetRef}>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshStandardMaterial map={planet} />
    </mesh>
  );
}
function Planet({ planet: { image, xRadius, zRadius,size} }) {
  const planetRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime(); // what is the main purpose of this
    const x = xRadius * Math.sin(t); // and this
    const z = zRadius * Math.cos(t);// and this as well
    planetRef.current.position.x = x;
    planetRef.current.position.z = z;
    planetRef.current.rotation.y+=0.15
  });
   const [planet] =useLoader(TextureLoader,[image])
  return (
    <>
      <mesh ref={planetRef}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial map={planet} />
         <OrbitControls minPolarAngle={0} maxPolarAngle={3.14}/>
      </mesh>
      <Ecliptic  xRadius={xRadius} zRadius={zRadius} />
    </>
  );
}

function Lights() {
  return (
    <>
      <ambientLight />
      <pointLight position={[0, 0, 0]} />
    </>
  );
}

function Ecliptic({ xRadius = 1, zRadius = 1 }) {
  const points = [];
  for (let index = 0; index < 64; index++) {
    const angle = (index / 64) * 2 * Math.PI;
    const x = xRadius * Math.cos(angle);
    const z = zRadius * Math.sin(angle);
    points.push(new THREE.Vector3(x, 0, z));
  }

  points.push(points[0]);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);
  return (
    <line geometry={lineGeometry}>
      <lineBasicMaterial attach="material" color="#BFBBDA" linewidth={10} />
    </line>
  );
}


export default SolarSystem