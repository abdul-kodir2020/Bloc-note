import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container">
        <Link to="/" className="navbar-brand">
          Petit projet
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasDarkNavbar"
          aria-controls="offcanvasDarkNavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end text-bg-dark"
          tabindex="-1"
          id="offcanvasDarkNavbar"
          aria-labelledby="offcanvasDarkNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasDarkNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              class="btn-close btn-close-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
              id="buttonDismiss"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li class="nav-item">
                <Link
                  to="/"
                  className="nav-link active"
                  aria-current={'page'}
                  onClick={() =>
                    document.getElementById('buttonDismiss').click()
                  }
                >
                  Accueil
                </Link>
              </li>
              <li class="nav-item">
                <Link
                  to="/bloc-note"
                  className="nav-link"
                  onClick={() =>
                    document.getElementById('buttonDismiss').click()
                  }
                >
                  Bloc-Note
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
