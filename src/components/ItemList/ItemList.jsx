//Recibe un array de objetos hecho cards//
import React from 'react';
import Item from '../Item/Item';

//Transforma el array productList a un objeto de react. Para ello toma un item del array *product* guiandose por la key y lo envia al componente Item que lo transforma en una card, eso por cada elemento en el array producList//
const ItemList = ({productslist}) => {
    return (
        <div className='row card-center'>
        {productslist.map(product => <Item key={product.id} producto={product}/>)} 
        </div>
    );
}

export default ItemList;
