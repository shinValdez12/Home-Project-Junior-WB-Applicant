import './services.css';

import kitchenImg from '../../assets/path-to-kitchen-img.jpg';
import housePoolImg from '../../assets/path-to-house-pool.jpg';
import woodenKeyImg from '../../assets/path-to-wooden-key.jpg';

function Services() {
    return(
        <section className="services-section">
            <h2 className="services-title">GET IT SOLD</h2>

            <div className="service-container">
                <div className="service-row reverse">
                    <div className="service-image">
                        <img src={kitchenImg} alt="Kitchen"/>
                    </div>
                    <div className="service-text">
                        <h3>Top Residential Sales Last 5 Years</h3>
                        <p>We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.</p>
                    </div>
                </div>

                <div className="service-row reverse">
                    <div className="service-image ">
                        <img src={housePoolImg} alt="House"/>
                    </div>
                    <div className="service-text">
                        <h3>Don't Just List it...</h3>
                        <p>Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.</p>
                    </div>
                </div>

                <div className="service-row reverse">
                    <div className="service-image">
                        <img src={woodenKeyImg} alt="Key"/>
                    </div>
                    <div className="service-text">
                        <h3>Guide to Buyers.</h3>
                        <p>Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;