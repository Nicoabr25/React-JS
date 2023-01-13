//Recibe un producto del JSON y crea la card//
import React from 'react';
import { Link } from 'react-router-dom';

//Context

import { useDarkModeContext } from '../../context/DarkModeContext';

const Item = ({producto}) => {
    const {darkMode} = useDarkModeContext()
    return (
            <div className={`card ${darkMode ? 'text-white cardDarkMode' : ''}`}>
                <img src={producto.img} className="card-img" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{producto.nombre}</h5>
                    <p className="card-text">Presentación: {producto.modelo}</p>
                    <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(producto.precio)}</p>
                    <button className={`btn ${darkMode ? `btn-outline-dark` : `btn-primary` } `}><Link className='nav-link' to={`/product/${producto.id}`}>Ver Producto</Link></button>
                </div>
            </div>
    );
}

export default Item;
