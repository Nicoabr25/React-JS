import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
//import consultarBDD from '../../assets/funciones';
import ItemDetail from '../ItemDetail/ItemDetail';
import {getProducto} from '../../assets/firebase.js';


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([]);
    const {id} = useParams()

    useEffect(() => {
        getProducto(id).then(prod => setProducto(prod))
        
    }, []);
    return (
        <div className='container'>
            <ItemDetail item={producto}/>
        </div>
    );
}

export default ItemDetailContainer;
