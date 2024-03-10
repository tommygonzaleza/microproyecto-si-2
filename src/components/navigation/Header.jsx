import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Header(){
    return <nav class="navbar navbar-expand-lg sticky-top navbar-dark" style={{
        backgroundColor: "#242424"
    }}>
    <div class="container-fluid">
      <a class="navbar-brand" href="#">NombrePagina</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Clubes</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Videojuegos</a>
        </li>
        </ul>
          <a class="btn btn-outline-secondary" href="#" style={{
            color:"whitesmoke",
          }}>Registrarse</a>
      </div>
    </div>
  </nav>
}