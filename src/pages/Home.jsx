import React from 'react'
import PlanetCanvas from '../components/PlanetCanvas'
import '../components/style/home.css'
import { planetData } from '../components/utils/planetData'
const Home = ({ setLoading,setAudio,setTexture,setData}) => {
  return (
    <div  className='home absolute w-full h-[70vh] bg-[#121212]'>
    {
     planetData.map(data=>
     <PlanetCanvas 
       setData={setData}
       setLoading={setLoading}
       key={data.id}
       title={data.title} 
       type={data.type}
       about={data.about}
       image={data.image}
       audio={data.audio}
       setAudio={setAudio} 
       setTexture={setTexture}
     />
     )
    }
       
    </div>
  )
}

export default Home