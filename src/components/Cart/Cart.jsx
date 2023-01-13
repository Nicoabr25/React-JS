import React from 'react';
import { Link } from 'react-router-dom';

//Context

import { useDarkModeContext } from '../../context/DarkModeContext';
import { useCarritoContext } from '../../context/CarritoContext';


const Cart = () => {
    const {darkMode} = useDarkModeContext()
    const {carrito, emptyCart, totalPrice, removeItem} = useCarritoContext()
    return (
        <>
        {carrito.length === 0?
                <div className='contentCarrito'>
                <h1 className='TextoCarrito'>🤕 Carrito Vacío. Vamos a comprar algo!</h1>
                <button className={`btn ${darkMode ? 'btn-outline-dark': 'btn-secondary'}`}><Link className='nav-link' to={'/'}>Continuar Comprando</Link></button>
                </div>
                :
                <div className='contentCarrito'>
                {
                    carrito.map(prod => 
                        <div className={`card cardCarrito ${darkMode ? 'text-white cardDarkMode' : ''}`} key={prod.id}>
                            <div>
                                <div className='cardCarritoImg'>
                                    <img src={prod.img} alt="Producto"  className="img-fluid rounded"/>
                                </div>
                            </div>
                            <div>
                                <div className="cardBody">
                                    <h5 className='card-title'>{`${prod.nombre} ${prod.modelo}`} </h5>
                                    <p className="card-text">Cantidad : {`${prod.cant}`}</p>
                                    <p className="card-text">Precio Unitario : {new Intl.NumberFormat('de-De').format(prod.precio)}</p>
                                    <p className="card-text">Precio Total :  {new Intl.NumberFormat('de-De').format(prod.precio*prod.cant)}</p>
                                </div>
                                <button className="btn btn-danger" onClick={()=> removeItem(prod.id)}>Eliminar Producto</button>
                            </div>


                        </div>
                        
                
                )}


                    <div className='finalizarCompra'>
                    <p>Resumen de la Compra: ${new Intl.NumberFormat('de-De').format(totalPrice())}</p>
                        <div className='botoncompra'>
                            <button className='btn btn-outline-danger' onClick={emptyCart}>Vaciar Carrito</button>
                            <button className={`btn ${darkMode ? 'btn-outline-dark': 'btn-secondary'}`}><Link className='nav-link' to={'/'}>Continuar Comprando</Link></button>
                            <button className='btn btn-outline-success'><Link className='nav-link' to={'/Checkout'}>Finalizar Compra</Link></button>
                        </div>
                    </div>
                </div>

                }
        </>)
    }

export default Cart;
