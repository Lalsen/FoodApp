import React from 'react';

const TopBar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: 'orange', position: 'fixed', top: 0, width: '100%', zIndex: 1000 }}>
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold" href="#">
          <img src="swiggyLogo.png" alt="Logo" width="65" height="54" className="d-inline-block align-text-top" />
          SWIGGY
        </a>

        {/* Navbar Toggle Button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ms-auto">  {/* ms-auto moves it to the right */}
            <a className="nav-link active" aria-current="page" href="#"> Login </a>
            <a className="nav-link" href="#"> SignUp </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default TopBar;
