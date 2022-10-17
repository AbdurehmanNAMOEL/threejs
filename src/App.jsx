import './index.css'
import NavBar from "./components/NavBar";
import EarthContainer from "./components/pages/earth/EarthContainer";
import MoonContainer from "./components/pages/moon/MoonContainer";
import SunContainer from "./components/pages/sun/SunContainer";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import MercuryContainer from './components/pages/mercury/MercuryContainer';
import VenusContainer from './components/pages/venus/VenusContainer';
import Mars from './components/pages/mars/MarsContainer';
import JupiterContainer from './components/pages/jupiter/JupiterContainer';
import SaturnContainer from './components/pages/saturn/SaturnContainer';
import NeputneContainer from './components/pages/neputne/NeputneContainer';
import earth from './audio/earth.ogg'
function App() {
 

  return (
    <div className='big-container'>
    <Router>
      <NavBar/>
      <Routes>
      <Route exact path={'/'} element={<Home/>}/>
      <Route exact path={'/earth'} element={<EarthContainer title={'Earth'}/>}/>
      <Route exact path={'/moon'} element={<MoonContainer title={'Moon'}/>}/>
      <Route exact path={'/sun'} element={<SunContainer title={'The Sun'}/>}/>
      <Route exact path={'/mercury'} element={<MercuryContainer title={'Mercury'}/>}/>
      <Route exact path={'/venus'} element={<VenusContainer title={'Venus'}/>}/>
      <Route exact path={'/mars'} element={<Mars title={'Mars'}/>}/>
      <Route exact path={'/jupiter'} element={<JupiterContainer title={'Jupiter'}/>}/>
      <Route exact path={'/saturn'} element={<SaturnContainer title={'Saturn'}/>}/>
      <Route exact path={'/neputne'} element={<NeputneContainer title={'Neputne'}/>}/>
    </Routes>
    </Router>

   </div>
  );
}

export default App;
