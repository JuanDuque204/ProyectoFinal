import Login from './Components/Login-Register/Login.jsx'
import Register from './Components/Login-Register/Register.jsx'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Routes>
          <Route path="/register" element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </>
  )
}

export default App
