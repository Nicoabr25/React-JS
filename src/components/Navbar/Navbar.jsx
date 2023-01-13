import './Navbar.css';
import { Link } from 'react-router-dom';
import Categorias from './Categorias/Categorias';
import CartWidget from '../CartWidget/CartWidget';
import BotonDarkMode from './BotonDarkMode/BotonDarkMode';

//Context

import { useDarkModeContext } from '../../context/DarkModeContext';

const Navbar = () => { 
    const {darkMode} = useDarkModeContext()
    return (
        <nav className={`navbar navbar-expand-lg ${darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
            <div className="container-fluid">
                <p class="navbar-brand"><img src="https://firebasestorage.googleapis.com/v0/b/react-nicolasabraham.appspot.com/o/logo.png?alt=media&token=9b24d6c5-ea21-4cab-b754-0193c6018ea9" alt="aromaLabLogo"/></p>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarColor03">
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item">
                            <Link className="menu nav-link active" to={"/"}>Inicio
                                <span className="visually-hidden">(current)</span>
                            </Link>
                        </li>
                        <Categorias/>
                        <li className="nav-item">
                            <Link className="menu nav-link" to={"/"}>Contacto</Link>
                        </li>
                    </ul>
                        <BotonDarkMode/>
                        <CartWidget/>
                </div>
            </div>
        </nav>


    );
}

export default Navbar;

