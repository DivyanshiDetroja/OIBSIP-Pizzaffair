import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Customized from "./pages/Customized";
import OrderStatus from "./pages/OrderStatus";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"; 



function App() {

  const user = 0; // user =0 not logged in, user =1 logged in

  return (
    <Router>
      <Routes>
        <Route path="/" element={ user ? <Home /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={ user ? <Navigate to="/" replace /> :<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/customized" element={<Customized />} />
        <Route path="/orderstatus" element={<OrderStatus />} />
      </Routes>
    </Router>
  );
}

export default App;
