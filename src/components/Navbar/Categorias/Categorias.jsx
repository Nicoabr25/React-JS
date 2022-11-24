

const Categorias = () => {
    return (
        <li className="nav-item dropdown">
        <a className="menu nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Productos</a>
        <div className="dropdown-menu">
            <a className="dropdown-item" href="">Estilo 1</a>
            <a className="dropdown-item" href="">Estilo 2</a>
            <a className="dropdown-item" href="">Estilo 3</a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="">Estilo 4</a>
        </div>
    </li>
    );
}

export default Categorias;
