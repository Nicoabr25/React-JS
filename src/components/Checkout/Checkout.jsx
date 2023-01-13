import React from 'react';
import { useNavigate } from 'react-router-dom';
const Checkout = () => {

    const formulario = React.useRef()
    let navigate = useNavigate() //variable que me indica en que componente estoy

    const consultarFormulario = (e) =>{
        e.preventDefault()
        const datForm = new FormData(formulario.current)
        const cliente = Object.fromEntries(datForm)
        console.table(cliente)
        e.target.reset()
        navigate("/")//Finalizada la compra me vuelvo a la ruta inicial
        
    } 
    return (
        <div className="container">

        <form onSubmit={consultarFormulario} ref={formulario} className='formulario'>
            <div className='formulario_cuerpo'>
                <label htmlFor="nombre">Nombre y Apellido:</label>
                <input type="text" defaultValue="Nombre y Apellido" name="nombre" tabIndex={1} />
                <label htmlFor="email">Dirección de e-mail:</label>
                <input type="email" defaultValue="abc@xyz.com" name="email" tabIndex={2} />
                <label htmlFor="DNI">DNI:</label>
                <input type="number" defaultValue="11111111" name="DNI" tabIndex={3} />
                <label htmlFor="direccion">Dirección:</label>
                <input type="text" defaultValue="Calle 1111" name="direccion" tabIndex={4} />
                <label htmlFor="celular">Teléfono:</label>
                <input type="number" defaultValue="1155555555" name="celular" tabIndex={5} />
                <label htmlFor="comentario">Déjanos tu comentario:</label>
                <textarea className="dato" placeholder="Escribí aquí tu comentario:" name="comentario" rows={10} cols={30} tabIndex={3} defaultValue={"\"Comentario de prueba...\""} />
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
