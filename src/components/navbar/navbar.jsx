import './navbar.css'
import Logo from "../../assets/images/logo.png"
import { Link } from 'react-router-dom';

const Navbar = (props)=>{
    return(
        <nav className="navbar-container">
            <div className="logo-container">
           <Link to={"/"}> <img src={Logo} alt='logo' className='logo'/></Link>
            </div>
            <div className="input-container">
                <input type="text" placeholder='Search for products,brands and more' className='search' />
            </div>
            <div className="btn-container">
                <Link to={"/Login"}><button className='submit'>Sign In</button></Link>
            </div>
            <div className="nav-title-container">
                <Link to={"/shop"} className='shop'>Shop</Link>
                <Link to={"/contact"} className='contact'>Contact</Link>
                <Link to={"/cart"} className='cart'><i class="fas fa-shopping-cart"><sup>{props.count}</sup></i> </Link>
            </div>  
        </nav>
    )
};

export default Navbar;