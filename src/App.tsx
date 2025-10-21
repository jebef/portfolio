import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Crater from './pages/Crater';
import LonePalmIsland from './pages/LonePalmIsland';

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/projects/crater' element={<Crater/>}/>
      <Route path='/projects/lone-palm-island' element={<LonePalmIsland/>}/>
      <Route path='/projects/postcard-2025' element={<LonePalmIsland/>}/>
    </Routes>
  )
}
