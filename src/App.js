import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Gallery from './pages/gallary/gallary';
import Modern from './pages/modern/modern';
import Impr from './pages/impr/Impr';
import Cl from './pages/cl/cl';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/gallery/modern" element={<Modern />} />
          <Route path="/gallery/impr" element={<Impr />} />
          <Route path="/gallery/cl" element={<Cl />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

