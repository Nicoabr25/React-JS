import React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import consultarBDD from "../../assets/funciones.js"
import { cargarBDD } from '../../assets/firebase';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const {categoria} = useParams()

    useEffect(()=> {
        if(categoria) {
            consultarBDD("../json/productos.json").then(products => {
                const productslist= products.filter(prod => prod.stock >0).filter(prod => prod.idCategoria === categoria)
                const cardProductos = ItemList({productslist}) //ItemList va a transofrmar el arrray de productos de js a objetos de jsx mediante map//
                    setProductos(cardProductos)
            })

        }else{
        consultarBDD("./json/productos.json").then(products => {
        const productslist= products.filter(prod => prod.stock >0)
        const cardProductos = ItemList({productslist}) //ItemList va a transofrmar el arrray de productos de js a objetos de jsx mediante map//
            setProductos(cardProductos)
        })
    }
    
    //cargarBDD().then(productos => console.table(productos))

},[categoria]); //LO que hace el useEffect es ejecutar la funcion consultarBDD cuando ocurran cambios en el array que defini en useState, osea que el array aranca vacio, se llena y ya el useEffect no lo ejecuta de nuevo hasta que haya otra modificación en el array, de esta forma controlo cuantas veces se ejecuta la consulta a BDD//

    
    return (
        <>
        {productos}
        </>
    );
}

export default ItemListContainer;
