import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom';
import './App.css';
import NavBar from './Component/NavBar';
import About from './Pages/About';
import Feedback from './Pages/Feedback';
import Gallery from './Pages/Gallery';
import Service from './Pages/Service';
import Home from './Pages/Home';

function App() {
  return (
   
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/services" Component={Service}></Route>
        <Route path="/gallery" Component={Gallery}></Route>
        <Route path="/feedback" Component={Feedback}></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
