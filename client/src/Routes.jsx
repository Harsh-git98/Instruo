import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import Teams from "./Pages/Teams/Teams";
import Home from "./Pages/Home/Home";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/events" element={<ComingSoon />} />
            <Route path="/sponsors" element={<ComingSoon />} />
        
        </Routes>
    )
}

export default AllRoutes;