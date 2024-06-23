import './App.css'
import Header from './components/UI/header'
import Home from './components/Pages/home'
import Footer from './components/UI/footer'
import Privacy from './components/Pages/privacy'
import Terms from './components/Pages/TOS'
import { useState, useRef, useEffect, useContext, createContext } from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

const headerOffset = createContext(null);

function App() {
  const [count, setCount] = useState(0)
  const [hOffset, sethOffset] = useState(0);

  return (
    <headerOffset.Provider value={hOffset}>
      
      <Suspense fallback={<div className="container">Loading...</div>}>
          <Routes>
             <Route path="/" element={
              <div>
                <Header links = {['introduction', 'events', 'board', 'apply']}/>
                <Home />
              </div>
              
             }/>
             <Route path="/privacy" element={
                <div>
                  <Header links = {['Home']}/>
                  <Privacy/>
                </div>
             
             }/>
             <Route path='/terms' element={
                <div>
                    <Header links = {['Home']}/>
                    <Terms/>
                  </div>
              
             }/>
          </Routes>
       </Suspense>
      <Footer/>
    </headerOffset.Provider>
  )
}

export default App
