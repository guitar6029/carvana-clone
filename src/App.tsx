import {Routes, Route} from 'react-router-dom';
import './App.css';
import Cars from './components/Cars/Cars';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path="/cars" element={<Cars />} />
    </Routes>
  );
}

export default App;
