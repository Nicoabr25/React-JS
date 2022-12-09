import './Navbar.css';
import { Link } from 'react-router-dom';
import Categorias from './Categorias/Categorias';
import CartWidget from '../CartWidget/CartWidget';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a class="navbar-brand"><img src="./img/logo.png" alt="aromaLabLogo"/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <a className="menu nav-link active"><Link to={"/"}>Inicio
                                <span className="visually-hidden">(current)</span>
                            </Link></a>
                        </li>
                        <Categorias/>
                        <li className="nav-item">
                            <a className="menu nav-link" href="">Contacto</a>
                        </li>
                    </ul>
                        <CartWidget/>
                </div>
            </div>
        </nav>


    );
}

export default Navbar;

