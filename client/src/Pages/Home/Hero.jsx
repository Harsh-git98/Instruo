import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";
import NeutralButton from "../../Components/NeutralButton/NeutralButton";
import GlitchAnimator from "../../Components/GlitchAnimator/GlitchAnimator";

const Hero = () => {
    return (
        <section className="hero">
                <video
                    className="video-background"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/assets/Home/hero-video.webm" type="video/mp4" />
                </video>
            <div className="title">
                <GlitchAnimator text="INSTRUO" styles = {{fontSize: "15vw"}} />
            </div>
            <p className="desc">
                Step into Kolkata's ultimate tech extravaganza! Dive into innovation, challenge your limits in thrilling
                competitions!
            </p>
            <Link to="/events">
                <NeutralButton
                    text={"EVENTS"}
                />
            </Link>
        </section>
    );
};

export default Hero;
