import React from 'react'
import PlanetCanvas from '../PlanetCanvas'
import '../style/home.css'
import { planetData } from '../utils/planetData'
const Home = ({setAudio,setTexture}) => {
  return (
    <div  className='home'>
    {
     planetData.map(data=>
     <PlanetCanvas 
     key={data.id}
     title={data.title} 
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