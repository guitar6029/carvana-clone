import { Routes, Route } from "react-router-dom";
import CarDetailed from "./components/CarDetailed/CarDetailed";
import Cars from "./components/Cars/Cars";
import CarType from "./components/CarType/CarType";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/cars" element={<Cars />} />
      <Route path="/cars/:type" element={<CarType />} />
      <Route path="/cars/vehicle/:id" element={<CarDetailed />} />
    </Routes>
  );
}

export default App;
