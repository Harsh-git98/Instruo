import "./DayRight.css";
import EventGroup from "../../Components/EventGroup/EventGroup";
import GlitchAnimator from "../../Components/GlitchAnimator/GlitchAnimator";

const DayRight = ({ events }) => {
    return (
        <div className="dayright">
            <div className="content">
                <div className="scroll-enhancer">
                    <div className="left"></div>
                    <div className="event-scroll">
                        <EventGroup events={events} />
                    </div>
                    <div className="right"></div>
                </div>
                <div className="about-day">
                    <GlitchAnimator text={`Day Two`} styles={{ fontSize: '3rem' }} />
                    <p>
                        With each passing moment, we evolve, learning to
                        navigate the unfamiliar. Growth isn't in leaps—it's in
                        the quiet realization that we've taken one step further.
                    </p>
                    {/* <CustomButton text={"Know more"} /> */}
                </div>
            </div>
        </div>
    );
};

export default DayRight;
