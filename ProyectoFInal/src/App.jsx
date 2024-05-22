//import './App.css'
import Inicio from "./Components/Inicio/Inicio.jsx"
import Login from './Components/Login-Register/Login.jsx'
import Register from './Components/Login-Register/Register.jsx'
import { Routes, Route } from 'react-router-dom'
import Cart from './Components/Carrito/Cart.jsx'
import { UserProvider } from './Contexto.jsx';
import { PrivateRoute, PublicRoute, PrivateRouteAdmin } from "./Components/Login-Register/RutasPrivadasPublicas.jsx"
import InventariO from "./Components/Sis-Inventario/Inventario.jsx"

function App() {
  return (
    <>
      <UserProvider>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/register' element={<PublicRoute element={<Register />} />}/>
          <Route path='/login' element={<PublicRoute element={<Login />} />} />
          <Route path='/carrito' element={<PrivateRoute element={<Cart />} />} />
          <Route path='/inventario' element={<PrivateRouteAdmin element={<InventariO/>} />} />
        </Routes>
      </UserProvider>
    </>
  )
}

export default App