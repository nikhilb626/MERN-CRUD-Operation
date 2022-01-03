import React from 'react';
import Edit from "./components/edit";
import Home from "./components/home";
import {Routes,Route} from 'react-router-dom';


const NavRoute = () => {
    return (
        <>

    <Routes>

    <Route exact path="/" element={<Home/>} />
    <Route exact path="/edit/:id" element={<Edit />} />
    
    </Routes>

            
        </>
    )
}

export default NavRoute;
