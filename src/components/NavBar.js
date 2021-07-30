import 'bootstrap/dist/css/bootstrap.min.css'
function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Valerian</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Ofertas</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Historial</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Ayuda</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Usuario
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Cuenta</a></li>
            <li><a className="dropdown-item" href="#">Carrito</a></li>
            <li><a className="dropdown-item" href="#">Favoritos</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
        )

}
export default NavBar;