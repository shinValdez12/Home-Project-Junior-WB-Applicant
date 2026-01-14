import { useState } from "react";
import './gallery.css';

import house1 from '../../assets/house1.jpg';
import house2 from '../../assets/house2.jpg';
import house3 from '../../assets/house3.jpg';
import house4 from '../../assets/house4.jpg';
import house5 from '../../assets/house5.jpg';
import house6 from '../../assets/house6.jpg';
import house7 from '../../assets/house7.jpg';

function Gallery() {
    const houses = [
        house1,
        house2,
        house3,
        house4,
        house5,
        house6,
        house7
    ];

    const [mainImg, setMainImg] = useState(houses[0]);

    return(
        <section className="gallery-section">
            <h2 className="gallery-title">PHOTO GALLERY</h2>

            <div className="gallery-container">
                <div className="main-image-box">
                    <img src={mainImg} alt="Feature Property"/>
                </div>
            </div>

            <div className="thumbnail-row">
                {houses.map((pic, index) => (
                    <div className={`thumb ${mainImg === pic ? 'active' : ''}`}
                    key={index}
                    onClick={() => setMainImg(pic)}
                    >
                        <img src={pic} alt={`Preview ${index}`}/>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;