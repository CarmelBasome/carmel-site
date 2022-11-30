import { Link } from "react-router-dom";

const NavBar =()=>{
    return <nav>
        <div className='nav-bar'>
            <div className='nav-bar'></div>
            <span className='logo'>car-bas</span>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/job'>Job</Link>
            <Link to='' title='English'>EN</Link>
            <Link to='' title='Francais'>FR</Link>
        </div>
    </nav>
}
export default NavBar;