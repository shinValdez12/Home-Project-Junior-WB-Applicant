import "./hero.css"

import heroBg from "../../assets/hero-bg.png";

function Hero({ phoneNumber }) {
    return(
        <section 
        className="hero-container"
        style={{backgroundImage: `url(${heroBg})`}}>
            <div className="hero-content">
                <p>MARCI METZGER - THE RIDGE REALTY GROUP</p>
                <h1>PAHRUMP REALTOR</h1>
                <a href={`tel:${phoneNumber}`} className="cta-button">CALL NOW</a>
            </div>
        </section>
    );
}

export default Hero;