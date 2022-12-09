
//Consulto la base de DATOS//
import React from 'react';
import {useState} from 'react';

const ItemCount = ({stock}) => {
    const [contador, setContador] = useState(1);
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)
    
    return (
        <div className='contador'>
            <button className='btn' onClick={() => restar()}>-</button>
                {contador}
            <button className='btn' onClick={() => sumar()}>+</button>
            <button className='btn'>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;