import './index.css'
import NavBar from "./components/NavBar";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import { useState } from 'react';
import PlanetsHome from './components/pages/Planets/PlanetsHome';
function App() {
  const [audio,setAudio] = useState('')
  const [texture,setTexture]= useState('')

  return (
    <div className='big-container'>
    <Router>
      <NavBar/>
      <Routes>
      <Route 
       exact path={'/'} 
       element={<Home setAudio={setAudio} setTexture={setTexture}/>}
      />
      <Route 
      exact path={'/planet'} 
      element={<PlanetsHome audio={audio} texture={texture}/>}
      />
    </Routes>
    </Router>

   </div>
  );
}

export default App;
