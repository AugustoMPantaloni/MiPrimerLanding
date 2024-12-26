import "./ItemListContainer.css"
import Cards from "../Cards/Cards"
import React, { useState, useEffect } from "react"; 
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const { categoriaId } = useParams();
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/Productos.json')
            .then(response => response.json())
            .then(data => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 3000);
            })
            .catch(error => alert('Error al cargar los productos:', error.message));
    }, []);

    if (loading) {
        return <p className="estilosMensajeCarga">Cargando la tienda...</p>;
    }

    const productosFiltrados = categoriaId 
        ? productos.filter(producto => producto.categoria === categoriaId)
        : productos;

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

export default ItemListContainer;