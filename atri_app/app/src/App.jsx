import { Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./pages/Home.jsx";
import Landing from "./pages/Landing.jsx";
import L2 from "./pages/L2.jsx";
import Ppp from "./pages/Ppp.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
<Route path="/landing" element={<Landing />} />
<Route path="/l2" element={<L2 />} />
<Route path="/ppp" element={<Ppp />} />
    </Routes>
  );
}
