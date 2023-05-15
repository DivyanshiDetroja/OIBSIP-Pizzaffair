import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Customized from "./pages/Customized";
import OrderStatus from "./pages/OrderStatus";
import Admin from "./pages/Admin";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"; 
import { useSelector } from "react-redux";



function App() {

  const user = useSelector((state)=>state.user.user.currentUser); 

  return (
    <Router>
      <Routes>
        <Route path="/" element={ user ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={ user ? <Navigate to="/" replace /> :<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customized/:id" element={user ? <Customized /> : <Navigate to="/login" replace />} />
        <Route path="/orderstatus" element={user ? <OrderStatus /> : <Navigate to="/login" replace />} />
        <Route path="/admin" element= {<Admin /> } />
      </Routes>
    </Router>
  );
}

export default App;
