import { useContext } from 'react';
import './style.scss';
import { DarkModeContext } from './context/DarkModeContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Photography from './pages/photography/Photography';
import Blog from './pages/blog/Blog';


const App =() => {
  const { darkMode } = useContext(DarkModeContext)
  return (
   <div className={`theme-${darkMode ? "dark" : "light"}`}>
    <Router>
      <Routes>
      <Route path="/" exact Component={Home} />
      <Route path="/projects" Component={Projects} />
        <Route path="/photography" Component={Photography} />
        <Route path="/blog" Component={Blog} />
        {/* <Route path="/success" Component={Success} /> */}
      </Routes>
    </Router>
   </div>
  );
}

export default App;
