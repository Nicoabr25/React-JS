

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
        <a className="menu nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
        <div className="dropdown-menu">
            <a className="dropdown-item" href="">elemental</a>
            <a className="dropdown-item" href="">Veraniego</a>
            <a className="dropdown-item" href="">Otoñal</a>
        </div>
    </li>
    );
}

export default Categorias;
