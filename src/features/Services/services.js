import './services.css';

import kitchenImg from '../../assets/path-to-kitchen-img.jpg'; 
import housePoolImg from '../../assets/path-to-house-pool.jpg';
import woodenKeyImg from '../../assets/path-to-wooden-key.jpg';

function Services() {
    return (
        <section className="services-section">
            <h2 className="services-title">GET IT SOLD</h2>
            
            <div className="services-grid-container">
                <div className="service-card">
                    <div className="service-image">
                        <img src={kitchenImg} alt="Kitchen"/>
                        <span className="card-tag">Residential</span>
                    </div>
                    <div className="service-text">
                        <h3>Top Residential Sales Last 5 Years</h3>
                        <p>We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard every day to grow and learn.</p>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-image">
                        <img src={housePoolImg} alt="House"/>
                        <span className="card-tag">Listings</span>
                    </div>
                    <div className="service-text">
                        <h3>Don't Just List it...</h3>
                        <p>Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer.</p>
                    </div>
                </div>

                <div className="service-card">
                    <div className="service-image">
                        <img src={woodenKeyImg} alt="Key"/>
                        <span className="card-tag">Buyers</span>
                    </div>
                    <div className="service-text">
                        <h3>Guide to Buyers.</h3>
                        <p>Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis and more!</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;