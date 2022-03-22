
import './App.css';
import About from './components/About.jsx';
import Home from './components/Home';
import Movies from './components/Movies';
import { MoviesDashboard } from './components/MoviesDashboard';
import {Navbar} from "./components/Navbar";
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>

<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/movies" element={<Movies/>}/>
  <Route path="/MoviesDashboard" element={<MoviesDashboard/>}/>
</Routes>

    </div>
  );
}

export default App;
