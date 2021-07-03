import React from 'react';
import './predict.css';
//img
import Logo from '../../img/logo.png';
import Polygon from '../../img/polygonMatic.png'
import BSC from '../../img/bsc.png';
import Litepaper from '../../img/WOLFY-Litepaper-v1.0.pdf';
import WBTC from '../../img/wBTC.png';
import WETH from '../../img/wETH.png';
import USDT from '../../img/USDT.png';
import BUSD from '../../img/busd.png';
import CAKE from '../../img/cake.png';

const Predict = () => (
    <section className="predict">
        <div className="nav">
        <div className="navLogo">
            <img src={Logo}></img>
            <p id="logoText">WolfyStreetBets</p>
        </div>
        <div className="navLinks">
            <a className="nava" href="https://wolfystreetbets.com/">Home</a>
            <a className="nava" href="https://wolfystreetbets.com/#overview">Overview</a>
            <a className="nava" href="https://wolfystreetbets.com/#token">WOLFY Token</a>
            <a className="nava" href={Litepaper} target="blank">Litepaper <i class="fas fa-external-link-alt fa-xs"></i></a>
            <a className="nava" href="https://wolfystreetbets.com/#security">Security</a>
            <a className="nava" href="">Docs (coming soon)</a>
            <a className="nava" href="">Governance (coming soon)</a>
        </div>
        </div>
        <div className="heading">
            <h1>WolfyStreetBets v1</h1>
            <h2>Select Chain <i class="fas fa-network-wired"></i></h2>
        </div>
        <div className="chains">
            <div className="selectChain" id="polygon">
                <div className="chainHeader">
                    <h2 id="subtitle2">Polygon Mainnet</h2>
                    <h2 id="subtitle2">(Awaiting Audit Completion)</h2>
                    <img src={Polygon}></img>
                </div>
                <div className="chainDetails">
                    <div className="chainDetailsContent">
                        <h2 id="subtitle2">Prediction Pools</h2>
                        <table>
                            <tr>
                                <th>Prediction Assets</th>
                                <th>Category</th>
                                <th>Period</th>
                            </tr>
                            <tr>
                                <td>DPI / SPX</td>
                                <td>DeFi vs CeFi</td>
                                <td>7D</td>
                            </tr>
                        </table>
                    </div>
                    <div className="chainDetailsContent">
                        <h2 id="subtitle2">Staking Assets</h2>
                        <p>Stake with wBTC, wETH or USDT</p>
                        <div className="contentAssets">
                            <div className="assets">
                                <img src={WBTC}></img>
                                <img src={WETH}></img>
                                <img src={USDT}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="" className="launchbtnBorder">Predict on Polygon <i class="fas fa-external-link-alt fa-xs"></i></a>
            </div>
            <div className="selectChain" id="bsc">
                <div className="chainHeader">
                    <h2 id="subtitle2">Polygon Mainnet</h2>
                    <h2 id="subtitle2">(Awaiting Audit Completion)</h2>
                    <img src={BSC}></img>
                </div>
                <div className="chainDetails">
                    <div className="chainDetailsContent">
                        <h2 id="subtitle2">Prediction Pools</h2>
                        <table>
                            <tr>
                                <th>Prediction Assets</th>
                                <th>Category</th>
                                <th>Period</th>
                            </tr>
                            <tr>
                                <td>DPI / SPX</td>
                                <td>DeFi vs CeFi</td>
                                <td>7D</td>
                            </tr>
                        </table>
                    </div>
                    <div className="chainDetailsContent">
                        <h2 id="subtitle2">Staking Assets</h2>
                        <p>Stake with wBTC, CAKE or BUSD</p>
                        <div className="contentAssets">
                            <div className="assets">
                                <img src={WBTC}></img>
                                <img src={CAKE}></img>
                                <img src={BUSD}></img>
                            </div>
                        </div>
                    </div>
                </div>
                <a href="" className="launchbtnBorder">Predict on BSC <i class="fas fa-external-link-alt fa-xs"></i></a>
            </div>   
        </div>
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
        </div>
      </div>
      <hr></hr>
      <div className="social">
        <p id="contentp3">&#169; 2021 WolfyStreetBets</p>
        <span id="footerDivider">|</span>
        <a href="https://t.me/wolfycoin" target="_blank" rel="noreferrer"><i class="fab fa-telegram-plane fa-2x"></i></a>
        <a href="https://twitter.com/wolfystreetbets" target="_blank" rel="noreferrer"><i class="fab fa-twitter fa-2x"></i></a>
        <a href="https://wolfystreetbets.medium.com" target="_blank" rel="noreferrer"><i class="fab fa-medium-m fa-2x"></i></a>
        <a href="https://github.com/wolfystreetbets" target="_blank" rel="noreferrer"><i class="fab fa-github fa-2x"></i></a>
      </div>    
    </footer> 
    </section>  
  );
  
  export default Predict;
  