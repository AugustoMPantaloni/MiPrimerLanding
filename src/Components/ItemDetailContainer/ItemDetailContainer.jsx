import Cards from "../Cards/Cards";
import React, { useState, useEffect } from "react"; 
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch('/Productos.json')
            .then(response => response.json())
            .then(data => setProductos(data))
            .catch(error => alert('Error al cargar los productos:', error.message));
    }, []); 

    const productosFiltrados = id 
        ? productos.filter(producto => producto.id === parseInt(id)) 
        : categoriaId 

    return (
        <div className="estilosItemList">
            {productosFiltrados.map(producto => (
                <Cards
                    key={producto.id}
                    id={producto.id}
                    imagen={producto.imagen}
                    alt={producto.alt}
                    descripcion={producto.descripcion}
                    precio={producto.precio}
                    nombre={producto.nombre}
                    categoria={producto.categoria}
                />
            ))}
        </div>
    );
};

export default ItemDetailContainer;
