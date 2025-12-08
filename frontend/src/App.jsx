import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Donate from "./pages/Donate";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import GuestRoute from "./components/GuestRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
      <Route path="/donate" element={<ProtectedRoute><Donate /></ProtectedRoute>} />
      <Route path="/login" element={<GuestRoute><Login /></GuestRoute>}/>
      <Route path="/signup" element={<GuestRoute><Signup /></GuestRoute>} />
    </Routes>
  );
}

export default App;





