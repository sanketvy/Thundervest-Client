import React, {useEffect, useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LandingPage from "./pages/LandingPage";

/**
 * Author : Sanket Vyawahare
 * Props : none
 * Responsibility : Main parent class of all the components in the file. Primarily responsible for routing to multiple pages of the SPA.
 */

const App = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        setIsAuthenticated(true);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {/* Permitted Routes, visible to all */}
                <Route path="/" element=<LandingPage/> />
                <Route path="/login" element={<h1>Login Page</h1>}/>
                <Route path="/register" element={<h1>Register Page</h1>}/>

                {/* Authenticated Routes, only visible for Authenticated Users */}
                {
                    isAuthenticated ?
                        <React.Fragment>
                            <Route path="/home" element={<h1>Home Page</h1>}/>
                            <Route path="/profile/*" element={<h1>Profile Page for startups</h1>}/>
                            <Route path="/marketplace" element={<h1>Marketplace Page</h1>}/>
                            <Route path="/order" element={<h1>Order Page</h1>}/>
                        </React.Fragment> : null
                }
                <Route path="/*" element={<h1>Error Page not found</h1>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
