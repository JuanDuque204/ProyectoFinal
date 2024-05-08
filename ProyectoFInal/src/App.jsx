//import './App.css'
import Inicio from "./Componets/Inicio/Inicio.jsx"

import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
    <Routes>
        <Route path='/Inicio' element = {<Inicio/>}/>
      </Routes>
    </>
  
  )
}

export default App
