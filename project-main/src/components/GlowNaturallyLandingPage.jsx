import React from "react";
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';

const GlowNaturallyLandingPage = () => {
  return (
    <div className="gn-root">
      {/* Top right product image */}
      <div className="gn-top-product">
        <img
          src={img2}
          alt="Plum Product"
        />
      </div>

      {/* Left description and button */}
      <div className="gn-left-desc">
        <div className="gn-desc-text">
          Transform your skincare routine with premium products that restore, protect, and enhance your natural glow every day.
        </div>
        <button className="gn-shop-btn">Shop Now</button>
      </div>

      {/* Headline */}
      <div className="gn-headline">
        <div>
          GLOW <br />
          NATUR-<br />
          ALLY
        </div>
      </div>

      {/* Main image and review card */}
      <div className="gn-center-img">
        <div className="gn-img-card">
          <img
            src={img1}
            alt="Natural skincare"
          />
          <div className="gn-review-card">
            <img
              src={img2}
              alt="Cleansing icon"
            />
            While giving you an invigorating cleansing experience.
          </div>
        </div>
      </div>

      {/* Large SKINCARE text */}
      <div className="gn-skincare-bg">SKINCARE</div>

      {/* Responsive CSS Styles */}
      <style>{`
        .gn-root {
          min-height: 100vh;
          background: #F3F7E7;
          font-family: Inter, Arial, sans-serif;
          position: relative;
          overflow: hidden;
        //    display: flex;
         flex-wrap: wrap;

        }
        .gn-top-product {
          position: absolute;
          top: 40px;
          right: 60px;
          z-index: 2;
          display: flex;
          flex-direction: row;
        }
        .gn-top-product img {
          width: 120px;
          height: 90px;
          object-fit: contain;
          border-radius: 15px;
          display: flex;
          flex-direction: column;
        //   box-shadow: 0 6px 24px rgba(50,50,50,0.08);
        }
        .gn-left-desc {
          position: absolute;
          top: 100px;
          left: 60px;
          z-index: 2;
          max-width: 230px;
          text-align: left;
          display: flex;
          flex-direction: column;
        }
        .gn-desc-text {
          color: #444;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 36px;
        }
        .gn-shop-btn {
          background: #232A23;
          color: white;
          border: none;
          border-radius: 24px;
          padding: 10px 28px;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          box-shadow: 0 3px 12px rgba(50,50,50,0.06);
          transition: background 0.2s;
        }
        .gn-shop-btn:hover {
          background: #36513a;
        }
        .gn-headline {
          text-align: center;
          margin-top: 60px;
        }
        .gn-headline > div {
          font-weight: 700;
          font-size: 54px;
          line-height: 1.08;
          color: #253229;
          letter-spacing: -2px;
        }
        .gn-center-img {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 32px;
          position: relative;
          z-index: 3;
        }
        .gn-img-card {
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 8px 48px rgba(50,80,50,0.09);
          width: 420px;
          height: 420px;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          max-width: 95vw;
        }
        .gn-img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .gn-review-card {
          position: absolute;
          bottom: 36px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          background: rgba(248, 253, 243, 0.92);
          border-radius: 22px;
          box-shadow: 0 2px 16px rgba(120,120,120,0.11);
          padding: 8px 22px 8px 12px;
          font-size: 15px;
          color: #232A23;
          font-weight: 400;
          max-width: 310px;
          z-index: 5;
          height: 80px;
          width: 90%;
        }
        .gn-review-card img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          margin-right: 10px;
          background: #fff;
        }
        .gn-skincare-bg {
          position: absolute;
          bottom: -32px;
          left: 0;
          width: 100%;
          z-index: 1;
          font-weight: 700;
          font-size: 250px;
          color: #303b36;
          letter-spacing: 1px;
          line-height: 0.95;
          text-align: center;
          user-select: none;
          pointer-events: none;
        }

        /* Responsive Styles */
        @media (max-width: 1200px) {
          .gn-skincare-bg {
            font-size: 120px;
          }
          .gn-headline > div {
            font-size: 38px;
          }
          .gn-img-card {
            width: 280px;
            height: 320px;
          }
          .gn-top-product {
            right: 30px;
          }
          .gn-left-desc {
            left: 30px;
            top: 70px;
          }
        }
        @media (max-width: 800px) {
          .gn-skincare-bg {
            font-size: 60px;
            bottom: 0;
          }
          .gn-headline > div {
            font-size: 26px;
          }
          .gn-center-img {
            margin-top: 18px;
          }
          .gn-img-card {
            width: 200px;
            height: 220px;
          }
          .gn-left-desc {
            left: 5vw;
            top: 15vw;
            max-width: 90vw;
          }
          .gn-top-product {
            right: 5vw;
            top: 7vw;
          }
        }
        @media (max-width: 480px) {
          .gn-root {
            min-height: 100vw;
          }
          .gn-headline {
            margin-top: 12vw;
          }
          .gn-img-card {
            width: 90vw;
            height: 45vw;
            min-height: 160px;
            min-width: 160px;
          }
          .gn-left-desc {
            top: 8vw;
          }
        }
      `}</style>
    </div>
  );
};

export default GlowNaturallyLandingPage;