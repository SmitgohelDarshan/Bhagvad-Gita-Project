import { StrictMode, useState, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import NavBar from './components/navbar'
import Footer from './components/footer'
import Home from './components/home';
import About from './components/aboutUs';
import Donate from './components/donate';
import Privacy from './components/privacy';
import Terms from './components/terms';
import V1 from './components/v1';
import C1 from './components/c1';
import Quote from './components/quote';
import Acknowledge from './components/acknowledge';
import ScrollToTop from './components/ScrollToTop';
import ThemeContext from './context/themeContext';

function Layout(){
  return (<>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>)
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop /> 
      <ThemeContext.Provider value={{ theme : "light" }}>

      <Routes>
        <Route path = '/' element={<Layout/>}>
          <Route path='/' element={<Home/>} />
          <Route path='/aboutUs' element={<About/>}/>
          <Route path='/acknowledge' element={<Acknowledge/>}/>
          <Route path='/donate' element={<Donate/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
          <Route path='/quote' element={<Quote/>}/>
          <Route path='/terms' element={<Terms/>}/>
          <Route path='/chapter/:id/verses/:index' element={<V1/>}/>
          <Route path='/chapter/:id' element={<C1/>}/>
        </Route>
      </Routes>
      </ThemeContext.Provider>
    </BrowserRouter>
  </StrictMode>,
)