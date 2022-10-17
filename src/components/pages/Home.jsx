import React from 'react'
import PlanetCanvas from '../PlanetCanvas'
import '../style/home.css'
import { planetData } from '../utils/planetData'
const Home = () => {
  return (
    <div className='home'>
    {
     planetData.map(data=>
     <PlanetCanvas 
     title={data.title} 
     image={data.image}
     audio={data.audio}
     />
     )
    }
       
    </div>
  )
}

export default Home