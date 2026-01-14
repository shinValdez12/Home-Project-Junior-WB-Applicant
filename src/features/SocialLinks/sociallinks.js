import './sociallinks.css';

import fbIcon from '../../assets/facebook.png';
import igIcon from '../../assets/instagram.png';
import liIcon from '../../assets/linkedin.png';
import ypIcon from '../../assets/yelp.png';

function SocialLinks() {
  return (
    <section className="social-footer">
      <div className="icon-row">
        <a href="https://www.facebook.com/MarciHomes/" target="_blank" rel="noreferrer">
          <img src={fbIcon} alt="Facebook" className="social-logo" />
        </a>
        <a href="https://www.instagram.com/marciandlauren_nvrealtors/" target="_blank" rel="noreferrer">
          <img src={igIcon} alt="Instagram" className="social-logo" />
        </a>
        <a href="https://www.linkedin.com/in/marci-metzger-30642496/" target="_blank" rel="noreferrer">
          <img src={liIcon} alt="LinkedIn" className="social-logo" />
        </a>
        <a href="https://www.yelp.com/biz/marci-metzger-the-ridge-realty-pahrump" target="_blank" rel="noreferrer">
          <img src={ypIcon} alt="Yelp" className="social-logo" />
        </a>
      </div>
    </section>
  );
}

export default SocialLinks;