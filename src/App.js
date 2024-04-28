import Home from './pages/home/home';
import Gallary from './pages/gallary/gallary';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallary" element={<Gallary />} />
        </Routes>
      </div>
    </Router>

  );
}

export default App;
