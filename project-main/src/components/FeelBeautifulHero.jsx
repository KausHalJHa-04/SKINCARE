import React from "react";
import img9 from '../assets/img9.png';

const FeelBeautifulHero = () => (
  <div className="fb-hero-root">
    <div className="fb-hero-image">
      <img
        src={img9}
        alt="Product and leaf"
        className="fb-hero-bg"
      />
      <div className="fb-hero-overlay" />
      <div className="fb-hero-content">
        <div className="fb-hero-text">
          Feel Beautiful Inside and Out<br />with Every Product.
        </div>
        <button className="fb-hero-btn">Shop Now</button>
      </div>
    </div>
    <style>{`
      .fb-hero-root {
        width: 98vw;
        min-height: 100vh;
        // background: #FAFCF4;
        padding: 0;
        margin: 0;
        font-family: 'Inter', Arial, sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .fb-hero-image {
        width: 98vw;
        max-width: 1080px;
        height: 92vh;
        min-height: 340px;
        max-height: 700px;
        border-radius: 22px;
        overflow: hidden;
        position: relative;
        display: flex;
        align-items: stretch;
        justify-content: center;
        box-shadow: 0 8px 45px rgba(40,68,40,0.07);
        background: #eee;
      }
      .fb-hero-bg {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fb-hero-overlay {
        position: absolute;
        left: 0; top: 0; width: 100%; height: 100%;
        background: linear-gradient(180deg, rgba(0,0,0,0.00) 55%, rgba(22,27,17,0.28) 100%);
        z-index: 2;
      }
      .fb-hero-content {
        position: absolute;
        left: 0; right: 0; bottom: 0; top: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 3;
        padding-bottom: 10vh;
        margin-top: 450px;
      }
      .fb-hero-text {
        color: #fff;
        font-size: 2.6rem;
        font-weight: 400;
        text-align: center;
        letter-spacing: -0.5px;
        margin-bottom: 38px;
        text-shadow: 0 3px 22px rgba(30,40,30,0.14);
        line-height: 1.15;
      }
      .fb-hero-btn {
        background: #fff;
        color: #232A23;
        border: none;
        border-radius: 22px;
        font-size: 16px;
        font-weight: 500;
        padding: 13px 38px;
        box-shadow: 0 2px 20px rgba(70,80,70,0.09);
        cursor: pointer;
        transition: background 0.18s;
      }
      .fb-hero-btn:hover {
        background: #000;
        color: #fff;
      }
      @media (max-width: 900px) {
        .fb-hero-image {
          height: 58vw;
          min-height: 210px;
          border-radius: 16px;
        }
        .fb-hero-text {
          font-size: 2rem;
          margin-bottom: 28px;
        }
        .fb-hero-content {
          padding-bottom: 7vw;
        }
      }
      @media (max-width: 600px) {
        .fb-hero-image {
          width: 99vw;
          height: 62vw;
          min-height: 160px;
          max-width: 100vw;
          border-radius: 7vw;
        }
        .fb-hero-text {
          font-size: 1.08rem;
          margin-bottom: 18px;
        }
        .fb-hero-btn {
          font-size: 14px;
          padding: 10px 24px;
          border-radius: 15px;
        }
        .fb-hero-content {
          padding-bottom: 6vw;
        }
      }
      @media (max-width: 400px) {
        .fb-hero-image {
          border-radius: 6vw;
          overflow: hidden;
        }
        .fb-hero-text {
          font-size: 0.97rem;
          overflow: hidden;
        }
      }
    `}</style>
  </div>
);

export default FeelBeautifulHero;