import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Project from "./pages/Project";
import About from './pages/About'
import HomeDetail from './pages/HomeDetail';
import Resume from './pages/Resume';

function App() {
  return (
    <div className="App">   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
          <Route path="/" element={<HomeDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resume" element={<Resume />} />
          </Route>
        </Routes>
      </BrowserRouter>

     
    </div>
  );
}

export default App;
