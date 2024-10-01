import React from 'react';

/**
 * Author : Sanket Vyawahare
 * Props : none
 * Responsibility : Navbar Component of Landing Page.
 */
const NavbarComponent = () => {
    return(
        <nav className="bg-blue-600 flex text-white w-full justify-between">
            <div>
                <h1 className="pl-10 p-4 text-3xl ">Thundervest</h1>
            </div>

            <div className="mr-10 flex mt-6">
                <a href="/home" className="pl-6">About</a>
                <a href="/home" className="pl-6">Featured</a>
                <a href="/home" className="pl-6">News</a>
                <a href="/home" className="pl-6">Testimonials</a>
                <a href="/home" className="pl-6">Contact</a>
            </div>
        </nav>
    )
}

export default NavbarComponent;