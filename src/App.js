import Navbar from './Navbar'
import Search from './Search'

function App() {

  // CHANGE LATER
  document.body.style.maxWidth = "1250px";
  document.body.style.margin = "0 auto";

  return (
    <div>
      <Navbar></Navbar>
      <Search></Search>
    </div>
  );
}

export default App;
