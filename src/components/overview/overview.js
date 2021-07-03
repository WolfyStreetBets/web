import React from 'react';
import './overview.css';
//img
import Multichain from '../../img/multichain.png';
import Zerogas from '../../img/zerogas.png';
import Liquidity from '../../img/liquidity.png';
import Resources from '../../img/resources.png';
import Diverse from '../../img/diverse.png';
import Multiasset from '../../img/multiasset.png';


const Overview = () => (
    <section className="overview">
        <div className="heading" id="overview">
            <h1>Overview</h1>
            <h2 id="subtitle">A whole suite of incentives and resources to create the most user-friendly environment for sustainable Decentralized Prediction Markets.</h2>
        </div>
        <div className="overviewContainer">
            <div className="overviewItem">
                <h3 id="h3subtitle">Multi-chain</h3>
                <div className="overviewItemContent">
                    <p id="contentp">dApp availability, diverse chain-native staking assets and distributed liquidity.
                        Now available on Polygon (previously MATIC) Network, with Binance Smart Chain coming soon!</p>
                    <img src={Multichain}/>
                </div>
            </div>
            <div className="overviewItem">
                <h3 id="h3subtitle">Zero Gas Fees</h3>
                <div className="overviewItemContent">
                    <p id="contentp">Stake, mine liquidity, withdraw rewards - all without having to pay any gas fees. Liquidity incentives and lucrative
                    yield opportunities <i>should </i>exclude network cost.</p>
                    <img src={Zerogas}/>
                </div>
            </div>
            <div className="overviewItem">
                <h3 id="h3subtitle">Liquidity Incentives</h3>
                <div className="overviewItemContent">
                    <p id="contentp">Supply liquidity to the prediction pools for a dynamic but high-yield APY set by the total amount staked. 
                    Help incentivize prediction market users by adding liquidity and reap the yield rewards of increased participation.</p>
                    <img src={Liquidity}/>
                </div>
            </div>
            <div className="overviewItem">
                <h3 id="h3subtitle">Ultra-informative Resources</h3>
                <div className="overviewItemContent">
                    <p id="contentp">TradingView charts for each prediction asset in the (versus) pool. Perform technical analysis to help guide 
                    prediction market use, or use our in-house aggregated newsfeeds for a detailed look at the markets.</p>
                    <img src={Resources}/>
                </div>
            </div>
            <div className="overviewItem">
                <h3 id="h3subtitle">Diverse Prediction Pools</h3>
                <div className="overviewItemContent">
                    <p id="contentp">Stake in a diverse set of prediction pools with categories like DeFi vs CeFi and Crypto vs Stock.
                    Our pool variety will continue to grow.</p>
                    <img src={Diverse}/>
                </div>
            </div>
            <div className="overviewItem">
                <h3 id="h3subtitle">Leading On-chain Staking Assets</h3>
                <div className="overviewItemContent">
                    <p id="contentp">Stake using the leading assets native to the active chain. All with zero gas fees and high liquidity for 
                    high reward potential.</p>
                    <img src={Multiasset}/>
                </div>
            </div>
        </div>
    </section>  
  );
  
  export default Overview;
  