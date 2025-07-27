
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Skills from './Components/Skills';
import Contact from './Components/Contact';
import About from './Components/About.js';
import Work from './Components/Work.js';


function App() {
  return (
    <div className="App">
    <Navbar/>
    <Home/>
    <About/>
    <Skills/>
    <Work/>
    <Contact/>
    
    </div>
  );
}

export default App;
