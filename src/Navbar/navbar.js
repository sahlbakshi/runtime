import Search from '../Search'
import './navbar.scss'


const Navbar = () => {
        return (
        <nav className='navigation'>
            <div className='left-slot'>
                <button>runtime</button>
            </div>
            <Search></Search>
            <div className='right-slot'>
                <button>How It Works</button>
                <button>Coming Soon</button>
            </div>
        </nav>
    )
}

export default Navbar;