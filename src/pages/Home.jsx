import React from 'react'
import PlanetCanvas from '../components/PlanetCanvas'
import '../components/style/home.css'
import { planetData } from '../components/utils/planetData'
const Home = ({setAudio,setTexture,setData}) => {
  return (
    <div  className='home'>
    {
     planetData.map(data=>
     <PlanetCanvas 
       setData={setData}
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