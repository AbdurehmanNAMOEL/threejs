import './index.css'
import NavBar from "./components/NavBar";
import Moon from "./components/pages/moon/Moon";
import Sun from "./components/pages/sun/Sun";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Mercury from './components/pages/mercury/Mercury';
import Venus from './components/pages/venus/Venus';
import Mars from './components/pages/mars/Mars';
import Jupiter from './components/pages/jupiter/Jupiter';
import SaturnContainer from './components/pages/saturn/Saturn';
import Neputne from './components/pages/neputne/Neputne';
import Uranus from './components/pages/uranus/Uranus';
import Earth from './components/pages/earth/Earth';
function App() {
 

  return (
    <div className='big-container'>
    <Router>
      <NavBar/>
      <Routes>
      <Route exact path={'/'} element={<Home/>}/>
      <Route exact path={'/earth'} element={<Earth title={'Earth'}/>}/>
      <Route exact path={'/moon'} element={<Moon title={'Moon'}/>}/>
      <Route exact path={'/sun'} element={<Sun title={'The Sun'}/>}/>
      <Route exact path={'/mercury'} element={<Mercury title={'Mercury'}/>}/>
      <Route exact path={'/venus'} element={<Venus title={'Venus'}/>}/>
      <Route exact path={'/mars'} element={<Mars title={'Mars'}/>}/>
      <Route exact path={'/jupiter'} element={<Jupiter title={'Jupiter'}/>}/>
      <Route exact path={'/saturn'} element={<SaturnContainer title={'Saturn'}/>}/>
      <Route exact path={'/neputne'} element={<Neputne title={'Neputne'}/>}/>
      <Route exact path={'/uranus'} element={<Uranus title={'uranus'}/>}/>
    </Routes>
    </Router>

   </div>
  );
}

export default App;
