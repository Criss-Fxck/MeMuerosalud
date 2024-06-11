import Home from "./pages/frontend/home"
import Login from "./pages/frontend/login"
import Register from "./pages/frontend/register"
import NoFound from "./pages/frontend/nofound"
import { Routes,Route } from "react-router-dom"


function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="*" element={<NoFound/>}/>
    </Routes>
    </>
  )
}

export default App
