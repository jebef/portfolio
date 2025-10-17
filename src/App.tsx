import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Crater from './pages/Crater';

export default function App() {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/projects/crater' element={<Crater/>}/>
    </Routes>
  )
}
