import { BrowserRouter as Router, Routes, Route, HashRouter  } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home';
import Gallery from './pages/gallary/gallary';
import Modern from './pages/modern/modern';
import Impr from './pages/impr/Impr';
import Cl from './pages/cl/cl';
import Stat from './pages/stat/stat';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gall" element={<Gallery />} />
          <Route path="/gall/modern" element={<Modern />} />
          <Route path="/gall/impr" element={<Impr />} />
          <Route path="/gall/cl" element={<Cl />} />
          <Route path="/stat" element={<Stat />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;

