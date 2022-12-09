import { Link } from "react-router-dom";

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
        <a className="menu nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
        <div className="dropdown-menu">
            <Link className="dropdown-item" to={"/categoria/Elemental"}>Elemental</Link>
            <Link className="dropdown-item" to={"/categoria/Veraniego"}>Veraniego</Link>
            <Link className="dropdown-item" to={"/categoria/Otoñal"}>Otoñal</Link>
        </div>
    </li>
    );
}

export default Categorias;
