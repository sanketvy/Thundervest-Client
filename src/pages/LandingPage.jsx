import React from 'react';
import NavbarComponent from "../components/landing/NavbarComponent";
import HeroComponent from "../components/landing/HeroComponent";

/**
 * Author : Sanket Vyawahare
 * Props : none
 * Responsibility : Landing Page of Thundervest. This page should contain the landing page components, and links to log in and signup pages.
 */
const LandingPage = () => {
    return(
        <div className="bg-blue-100">
            {/* Navigation bar */}
            <NavbarComponent />

            {/* Hero Section */}
            <HeroComponent />
            {/* Features Companies */}

            {/* Highlights & News */}

            {/* Call to Action */}

            {/* Contact Form */}

            {/* Footer */}
        </div>
    )
}

export default LandingPage;