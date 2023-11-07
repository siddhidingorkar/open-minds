import { React, useState } from 'react'
import routes from './routes/routes';
import Navbar from './components/navbar'
import Footer from './components/Footer';




import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  
  return (
    <>

    
    {  <Router>
      <Navbar/>
            <Routes>
              {routes.map((route, index)=>(
                <Route key={index} path= { route.path } element={<route.component />} />
              ))}
            </Routes>
            <Footer/>
        </Router>}      
    </>
  )
}

export default App