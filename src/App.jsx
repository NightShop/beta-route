import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import CragList from "./components/crag/CragList";
import Home from "./components/Home";
import SectorList from "./components/sector/SectorList";
import SectorDetails from "./components/sector/SectorDetails";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <h1 className="text-center mt-4">β Route</h1>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/crags/all" element={<CragList />} />
            <Route path="/crags/:cragId" element={<SectorList />} />
            <Route path="/crags/:cragId/:sectorId" element={<SectorDetails />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
