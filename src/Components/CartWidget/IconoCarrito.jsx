import CarritoIcono from "../../assets/carritoCompras.png";
import "./IconoCarrito.css";

const IconoCarrito = ({ className, onClick }) => {
    return (
        <button 
            onClick={onClick} 
            className={className}  
        >
            <img src={CarritoIcono} alt="Icono del carrito" className="etilosIconoCarritos"/>
        </button>
    );
}

export default IconoCarrito;