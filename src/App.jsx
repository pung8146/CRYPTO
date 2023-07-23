import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Coin from "./pages/Coin";
import Coins from "./pages/Coins";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Coins />} />
        <Route path="/:coinId" element={<Coin />} />
      </Routes>
    </Router>
  );
}

export default App;
