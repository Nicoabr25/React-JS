import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
        <a className="menu nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
        <div className="dropdown-menu">
            <a className="dropdown-item"><Link to={"/categoria/Elemental"}>Elemental</Link></a>
            <a className="dropdown-item"><Link to={"/categoria/Veraniego"}>Veraniego</Link></a>
            <a className="dropdown-item"><Link to={"/categoria/Otoñal"}>Otoñal</Link></a>
        </div>
    </li>
    );
}

export default Categorias;
