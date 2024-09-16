import {BrowserRouter as Router,Route,Routes,Navigate} from 'react-router-dom';
import Home from './home';
import About from './about';
import NotFound from './404';
import "./index.css";
import Profile from './Profile';
import Navigation from './navigation';


function Chemin () {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="404" element={<NotFound />} />
        <Route path="/profile/:username?" element={<Profile />} /> {}
      </Routes>
    </Router>
  );
}

export default Chemin;