import "./Cards.css"
import { Link } from "react-router-dom";

const Cards = ({ id, imagen, alt, descripcion, precio, nombre, categoria }) => {
    return (
        <div className="card" key={id} id={`Producto=${id}`}>
            <img src={imagen} alt={alt} className="card-img" />
            <div className="card-body">
                <h5 className="card-title">{nombre}</h5>
                <p className="card-category">{categoria}</p>
                <p className="card-description">{descripcion}</p>
                <p className="card-price">${precio}</p>
                <Link  to={`/item/${id}`} className="detalles-button">Ver detalles</Link>
                <button className="card-button">Añadir al Carrito</button>
            </div>
        </div>
    );
};

export default Cards;