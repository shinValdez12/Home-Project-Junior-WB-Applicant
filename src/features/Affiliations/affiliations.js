import './affiliations.css';

import ridgeLogo from '../../assets/ridge-realty.png';
import housingLogo from '../../assets/equal-housing.png';
import realtorLogo from '../../assets/realtor-logo.png';
import chamberLogo from '../../assets/chamber-commerce.png';

function Affiliations() {
    const logos = [
        ridgeLogo, 
        housingLogo, 
        realtorLogo, 
        chamberLogo
    ];

    return(
        <section className="affiliations-section">
            {logos.map((logo, index) =>(
                <div className="affiliations-container" key={index}>
                    <img src={logo} alt={`Partner ${index}`} />
                </div>
            ))}
        </section>
    )
}

export default Affiliations;