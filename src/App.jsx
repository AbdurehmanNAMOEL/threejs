import './index.css'
import NavBar from "./components/NavBar";
import EarthContainer from "./components/EarthContainer";
import MoonContainer from "./components/MoonContainer";
import SunContainer from "./components/SunContainer";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import History from './components/History';
import { useState } from 'react';
import { EarthData,MoonData,SunData } from './components/Data';
function App() {
 const [data,setData]=useState(EarthData)
 const handleEarth=()=>{
       setData(EarthData)
      
 }
 const handleMoon=()=>{
       setData(MoonData)
       
 }
 const handleSun=()=>{
       setData(SunData)
       
 }
  return (
    <div className='big-container'>
    <Router>
      <NavBar handleEarth={handleEarth} handleMoon={handleMoon} handleSun={handleSun}/>
      <Routes>
      <Route exact path={'/'} element={<EarthContainer title={'The Earth'}/>}/>
      <Route exact path={'/moon'} element={<MoonContainer title={'The Moon'}/>}/>
      <Route exact path={'/sun'} element={<SunContainer title={'The Sun'}/>}/>
    </Routes>
    <Footer title={'Solar System'}/>
    </Router>
    {
      data.map(item=>(
        <History 
        name={item.name}
        size={item.size}
        weight={item.weight}
        distance={item.distance}
        />
      ))
      
    }
    
   </div>
  );
}

export default App;
