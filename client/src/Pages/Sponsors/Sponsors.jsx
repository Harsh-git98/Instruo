import React, { useEffect, useRef } from 'react';
import './Sponsors.css';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import GlitchAnimator from '../../Components/GlitchAnimator/GlitchAnimator';

const logos = [
  'amul-logo.png',
  'B Natural logo.jpeg',
  'barista_logo.jpg',
  'bisleri_logo.png',
  'cafe-coffee-day-logo.png',
  'CESC_logo.png',
  'coal_india.avif',
  'edudite_logo.png',
  'Fleapo Logo.png',
  'Friends Pizza Logo.png',
  'GateForum Logo.jpeg',
  'Krafton Logo.jpg',
  'LOreal-Symbol.jpg',
  'Nodwin Gaming Logo.png',
  'redFM logo.jpeg',
  'Wow Momo Logo.png',
];

const Sponsors = () => {
  const onButtonClick = () => {
    const pdfUrl = '/assets/Instruo14.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'Instruo14.pdf'; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <section className="sponsors">
      <div className="publicise-bg">
        <img src="/assets/Sponsors/sponsor.png" alt="" srcset="" />
      </div>
      <section className="publicise">
        <h1 className="heading">Want to <br/><span><GlitchAnimator text={"Sponsor"} styles={{fontSize: "3rem"}} /></span> Us?</h1>
        <p>
          The 14th Edition INSTRUO 2025 promises a grander scale with events in
          robotics, coding, entrepreneurship, aeromodelling, gaming, and more,
          truly embodying the spirit of “Driving Innovation.” INSTRUO, the
          annual techno-management fest of IIEST Shibpur, has grown since 2009
          into Kolkata’s largest technical fest and the second largest in
          Eastern India. It offers a platform for students nationwide to
          showcase talent through competitions, exhibitions, and forums. The
          14th Edition – INSTRUO 2025 promises a grander scale with events in
          robotics, coding, entrepreneurship, aeromodelling, gaming, and more,
          truly embodying the spirit of “Driving Innovation.”
        </p>
        <Button
          type="primary"
          onClick={onButtonClick}
          size="large"
          icon={<DownloadOutlined />}
        >
          Download Sponsorship Brochure
        </Button>
      </section>

      <section className="past-sponsors">
        <h1 className="heading">Past <br/><span><GlitchAnimator text={"Sponsors"} styles={{fontSize: "inherit"}} /></span></h1>
        <div className="fbox">
          {logos.map((logo, idx) => (
            <div className="item" key={idx}>
              <img src={`/assets/Sponsors/logo/${logo}`} alt={logo} />
            </div>
          ))}
        </div>
      </section>
    </section>
  );
};

export default Sponsors;
