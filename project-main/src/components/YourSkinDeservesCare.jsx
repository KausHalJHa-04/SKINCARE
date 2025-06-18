import React from "react";
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
/*
  NOTE:
  - Replace '/your-image-path.jpg' with your actual image path or import for the main product image.
  - The component is fully responsive for desktop, tablet, and mobile.
  - No mention or reference to any blurred face is included.
*/

const YourSkinDeservesCare = () => (
  <div className="ysdc-root">
    <div className="ysdc-content">
      <div className="ysdc-left">
        <button className="ysdc-why-btn">
          <span className="ysdc-dot"></span>
          Why Our Products
        </button>
        <h1 className="ysdc-title">YOUR SKIN DESERVES THE BEST CARE.</h1>
        <p className="ysdc-desc">
          Discover a curated collection of skincare products designed to rejuvenate,
          protect, and pamper your skin. Explore our rage crafted with love backed
          by science, and inspired by nature.
        </p>
        <div className="ysdc-feature-list">
          <div className="ysdc-feature-item">
            <span className="ysdc-feature-num">01</span>
            <div>
              <div className="ysdc-feature-title">Bio Ingredients</div>
              <div className="ysdc-feature-desc">
                Get naturally beautiful and transform with our bio ingredients creams for healthy, radiant skin.
              </div>
            </div>
          </div>
          <div className="ysdc-feature-item">
            <span className="ysdc-feature-num">02</span>
            <div>
              <div className="ysdc-feature-title">Everything Natural</div>
              <div className="ysdc-feature-desc">
                Pure ingredients for pure skin. The Perfect solution for your skin care needs.
              </div>
            </div>
          </div>
          <div className="ysdc-feature-item">
            <span className="ysdc-feature-num">03</span>
            <div>
              <div className="ysdc-feature-title">All Handmade</div>
              <div className="ysdc-feature-desc">
                Made with love and care. Just for you. Give your skin the tender loving care it deserves.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ysdc-right">
        <div className="ysdc-img-wrap">
          <img
            src={img4}
            alt="Skincare product highlight"
            className="ysdc-main-img"
          />
          <div className="ysdc-award-badge">
            <img
              src={img5}
              alt="Award Icon"
              className="ysdc-award-icon"
            />
            Best Skin Care Product<br />Award Winning
          </div>
        </div>
        <div className="ysdc-footer-row">
          <span>SINCE 2001</span>
          <span>LEARN MORE</span>
        </div>
      </div>
    </div>
    <style>{`
      .ysdc-root {
        font-family: 'Inter', Arial, sans-serif;
        background: #fefff5;
        padding: 0;
        margin: 0;
        min-height: 100vh;
        width: 98vw;
        // display: flex;
        // justify-content: space-between;
      }
      .ysdc-content {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        padding: 40px 0 0 0;
        max-width: 1200px;
        margin: 0 auto;
        gap: 36px;
      }
      .ysdc-left {
        flex: 1 1 0;
        max-width: 510px;
        padding-left: 38px;
        padding-right: 16px;
      }
      .ysdc-why-btn {
        background: #fff;
        border: 1px solid #e5e7e0;
        border-radius: 24px;
        padding: 7px 22px;
        font-size: 16px;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 10px;
        margin-bottom: 34px;
        cursor: pointer;
        box-shadow: 0 3px 12px rgba(50,50,50,0.04);
      }
      .ysdc-dot {
        display: inline-block;
        width: 14px;
        height: 14px;
        background: #232A23;
        border-radius: 50%;
        margin-right: 5px;
      }
      .ysdc-title {
        font-size: 4.0rem;
        font-weight: 500;
        letter-spacing: -1.2px;
        color: #2e332c;
        margin-bottom: 22px;
        margin-top: 0;
        line-height: 1.15;
      }
      .ysdc-desc {
        color: #444;
        font-size: 13px;
        margin-bottom: 34px;
        line-height: 1.6;
      }
      .ysdc-feature-list {
        margin-top: 18px;
      }
      .ysdc-feature-item {
        display: flex;
        align-items: flex-start;
        margin-bottom: 32px;
      }
      .ysdc-feature-num {
        font-size: 4rem;
        font-weight: 400;
        color: #bfc8b6;
        margin-right: 24px;
        min-width: 48px;
        font-family: inherit;
        letter-spacing: 1.5px;
      }
      .ysdc-feature-title {
        font-size: 4rem;
        font-weight: 400;
        color: #232A23;
        margin-bottom: 6px;
        letter-spacing: -0.5px;
      }
      .ysdc-feature-desc {
        color: #666;
        font-size: 15px;
        margin-bottom: 5px;
        line-height: 1.5;
      }
      .ysdc-right {
        flex: 1 1 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-width: 300px;
        max-width: 470px;
        position: relative;
        padding-right: 22px;
        
      }
      .ysdc-img-wrap {
        background: #fff;
        border-radius: 24px;
        overflow: hidden;
        box-shadow: 0 8px 48px rgba(50,80,50,0.09);
        width: 100%;
        max-width: 390px;
        height: 650px;
        display: flex;
        justify-content: end;
        align-items: center;
        position: relative;
        width: 200%;
      }
      .ysdc-main-img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .ysdc-award-badge {
        position: absolute;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #F8FDF3;
        border-radius: 20px;
        padding: 9px 20px 9px 16px;
        box-shadow: 0 2px 16px rgba(120,120,120,0.09);
        font-size: 15px;
        color: #232A23;
        font-weight: 400;
        display: flex;
        align-items: center;
        gap: 11px;
        max-width: 270px;
        width: 90%;
      }
      .ysdc-award-icon {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        margin-right: 4px;
        background: #303b36;
      }
      .ysdc-footer-row {
        margin-top: 22px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: #000;
        font-size: 13px;
        letter-spacing: 0.2px;
        padding: 0 8px;
      }
      @media (max-width: 900px) {
        .ysdc-content {
          flex-direction: column;
          align-items: center;
          padding: 18px 0 0 0;
          gap: 0;
        }
        .ysdc-left, .ysdc-right {
          max-width: 98vw;
          min-width: unset;
          padding: 0 8vw;
        }
        .ysdc-right {
          margin-top: 24px;
          padding-right: 0;
        }
        .ysdc-img-wrap {
          max-width: 96vw;
          height: 56vw;
          min-height: 180px;
        }
      }
      @media (max-width: 600px) {
        .ysdc-title {
          font-size: 1.5rem;
        }
        .ysdc-feature-title {
          font-size: 1.1rem;
        }
        .ysdc-feature-num {
          font-size: 1.2rem;
          min-width: 38px;
        }
        .ysdc-left, .ysdc-right {
          padding: 0 4vw;
        }
        .ysdc-img-wrap {
          border-radius: 14px;
          height: 48vw;
          min-height: 110px;
        }
        .ysdc-award-badge {
          font-size: 13px;
          padding: 7px 14px 7px 8px;
          border-radius: 13px;
          gap: 7px;
        }
        .ysdc-award-icon {
          width: 17px;
          height: 17px;
        }
        .ysdc-footer-row {
          font-size: 11px;
          padding: 0 2px;
        }
      }
      @media (max-width: 400px) {
        .ysdc-title {
          font-size: 1.5rem;
        }
        .ysdc-img-wrap {
          height: 38vw;
          min-height: 80px;
        }
      }
    `}</style>
  </div>
);

export default YourSkinDeservesCare;