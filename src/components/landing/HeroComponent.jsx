import React from "react";
import heroImage from '../../resources/hero-img.png';
/**
 * Author : Sanket Vyawahare
 * Props : none
 * Responsibility : Hero Section for Thundervest
 */
const HeroComponent = () => {
    return(
        <React.Fragment>
            <div className="p-10 text-center mt-20">
                <h1 className="text-6xl">Empowering Startups. Enabling Investors. Fueling Growth</h1>
                <p className="text-2xl">A secure platform connecting visionary startups with investors to raise capital
                    and scale together.</p>
                <button className="py-2 px-10 bg-blue-600 text-2xl text-white mt-10 mr-6 rounded-md">Investors</button>
                <button className="py-2 px-10 bg-blue-600 text-2xl text-white mt-10 mr-6 rounded-md">Business</button>
            </div>
            <div className="flex justify-center">
                <img className="w-[800px]" alt="Happy millionaire taking bath with cash" src={heroImage} />
            </div>
        </React.Fragment>
    )
}

export default HeroComponent;