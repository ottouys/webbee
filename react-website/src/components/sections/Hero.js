import React from 'react';
import background from "../../assets/images/home-banner-1.png";

export const Hero = () => {
    return (
        <header className="hero-image" style={{ backgroundImage: `url(${background})` }}>
            <div className="hero-text">
                <h5>We’ve got the <strong>honey</strong></h5>
                <p>Offering graphic design, web design, and web development services.</p>                
            </div>
        </header>
    )
}
