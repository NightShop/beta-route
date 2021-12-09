import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import CragList from "./components/crag/CragList";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
        <h1 className="text-center mt-4">β Route</h1>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/crags" element={<CragList />} />
        </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
