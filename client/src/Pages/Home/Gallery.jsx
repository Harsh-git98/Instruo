import React, { useState } from 'react';
import './Gallery.css';
import GlitchAnimator from '../../Components/GlitchAnimator/GlitchAnimator';

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
      <div className="container">
        <div className="header">
          <GlitchAnimator text={'Moments'} styles={{fontSize: "4rem"}}/>
          <p className="description">
            From coding marathons and electrifying workshops to dazzling project
            demos and brainstorming sessions, our techfest was, is, and forever
            is a whirlwind of innovation, creativity, and collaboration — here’s
            a glimpse of the unforgettable moments!
          </p>
        </div>
        <div className="gallery-img">
          <img src="/assets/Home/gallery.webp" alt="Gallery Image" />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
