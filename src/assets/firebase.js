
import { initializeApp } from "firebase/app";
import {getFirestore, addDoc, collection} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "react-nicolasabraham.firebaseapp.com",
    projectId: "react-nicolasabraham",
    storageBucket: "react-nicolasabraham.appspot.com",
    messagingSenderId: "127881755068",
    appId: "1:127881755068:web:d6f9350c8b2b9d9bb893b9"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore()

const cargarBDD  = async() => {
    const promise = await fetch ('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"),{
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            modelo: prod.modelo,
            precio: prod.precio,
            stock : prod.stock,
            description: prod.description,
            img: prod.img
        })
        
    });
}

export {cargarBDD}