import React from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import EmpListing from './EmpListing'
import EmpCreate from './EmpCreate'
import EmpDetails from './EmpDetails'
import EmpEdit from './EmpEdit'

function App() {

  return (
    <div className="App">
      <h1 style={{textAlign: 'center'}}>React Crud Operations</h1>
     
        <Routes>
          <Route path='/' element={<EmpListing /> } />
          <Route path='/employee/create' element={<EmpCreate /> } />
          <Route path='/employee/detail/:empid' element={<EmpDetails /> } />
          <Route path='/employee/edit/:empid' element={<EmpEdit /> } />

        </Routes>
     
    </div>
  )
  


}

export default App
