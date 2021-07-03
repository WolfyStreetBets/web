import React from 'react';
import './landing.css';
import Particlebckg from '../particlebckg';
import Litepaper from '../../img/WOLFY-Litepaper-v1.0.pdf';
import { Link } from 'react-router-dom';

const Landing = () => (
    <div className="landing">      
        <div className="landingContent">
        <Particlebckg />
            <h1 className="landingHeadline">Decentralized Prediction Markets for Stock &amp; Crypto Traders</h1>
            <h2>Stake in Decentralized, Automated &amp; Multi-chain Crypto vs Stock Prediction Markets for lucrative yield opportunity or to hedge your
                asset investments.</h2>
                <a className="mainBtn" href={Litepaper} target="blank">Read Litepaper <i class="fas fa-external-link-alt fa-xs"></i></a>
                <span className="launchbtnBorder">
                    <Link to="/predict">PREDICT <i class="fas fa-external-link-alt fa-xs"></i></Link> 
                </span>
        </div>
    </div>  
  );
  
  export default Landing;
  