//Recibe un producto del JSON y crea la card//
import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
    return (
            <div className="card">
                <img src={`../img/${producto.img}`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Presentación: {producto.modelo}</p>
                    <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                    <button className="btn btn-primary"><Link className='nav-link' to={`/product/${producto.id}`}>Ver Producto</Link></button>
                </div>
            </div>
    );
}

export default Item;
