import React from 'react';
import './token.css';
//img
import Logo from '../../img/logo.png';
import TokenStats from './tokenStats';

const Token = () => (
    <section className="token" id="token">
        <div className="heading">
            <h1>WOLFY Token</h1>
            <h2 id="subtitle">The native utility token of the WolfyStreetBets project.</h2>
        </div>
        <div><img src={Logo} id="bodylogo"></img></div>
        <div className="tokenContainer">
            <div className="tokenInfo">
                <p id="contentp2">WOLFY is a hyper-deflationary ERC-20 Token with built-in reflection.
                    As well as providing auto-staking rewards, it also gives users the access rights to the ecosystem. 
                    WolfyStreetBets users are required to hold a fair 5,000 WOLFY Tokens for access and participation.
                    WOLFY holders are also rewarded with early adoption / community-first incentives, such as guaranteed allocation on the 
                    upcoming DAO.
                </p>
                <p style={{fontWeight: 'bold'}}>0x7dbbcae15d4db168e01673400d7844870cc1e36f</p>
                <p>Audited by Solidity Finance</p>
                <a className="mainBtn" target="_blank" rel="noreferrer" href="https://solidity.finance/audits/Wolfy/">Read the Audit <i class="fas fa-external-link-alt fa-xs"></i></a>
            </div>
            <TokenStats></TokenStats>
        </div>
    </section>  
  );
  
  export default Token;
  