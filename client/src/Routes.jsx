import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import Teams from "./Pages/Teams/Teams";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<div>Home Page</div>} />
            <Route path="/team" element={<Teams />} />
        </Routes>
    )
}

export default AllRoutes;