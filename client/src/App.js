import { useContext } from 'react';
import './style.scss';
import { DarkModeContext } from './context/DarkModeContext';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/home/Home';


const App =() => {
  const { darkMode } = useContext(DarkModeContext)
  return (
   <div className={`theme-${darkMode ? "dark" : "light"}`}>
    <Router>
      <Routes>
      <Route path="/" exact Component={Home} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
