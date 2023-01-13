
//Consulto la base de DATOS//
import React from 'react';
import {useState} from 'react';

//Context
import { useDarkModeContext } from '../../context/DarkModeContext';


const ItemCount = ({inicial, stock, onAdd}) => {
    const {darkMode} = useDarkModeContext()
    const [contador, setContador] = useState(inicial);
    const sumar = () => contador < stock && setContador(contador + 1)

    const restar = () => contador > 1 && setContador(contador - 1)

    const agregarAlCarrito = () => onAdd(contador)
    
    return ( 
        <div className="contador">
            <button className={`btn ${darkMode? `btn-outline-dark` : `btn-primary`}`} onClick={() => restar()}>-</button>
                {contador}
            <button className={`btn ${darkMode? `btn-outline-dark` : `btn-primary`}`} onClick={() => sumar()}>+</button>
            <button className={`btn ${darkMode? `btn-outline-dark` : `btn-primary`}`} onClick={agregarAlCarrito}>🛒</button>
        </div>
    );
}

export default ItemCount;