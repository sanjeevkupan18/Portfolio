import React from 'react'
import Navbar from './pages/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Education from './pages/Education'
import {Routes,Route} from 'react-router-dom'


const App = () => {

  
  return (
    <div className="bg-gradient-to-b from-black via-purple-950 to-violet-900 h-screen w-[100%] text-white">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      
    </div>
  );
}

export default App
