import React from "react";
import "./Hype.css";
import HypeCard from "../../Components/HypeCard/HypeCard";
import { CalendarOutlined, SmileOutlined, SmileTwoTone, TrophyOutlined, UsergroupAddOutlined } from "@ant-design/icons";
import GlitchAnimator from "../../Components/GlitchAnimator/GlitchAnimator";

const Hype = () => {
    return (
        <section className="instruo-hype">
            <div className="heading">
                Making The Hype <span className="highlight"><GlitchAnimator text={'Real'} styles={{ fontSize: '3rem' }} /></span>
            </div>
            <div className="hype-stats">
                <HypeCard
                    count={"6000"}
                    desc={"Crowds Growing with Excited Footfall"}
                    subtitle={"Footfall"}
                    color={"#C096DD"}
                    Icon={UsergroupAddOutlined}
                />
                <HypeCard
                    count={"17"}
                    desc={"High Satisfaction Among Our Sponsors"}
                    subtitle={"Sponsors' satisfaction"}
                    color={"#5FAFC1"}
                    Icon={SmileOutlined}
                />
                <HypeCard
                    count={"20"}
                    desc={"Stay Updated on Upcoming Events"}
                    subtitle={"Events"}
                    color={"#549DF6"}
                    Icon={CalendarOutlined}
                />
                <HypeCard
                    count={"800"}
                    suffix={"k+"}
                    desc={"Exciting Prize Money Awaits the Winners"}
                    subtitle={"Prize Money"}
                    color={"#E7D368"}
                    Icon={TrophyOutlined}
                />
            </div>
        </section>
    );
};

export default Hype;
