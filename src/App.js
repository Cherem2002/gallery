import Home from './pages/home/home';
import Gallary from './pages/gallary/gallary';
import Impr from './pages/impr/Impr';
import Cl from './pages/cl/cl';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Modern from './pages/modern/modern';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/gallary/modern" element={<Modern />} />
          <Route path="/gallary/impr" element={<Impr />} />
          <Route path="/gallary/cl" element={<Cl />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
