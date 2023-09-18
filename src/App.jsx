import './index.css'
import NavBar from "./components/NavBar";
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import { Suspense, useState,lazy } from 'react';
import LoadingPage from './pages/LoadingPage';
import Menu from './components/Menu';

import Home from './pages/Home'
import LoadingAnimation from './components/LoadingAnimation';
import LoadingPageAnimation from './components/LoadingPageAnimation';
import { useEffect } from 'react';

const PlanetsHome=lazy(()=>import('./pages/Planets/PlanetsHome'))
const SolarSystem=lazy(()=>import('./pages/SolarSystem'))
const tel=window.Telegram.WebApp
const App=()=> {
  const [audio,setAudio] = useState('')
  const [texture,setTexture]= useState('')
  const [menuClicked,setMenuClicked]= useState(false)
  const [isPageLoading,setLoading]= useState(true)
  const [data,setData]= useState({
    title:'',
    type:'',
    about:''
  })

  useEffect(()=>{
     tel.ready()
  },[])
  return (
    <div className='big-container w-full h-full'>
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
       <Suspense fallback={<LoadingPageAnimation/>}>
       <Routes>
        <Route path='' element={<SolarSystem/>}/>
        <Route 
         exact path={'/planet'} 
         element={<PlanetsHome data={data} audio={audio} texture={texture}/>}
      />
     
    </Routes>
    </Suspense>
    </Router>

   </div>
  );
}

export default App;
