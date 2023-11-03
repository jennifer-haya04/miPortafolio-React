import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import "bootstrap/dist/css/bootstrap.min.css"
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Experience } from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <Experience/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
