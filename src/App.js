import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cities from './Pages/Cities';
import About from './Pages/About';
import City from './Pages/City'


function App() {
  return (
    <div className="App">
      <Router>
          <Navbar />
        <Routes>
          <Route path="/"  element={<Cities />}/>
          <Route path="/city/:id" element={<City />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
