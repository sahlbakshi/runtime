import Navbar from './Navbar'
import Results from './Results'
import Home from './Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  // CHANGE LATER
  document.body.style.maxWidth = "1200px";
  document.body.style.margin = "0 auto";

  return (
    <Router>
        <Navbar></Navbar>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/results' element={<Results />} /> 
            <Route path='/results/:value' element={<Results />} />
            {/* learn how /:value works */}
        </Routes>
    </Router>
  );
}

export default App;
