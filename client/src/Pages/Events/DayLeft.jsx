import './DayLeft.css';
import EventGroup from '../../Components/EventGroup/EventGroup';
import GlitchAnimator from '../../Components/GlitchAnimator/GlitchAnimator';

const DayLeft = ({ day, events, para }) => {
  return (
    <div className="dayleft">
      <div className="content">
        <div className="about-day">
          <GlitchAnimator text={`Day ${day==='one'?"One":"Three"}`} styles={{ fontSize: '3rem' }} />
          <p>{para}</p>
          {/* <CustomButton text={"Know more"} /> */}
        </div>
        <div className="scroll-enhancer">
          <div className="left"></div>
          <div className="event-scroll">
            <EventGroup events={events} />
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
};

export default DayLeft;
