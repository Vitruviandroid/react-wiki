import '../../App.css'
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">

            <ul className="navbar-nav container-xxl fs-4">
                <Link to='/' className="text-center ubuntu text-decoration-none fs-1" style={{ color: '#111' }} >Rick & Morty <span className="text-primary">Wiki</span></Link>
                <li className="nav-item">
                    <NavLink to='/' activeClassName='active' className="nav-link" aria-current="page" href="#">Characters</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/episode' className="nav-link" href="#">Episode</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to='/location' className="nav-link" href="#">Location</NavLink>
                </li>
            </ul>

        </nav>
    );
};

export default Navbar;