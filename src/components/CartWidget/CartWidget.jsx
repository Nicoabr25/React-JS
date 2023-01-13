import React from 'react';
import { Link } from 'react-router-dom';


//Context
import { useCarritoContext } from '../../context/CarritoContext';
import { useDarkModeContext } from '../../context/DarkModeContext';


const CartWidget = () => {
    const {getItemQuantity} = useCarritoContext()
    const {darkMode} = useDarkModeContext()
    return (
        <>
        <button className={`btn my-2 my-sm-0 ${darkMode ? `btn-outline-dark` : `btn-secondary` } `}><Link className="menu nav-link" to={'/Cart'}>🛒 {getItemQuantity() > 0 && <span>{getItemQuantity()}</span>}</Link></button></>
    );
}

export default CartWidget;
