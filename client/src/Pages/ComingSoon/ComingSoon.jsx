import React from "react";
import "./ComingSoon.css";
import GlitchAnimator from "../../Components/GlitchAnimator/GlitchAnimator";
import Starfall from "../../Components/Starfall/Starfall";

const ComingSoon = () => {
    return (
        <div className="coming-soon-container">
            <Starfall />
            <div>
                <GlitchAnimator text="COMING SOON" />
            </div>
        </div>
    );
};

export default ComingSoon;
