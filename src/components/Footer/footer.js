import './footer.css';

import fbIcon from '../../assets/facebook.png';
import igIcon from '../../assets/instagram.png';
import liIcon from '../../assets/linkedin.png';
import ypIcon from '../../assets/yelp.png';

function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-social-row">
        <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noreferrer">
          <img src={fbIcon} alt="Facebook" className="footer-icon" />
        </a>
        <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target="_blank" rel="noreferrer">
          <img src={igIcon} alt="Instagram" className="footer-icon" />
        </a>
        <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noreferrer">
          <img src={liIcon} alt="LinkedIn" className="footer-icon" />
        </a>
        <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" target="_blank" rel="noreferrer">
          <img src={ypIcon} alt="Yelp" className="footer-icon" />
        </a>
      </div>

      <div className="footer-content">
        <p className="copyright-text">
          COPYRIGHT © 2023 MARCI METZGER HOMES - ALL RIGHTS RESERVED
        </p>

        <div className="footer-divider"></div>

        <div className="powered-by-section">
          <span className="powered-label">POWERED BY</span>
          <p className="godaddy-text">GoDaddy Airo</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;