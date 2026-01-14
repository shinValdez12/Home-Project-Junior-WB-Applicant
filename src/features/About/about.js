import './about.css';
import marciPhoto from '../../assets/marci-portrait.png'

function About({ phoneNumber }) {
    return(
        <section className="about-section">
            <div className="about-container">
                <div className="about-image">
                    <img src={marciPhoto} alt='MARCI METZGER' />
                </div>
                <div className="about-content">
                    <h2>MARCI METZGER</h2>
                    <p className="highlight">REALTOR FOR NEARLY 3 DECADES!</p>
                    <p className="phone">{phoneNumber}</p>
                </div>
            </div>
        </section>
    );
}

export default About;