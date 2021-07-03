import '../../App.css';
import Nav from '../nav/nav.js';
import Landing from '../landing/landing'
import Overview from '../overview/overview';
import Partners from '../partners/partners';
import Token from '../token/token';
import Security from '../security/security';
import Footer from '../footer/footer';

function Home() {
    return (
      <div className="Home">
        <Nav />
        <Landing />
        <Partners />
        <Overview />
        <Token />
        <Security />
        <Footer />
      </div>
    );
  }
  
  export default Home;