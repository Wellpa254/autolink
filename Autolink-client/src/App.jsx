import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Radar from "./pages/Radar";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", textAlign: "center" }}>
        <Link to="/" style={{ margin: "0 10px" }}>Home</Link>
        <Link to="/profile" style={{ margin: "0 10px" }}>Profile</Link>
        <Link to="/radar" style={{ margin: "0 10px" }}>Radar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/radar" element={<Radar />} />
      </Routes>
    </BrowserRouter>
  );
}
