import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import Teams from "./Pages/Teams/Teams";
import Home from "./Pages/Home/Home";
import ComingSoon from "./Pages/ComingSoon/ComingSoon";
import Events from "./Pages/Events/Events";
import SingleEvent from "./Pages/SingleEvent/SingleEvent";
import Sponsors from "./Pages/Sponsors/Sponsors";

const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Teams />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route exact path="/events/:eventID" element={<SingleEvent />} />
        
        </Routes>
    )
}

export default AllRoutes;