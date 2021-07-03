import React from 'react';
import './nav.css';
import Logo from '../../img/logo.png';
import Litepaper from '../../img/WOLFY-Litepaper-v1.0.pdf';
import { Link } from 'react-router-dom';

const Nav = () => (
    <header className="nav">
        <div className="navLogo">
            <img src={Logo}></img>
            <p id="logoText">WolfyStreetBets</p>
        </div>
        <div className="navLinks">
            <a className="nava" href="#overview">Overview</a>
            <a className="nava" href="#token">WOLFY Token</a>
            <a className="nava" href={Litepaper} target="blank">Litepaper <i class="fas fa-external-link-alt fa-xs"></i></a>
            <a className="nava" href="#security">Security</a>
            <a className="nava" href="">Docs (coming soon)</a>
            <a className="nava" href="">Governance (coming soon)</a>
            <span className="launchbtn">
                <Link to="/predict">PREDICT <i class="fas fa-external-link-alt fa-xs"></i></Link> 
            </span>
        </div>
    </header>  
  );
  
  export default Nav;
  