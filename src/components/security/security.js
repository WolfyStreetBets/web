import React from 'react';
import './security.css';
//img
import SolidityFinance from '../../img/solidityFinanceLogo.png';
import Halborn from '../../img/halbornLogo.png';

const Security = () => (
    <section className="security" id="security">
        <div className="heading">
            <h1>SECURITY</h1>
            <h2 id="subtitle">Each and every component of the ecosystem is rigorously audited by our best-in-class security partners.
            We pride ourselves on diligence and thorougness.</h2>
        </div>
        <div className="securityContent">
            <div className="secContentBox">
                <img id="solFi" src={SolidityFinance}></img>
                <p>Our native WOLFY token smart contract was successfully audited by Solidity Finance. </p>
            </div>
            <div className="secContentBox">
                <img src={Halborn}></img>
                <p>The WolfyStreetBets Prediction Market smart contracts are currently undergoing a rigorous audit by the leading Halborn Security.</p>
            </div>
        </div>
    </section>  
  );
  
  export default Security;
  