import './Merchandise.css';
import GlitchAnimator from '../../Components/GlitchAnimator/GlitchAnimator';
import CustomButton from '../../Components/CustomButton/CustomButton';

const Merchandise = () => {
  return (
    <div className="merch">
      <div className="hero-section">
        <div className="banner"></div>
        <GlitchAnimator text="Merchandise" />
        <p>
          INSTRUO 14.0 is back — bigger, bolder, and smarter than ever! And what
          better way to flex your fest spirit than with our exclusive official
          INSTRUO T-shirt 👕✨ Crafted with premium fabric and a sleek design
          that screams tech and style — this is more than just merch, it's a
          vibe. 💥 Get yours now for <b style={{fontSize: "1.2rem"}}>just ₹349 (all inclusive)</b> and be part of
          the legacy of IIEST Shibpur's biggest techno-management fest! 🔥
          Limited stock — grab yours before it's gone!
        </p>
        <CustomButton text={"Grab yours now!"} href="https://forms.gle/BdUKf1mc2JmSrvsb9" target="_blank" rel="noopener noreferrer" />
      </div>
      <div className="poster"></div>
    </div>
  );
};

export default Merchandise;
