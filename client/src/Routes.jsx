import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import Teams from "./Pages/Teams/Teams";
import Home from "./Pages/Home/Home";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Teams />} />
        </Routes>
    )
}

export default AllRoutes;