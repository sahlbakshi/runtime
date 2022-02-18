import Navbar from '../Navbar'
import Results from '../Results'
import Home from '../Home'
//import Slot from './Slot'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  // Put in SCSS file
  document.body.style.maxWidth = "1200px";
  document.body.style.margin = "0 auto";

  // Can state a value here using usSate
  // and then pass that as a prop to any of the components below
  return (
    <Router>
        <Navbar></Navbar>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/results'>
              <Route path='/results/:value' element={<Results />} />
              {/*<Route path='/results/:value/:slot' element={<Slot />}*/}
            </Route>
         </Routes>
    </Router>
  );
}

export default App;