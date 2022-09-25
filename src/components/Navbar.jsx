import React from 'react'

import{Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand text-light" to={"/home"}>Marconde Agência de Viagens</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active  text-light" aria-current="page"  to={"/home"}>Home</Link>
              </li>
            </ul>
          </div>
          <Link to="/add" className='btn btn-primary mx-2'> Adicionar Cliente</Link>
        </div>
      </nav>
    </div>
  )
}
