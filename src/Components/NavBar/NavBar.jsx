import "./NavBar.css"
const NavBar = ({ className }) => {
    return (
        <nav className={className}>
            <a href="#">Inicio</a>
            <a href="">Tienda</a>
            <a href="">Mis Plantas</a>
        </nav>
    );
} 

export default NavBar;