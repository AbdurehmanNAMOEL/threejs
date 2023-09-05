import './index.css'
import NavBar from "./components/NavBar";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import PlanetsHome from './pages/Planets/PlanetsHome';
import LoadingPage from './pages/LoadingPage';
import Menu from './components/Menu';
import SolarSystem from './pages/SolarSystem';
function App() {
  const [audio,setAudio] = useState('')
  const [texture,setTexture]= useState('')
  const [menuClicked,setMenuClicked]= useState(false)
  const [isPageLoading,setLoading]= useState(true)
  const [data,setData]= useState({
    title:'',
    type:'',
    about:''
  })

  return (
    <div className='big-container'>
    <Router>
      
      {menuClicked?
       <Home 
         setLoading={setMenuClicked} 
         setData={setData} 
         setAudio={setAudio} 
         setTexture={setTexture}
         />:''}
      <NavBar setMenuClicked={setMenuClicked}/>
      <Menu/>
       {isPageLoading?<LoadingPage setLoading={setLoading}/>:''}   
      <Routes>
      <Route path='' element={<SolarSystem/>}/>
      <Route 
      exact path={'/planet'} 
      element={<PlanetsHome data={data} audio={audio} texture={texture}/>}
      />
    </Routes>
    </Router>

   </div>
  );
}

export default App;
