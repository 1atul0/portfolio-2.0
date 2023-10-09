import "./App.css";
import Header from  "./components/Header";
import Info from "./components/Info";
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Project from './components/Project'
import Resume from './components/Resume'
import Work from './components/Work'

function App() {
  return (
    <div>
      

    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<About/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/project" element={<Project/>} />
        <Route path="/work" element={<Work/>} />
        <Route path="/resume" element={<Resume/>} />
      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App;
