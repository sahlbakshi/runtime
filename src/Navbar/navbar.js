import './navbar.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {

    let navigate = useNavigate();
    const [value, setValue] = useState("");
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            setValue(event.target.value); 
            navigate(`./results/${value}`); 
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

export default Navbar;