import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({item}) => {
    return (
        <div className="container row g-0 itemDetail">
            <div className='col-md-4'>
                <img src={`../img/${item.img}`} className="img-fluid rounded-start"/>
            </div>
            <div className='col-md-8 card-body'>
                <h2 className='card-title'>{item.nombre}</h2>
                <p className="card-text">Presentación : {item.modelo}</p>
                <p className="card-text">Descripción: {item.description}</p>
                <p className="card-text">Stock: {item.stock}</p>
                <p className="card-text">Precio: ${new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <ItemCount stock = {item.stock}/>
                <button className='btn btn-secondary'>Finalizar Compra</button>
            </div>
            
        </div>
    );
}

export default ItemDetail;
