import {
  BrowserRouter,
  Navigate,
  Route,
  Routes
} from "react-router-dom"
import ProtectedRoute from "./components/ProtectedRoute"
import Home from "./pages/Home"
import Login from "./pages/Login"
import NotFound from "./pages/NotFound"
import Register from "./pages/Register"

function Logout(){
  localStorage.clear()
  return <Navigate to="/login/"/>
}

function RegisterandLogout(){
  localStorage.clear()
  return <Register />
}
function App() {


  return (
   <BrowserRouter>
   <Routes>
    <Route
    path = "/"
    element = {
      <ProtectedRoute> <Home /> </ProtectedRoute>
    }
    />
    <Route path="/login" element={<Login/>}/>
    <Route path="/logout" element={<Logout/>}/>
    <Route path="/register" element={<RegisterandLogout/>}/>
    <Route path="*" element={<NotFound/>}/>
   </Routes>
   </BrowserRouter>
  )
}

export default App;
