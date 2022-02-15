import './navbar.scss'
import { useNavigate } from "react-router-dom";
import { useState } from 'react';

const Navbar = () => {

    let navigate = useNavigate();
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            let value = event.target.value;
            navigate(`/results/${value}`); 
        }
    }
    
    return (
        <nav className='navigation'>
            <div className='left-slot'>
                <button>runtime</button>
            </div>

            <div className="middle-slot">
                <input className="after" 
                placeholder="get runtimes" onKeyDown={handleKeyDown}>
                </input>
            </div>

            <div className='right-slot'>
                <button>How It Works</button>
                <button>Coming Soon</button>
            </div>
        </nav>
    );
}


    /*
    let location = useLocation();
    let navigate = useNavigate();
    const [state, setState] = useState(true);

    // handles search 
    const handleKeyDown = (event) => {
        const value = event.target.value;
        if (event.key === 'Enter') {
            if (location.pathname === '/') {
                setState(false);
            }
            navigate(`./results/${value}`)
        }
    }

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
    */

export default Navbar;