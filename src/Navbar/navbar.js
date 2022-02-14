import './navbar.scss'
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Navbar = () => {

    // research what these two do
    let location = useLocation();
    let navigate = useNavigate();
    const [state, setState] = useState(true);
    
    // handles search 
    const handleKeyDown = (event) => {
        const value = event.target.value;
        if (event.key === 'Enter') {
            navigate(`./results/${value}`); 
            // learn how /${value} works
        }
    }

    // handles navbar look
    useEffect(() => {
        if (location.pathname === '/') {
            setState(true);
        } else {
            setState(false);
        }
    }, [location])

    // left sife of navbar
    const leftSlot =
        <div className='left-slot'>
            <button>runtime</button>
        </div>

    // right sife of navbar
    const rightSlot =
        <div className='right-slot'>
            <button>How It Works</button>
            <button>Coming Soon</button>
        </div>

    //search bar
    const searchBar =
        <div className={state ? "below-slot" : "middle-slot"}>
            <input className={state ? "before" : "after"} 
            placeholder="get runtimes" onKeyDown={handleKeyDown}>
            </input>
        </div>

    // navbar for homepage
    const navbarBot = 
        <div>
        <nav className='navigation'>
            {leftSlot}
            {rightSlot}
        </nav>
        {searchBar}
        </div>

    // navbar for otherpages
    const navbarTop = 
        <nav className='navigation'>
            {leftSlot}
            {searchBar}
            {rightSlot}
        </nav>
    
    return (
        <div>
            {state ? navbarBot : navbarTop}
        </div>
    )
}

export default Navbar;