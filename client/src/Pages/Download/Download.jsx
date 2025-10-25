import './Download.css';
import GlitchAnimator from '../../Components/GlitchAnimator/GlitchAnimator';
import CustomButton from '../../Components/CustomButton/CustomButton';
import { DownloadOurApp } from '../../App';

const Download = () => {
  return (
    <div className="download">
      <div className="hero-section">
        <div className="banner"></div>
        <GlitchAnimator text="Download The App" />
        <p>
          🚀 Get Ready for INSTRUO 14.0!
All event registrations will now happen exclusively through the official INSTRUO mobile app! 📱

Download the app now to explore events, register easily, and stay updated with the latest fest announcements. 🔔
        </p>
        
        <button onClick={()=>window.open(DownloadOurApp, "_blank")} className="apk"><img src="/assets/github-icon.svg" />Download the app</button>
                 
        {/* <CustomButton text={"Download now!"} onClick={()=>window.open(DownloadOurApp, "_blank")} target="_blank" rel="noopener noreferrer" /> */}
      </div>
      <div className="poster"></div>
    </div>
  );
};

export default Download;
