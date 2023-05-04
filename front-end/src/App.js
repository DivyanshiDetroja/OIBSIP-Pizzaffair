import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Customized from "./pages/Customized";
import OrderStatus from "./pages/OrderStatus";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"; 
import { useSelector } from "react-redux";



function App() {

  const user = useSelector((state)=>state.user.user.currentUser); // user =0 not logged in, user =1 logged in

  return (
    <Router>
      <Routes>
        <Route path="/" element={ user ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={ user ? <Navigate to="/" replace /> :<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customized/:id" element={user ? <Customized /> : <Navigate to="/login" replace />} />
        <Route path="/orderstatus" element={user ? <OrderStatus /> : <Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
