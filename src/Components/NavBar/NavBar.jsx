import "./NavBar.css"
import CartWidget from "../CartWidget/IconoCarrito"
import { Link } from "react-router-dom";

const NavBar = ({ className }) => {
    return (
        <nav className={className}>
            <Link to="/">Todas las plantas</Link>
            <Link to="/categoria/Zen">Zen</Link>
            <Link to="/categoria/Exóticas">Exoticas</Link>
            <CartWidget/>
        </nav>
    );
} 

export default NavBar;