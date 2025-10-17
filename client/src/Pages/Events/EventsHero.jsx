import "./EventsHero.css";
import GlitchAnimator from "../../Components/GlitchAnimator/GlitchAnimator";

const EventsHero = () => {
  return (
    <div className="events-hero">
      <GlitchAnimator text="Events" styles={{fontSize: "5rem"}} />
      <div className="byline">
        Step into the heartbeat of Instruo—our events are crafted to captivate,
        inspire, and challenge you to reach new heights. Whether you&apos;re
        here to compete, learn, or simply be amazed, there&apos;s something
        extraordinary waiting for you. Dive in and make every second count!
      </div>
    </div>
  );
};

export default EventsHero;
