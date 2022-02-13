import Navbar from './Navbar'
import Results from './Results'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  // CHANGE LATER
  document.body.style.maxWidth = "1200px";
  document.body.style.margin = "0 auto";

  return (
    <Router>
        <Navbar></Navbar>
        <Routes>
        <Route exact path='/' element={<Results />} />
        </Routes>
    </Router>
  );
}

export default App;


/* <Route path='/results' element={<Results />} /> */