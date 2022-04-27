import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cities from './Pages/Cities';
import About from './Pages/About';
import Home from './Pages/Home'
import City from './Pages/City'


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
        <Routes>
          <Route path="/"  element={<Home />}/>
          <Route path="/cities" element={<Cities />} />
          <Route path="/city/:id" element={<City />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
