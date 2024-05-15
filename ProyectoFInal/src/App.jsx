//import './App.css'
import Inicio from "./Components/Inicio/Inicio.jsx"
import Login from './Components/Login-Register/Login.jsx'
import Register from './Components/Login-Register/Register.jsx'
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/Carrito/Cart.jsx'
function App() {

  return (
    <>
      <Routes>
        <Route path='/Inicio' element = {<Inicio/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/carrito' element={<Cart/>}/>
      </Routes>
    </>
  )
}

export default App
