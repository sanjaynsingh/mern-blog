import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'

export default function App() {
  return (
    <div>
      <BrowserRouter >
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/Sign-in" element={<Signin />} />
            <Route path="/Sign-up" element={<Signup />} />
            <Route path='/dashboard' element={<Dashboard/>}/>
            <Route path='/projects' element={<Projects/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

