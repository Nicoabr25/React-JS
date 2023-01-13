import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

//Context
import { useCarritoContext } from '../../context/CarritoContext';
import { useDarkModeContext } from '../../context/DarkModeContext';


const ItemDetail = ({item}) => {
    const {addItem} = useCarritoContext()
    const {darkMode} = useDarkModeContext()
    const onAdd = (contador) => {
        addItem(item, contador)
    }


    return (
        <div className={`container row g-0 itemDetail ${darkMode ? 'cardDarkMode' : 'itemDetailColor'} `}>
            <div className='col-md-4'>
                <img src={`../img/${item.img}`} className="img-fluid rounded-start" alt="imagen del producto"/>
            </div>
            <div className='col-md-8 card-body'>
                <h2 className='card-title'>{item.nombre}</h2>
                <p className="card-text">Presentación : {item.modelo}</p>
                <p className="card-text">Descripción: {item.description}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <ItemCount inicial = {1} stock = {item.stock} onAdd={onAdd}/>
                <button className={`btn ${darkMode? `btn-outline-dark` : `btn-secondary`}`}><Link to="/Cart" className='nav-link'>Finalizar Compra</Link></button>
            </div>
            
        </div>
    );
}

export default ItemDetail;
