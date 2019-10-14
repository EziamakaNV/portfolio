import React from 'react';

export default (props) => (
  <header>
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper white">
          <a href="#!" className="brand-logo grey-text">Portfolio</a>
          <a href="#" data-target="header-sidenav" className="sidenav-trigger"><i className="material-icons black-text">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="#about" className="black-text">About</a></li>
            <li><a href="#experience" className="black-text">Experience</a></li>
            <li><a href="#work" className="black-text">Work</a></li>
            <li><a href="#contact" className="black-text">Contact</a></li>
          </ul>
        </div>
      </nav>
    </div>
    {/* classes sidenav are hidden until initiated */}
      {/* classes sidenav-trigger hidden until the screen is small */}
      <ul className="sidenav" id="header-sidenav">
        <li>
          <a href="#about" className="black-text">About</a>
          <div className="divider" />
        </li>
        <li>
          <a href="#experience" className="black-text">Experience</a>
          <div className="divider" />
        </li>
        <li>
          <a href="#work" className="black-text">Work</a>
          <div className="divider" />
        </li>
        <li>
          <a href="#contact" className="black-text">Contact</a>
          <div className="divider" />
        </li>
      </ul>
  </header>
);
