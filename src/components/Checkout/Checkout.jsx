import React from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrdenCompra, getOrdenCompra, getProducto, updateProducto} from '../../assets/firebase';
import { useCarritoContext } from '../../context/CarritoContext';
import { toast } from 'react-toastify';

const Checkout = () => {
    const {totalPrice, carrito, emptyCart} = useCarritoContext()
    const formulario = React.useRef()
    let navigate = useNavigate() //variable que me indica en que componente estoy

    const consultarFormulario = (e) =>{
        e.preventDefault()
        const datForm = new FormData(formulario.current)
        const cliente = Object.fromEntries(datForm)
        const aux = [...carrito]

        if(cliente.email === cliente.email2){
            aux.forEach(prodCarrito => {
            getProducto(prodCarrito.id).then(prodBDD => {
                if(prodBDD.stock >= prodCarrito.cant) {
                    prodBDD.stock -= prodCarrito.cant //descuento stock
                    updateProducto(prodCarrito.id, prodBDD)//actualizo stock luego de la compra

                } else {
                    console.log("Stock invalido")

                }
            })
            })

            console.table(cliente)
            createOrdenCompra(cliente, totalPrice(), new Date().toISOString().slice(0,10)).then(ordenCompra => {
                getOrdenCompra(ordenCompra.id).then(item => {
                    toast.success(`¡Compra realizada! Muchas gracias!, su número de orden es: ${item.id}`)
                    emptyCart()
                    e.target.reset()
                    navigate("/")//Finalizada la compra me vuelvo a la ruta inicial
                }).catch(error => {
                    toast.error("🤕 La orden no fue generada!")
                    console.error(error)
                })
                
            })
        }
        else{
            toast.error("🤕 email invalido!")
        }

        
    }
    return (
        <div className="container">

        <form onSubmit={consultarFormulario} ref={formulario} className='formulario'>
            <div className='formulario_cuerpo'>
                <label htmlFor="nombre">Nombre y Apellido:</label>
                <input type="text" defaultValue="Nombre y Apellido" name="nombre" tabIndex={1} required />
                <label htmlFor="email">Dirección de e-mail:</label>
                <input type="email" defaultValue="abc@xyz.com" name="email" tabIndex={2} required/>
                <label htmlFor="email">Re-ingresar e-mail:</label>
                <input type="email" defaultValue="abc@xyz.com" name="email2" tabIndex={2} required/>
                <label htmlFor="dni">DNI:</label>
                <input type="number" defaultValue="11111111" name="dni" tabIndex={3} required/>
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" defaultValue="Calle 1111" name="direccion" tabIndex={4} required/>
                <label htmlFor="celular">Teléfono:</label>
                <input type="number" defaultValue="1155555555" name="celular" tabIndex={5} required/>
                <div className='formulario_botones'>
                    <button className='btn btn-secondary' type="submit">Comprar</button>
                    <button className='btn btn-secondary' typer="reset">Cancelar</button>
                </div>
            </div>
        </form>
        </div>
    );
}

export default Checkout;
