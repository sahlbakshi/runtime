import './search.scss'
import { useLocation, useNavigate } from 'react-router-dom';

const Search = () => {

    /*
    let location = useLocation();
    let navigate = useNavigate();
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (location.pathname === '/') {
                navigate('./results'); // with a prop
            }
        }
    }
    */

    const handleKeyDown = (event) => {
        // send it to Results
    }

    return (
        <div className="searchbar-container">
            <input className="searchbar" placeholder="get runtimes" onKeyDown={handleKeyDown}></input>
        </div>
    )
}

export default Search;