import React from 'react';
import './partners.css';
//img
import BiconomyLogo from '../../img/BiconomyLogo.png';
import halbornLogo from '../../img/halbornLogo.png';
import polygonLogo from '../../img/polygonLogo.png';
import solidityFinanceLogo from '../../img/solidityFinanceLogo.png';


const Partners = () => (
    <section className="partners">
        <div className="heading">
            <h3>Partners &amp; Integrations</h3>
        </div>
        <div className="partnersImg">
            <img src={BiconomyLogo}/>
            <img src={halbornLogo}/>
            <img src={solidityFinanceLogo}/>
            <img src={polygonLogo}/>
        </div>
    </section>  
  );
  
  export default Partners;
  