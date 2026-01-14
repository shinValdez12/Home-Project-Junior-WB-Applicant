import './ourservices.css';

import livingRoomImg from '../../assets/service-living.jpg';
import modernHouseImg from '../../assets/service-house.jpg';
import handshakeImg from '../../assets/service-handshake.jpg';

function OurServices() {
    return(
        <section className="our-services-section">
            <h2 className="services-main-title">Our Services</h2>

            <div className="services-grid">

                <div className="service-card">
                    <img src={livingRoomImg} alt="Real Estate" className="service-img"/>
                    <h3>Real Estate Done Right</h3>
                    <p>Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
                </div>


                <div className="service-card">
                    <img src={modernHouseImg} alt="Commercial" className="service-img"/>
                    <h3>Commercial & Residential</h3>
                    <p>Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</p>
                </div>

                <div className="service-card">
                    <img src={handshakeImg} alt="Expertise" className="service-img round"/>
                    <h3>Rely on Expertise</h3>
                    <p>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
                </div>
            </div>
        </section>
    );
}

export default OurServices;