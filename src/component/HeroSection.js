import React from 'react';
import ApplyForm from './ApplyForm';
import Navbar from './Navbar';

const HeroSection = () => {
    return (
       
      <div className="v-100 hero">
      <div className="video-container">
        <video autoPlay="1" muted="1" loop="1">
          <source
            src="https://www.uni.cards/videos/nxt_wave_bg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="hero-container">
          <Navbar />
          <div className="col-lg-10 mx-auto row mt-5 py-5">
            <div className="col-lg-6 text-center">
              <img
                alt="hero"
                className="hero-image"
                src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
              />
            </div>
            <div className="col-lg-6 order-sm-last order-lg-first d-flex align-items-center justify-content-center">
              <div className="mt-3 py-3">
                <span className="fs-1">
                  <b>NX Wave.</b> The next-gen credit card for those who love
                  rewards.
                </span>
                <div className="mt-1">
                  1% Cashback{" "}
                  <i className="mx-2 fa fa-star" aria-hidden="true"></i> 5x
                  Rewards{" "}
                  <i className="mx-2 fa fa-star" aria-hidden="true"></i>Zero
                  Forex Markup
                </div>
                <ApplyForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default HeroSection;