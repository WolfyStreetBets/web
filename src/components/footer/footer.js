import React from 'react';
import './footer.css';
import Litepaper from '../../img/WOLFY-Litepaper-v1.0.pdf';
import Logo from '../../img/logo.png';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer>   
      <div className="footerMain">
        <div className="footerLogo">
            <img src={Logo}></img>
            <p id="logoText">WolfyStreetBets</p>
        </div>
        <div className="externalLinks">
          <a className="nava" href="https://www.coingecko.com/en/coins/wolfy" target="_blank" rel="noreferrer">coingecko <i class="fas fa-external-link-alt fa-xs"></i></a>
          <span>|</span>
          <a className="nava" href="https://info.uniswap.org/pair/0x75c83c6dafe52218f7a13c8244e9af5b60bc4511" target="_blank" rel="noreferrer">GET WOLFY <i class="fas fa-external-link-alt fa-xs"></i></a>
          <span>|</span>
          <a className="nava" href="https://solidity.finance/audits/Wolfy/" target="_blank" rel="noreferrer">WOLFY Audit <i class="fas fa-external-link-alt fa-xs"></i></a>
          <span>|</span>
          <a className="nava" href={Litepaper} target="_blank">Litepaper <i class="fas fa-external-link-alt fa-xs"></i></a>
          <span>|</span>
          <span className="launchbtn">
            <Link to="/predict">PREDICT <i class="fas fa-external-link-alt fa-xs"></i></Link> 
          </span>
        </div>
      </div>
      <hr></hr>
      <div className="social">
        <div className="copyright">
          <p id="contentp3">&#169; 2021 WolfyStreetBets</p>
        </div>
        <div className="socialLinks">
          <span id="footerDivider">|</span>
          <a href="https://t.me/wolfycoin" target="_blank" rel="noreferrer"><i class="fab fa-telegram-plane fa-2x"></i></a>
          <a href="https://twitter.com/wolfystreetbets" target="_blank" rel="noreferrer"><i class="fab fa-twitter fa-2x"></i></a>
          <a href="https://wolfystreetbets.medium.com" target="_blank" rel="noreferrer"><i class="fab fa-medium-m fa-2x"></i></a>
          <a href="https://github.com/wolfystreetbets" target="_blank" rel="noreferrer"><i class="fab fa-github fa-2x"></i></a>
        </div>
      </div>    
    </footer>  
  );
  
  export default Footer;
  