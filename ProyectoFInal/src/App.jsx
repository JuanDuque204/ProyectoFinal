import Login from './Components/Login-Register/Login.jsx'
import Register from './Components/Login-Register/Register.jsx'
import Inicio from './Components/Inicio/Inicio.jsx'
import Inventario from './Components/Sis-Inventario/Inventario.jsx'


import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    
      <Routes>
       <Route path='/Inicio' element = {<Inicio/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/Inventario' element = {<Inventario/>}/>
       
        </Routes>
      </>
  )
}

export default App
