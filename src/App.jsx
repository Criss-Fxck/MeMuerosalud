import Home from "./pages/frontend/home"
import Login from "./pages/frontend/login"
import Register from "./pages/frontend/register"
import NoFound from "./pages/frontend/nofound"
import Dashboard from "./pages/admin/dashboard"
import Crearpro from "./pages/admin/crearpro"
import { Routes,Route } from "react-router-dom"



function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/Dashboard" element={<Dashboard/>}/>
      <Route path="/Crearpro" element={<Crearpro/>}/>
      <Route path="*" element={<NoFound/>}/>
    </Routes>
    </>
  )
}

export default App
