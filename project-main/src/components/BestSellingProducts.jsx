import React from "react";
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img6 from '../assets/img6.jpg';
import leftarrow from '../assets/leftarrow.png';
import rightarrow from '../assets/rightarrow.png';

const products = [
  {
    image: img6,
    name: "ALYA SKIN CLEANSER.",
    price: "FROM $29.99",
  },
  {
    image: img7,
    name: "RITUAL OF SAKURA.",
    price: "FROM $27.99",
  },
  {
    image: img8,
    name: "THE BODY LOTION.",
    price: "FROM $19.99",
  },
];

const BestSellingProducts = () => (
  <div className="bsp-root">
    <div className="bsp-header-row">
      <button className="bsp-badge">
        <span className="bsp-dot"></span>
        Best Selling Products
      </button>
    <h2 className="bsp-title">Skincare That Brings Out<br />Your Natural Radiance</h2>
      <div className="bsp-arrows">
        <img src={leftarrow} alt="Previous" />
        <img src={rightarrow} alt="Next" />
      </div>
    </div> <br /> <br />
    <div className="bsp-list">
      {products.map((p, i) => (
        <div className="bsp-card" key={i}>
          <div className="bsp-img-wrap">
            <img src={p.image} alt={p.name} />
          </div>
          <div className="bsp-card-bottom">
            <div>
              <div className="bsp-card-title">{p.name}</div>
              <div className="bsp-card-price">{p.price}</div>
            </div>
            <button className="bsp-cart-btn">
              <svg width="22" height="22" viewBox="0 0 22 22"><g fill="none" stroke="#232A23" strokeWidth="1.5"><circle cx="8.5" cy="18" r="1"/><circle cx="15.5" cy="18" r="1"/><path d="M2 3h2.5l2.7 10.39a2 2 0 002 1.61h5.6a2 2 0 002-1.61L20 6.5H6.5"/></g></svg>
            </button>
          </div>
        </div>
      ))}
    </div>
    <style>{`
      .bsp-root {
        // background: #FAFCF4;
        min-height: 100vh;
        padding: 0;
        font-family: 'Inter', Arial, sans-serif;
        width: 98vw;
      }
      .bsp-header-row {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1200px;
        margin: 0 auto;
        padding: 38px 36px 0 36px;
      }
      .bsp-badge {
        display: flex;
        align-items: center;
        background: #fff;
        border: 1.5px solid #E2E6D8;
        border-radius: 22px;
        padding: 8px 20px;
        font-size: 16px;
        font-weight: 500;
        color: #232A23;
        box-shadow: 0 2px 9px rgba(80,100,80,0.04);
        cursor: pointer;
        gap: 10px;
        outline: none;
      }
      .bsp-dot {
        width: 13px;
        height: 13px;
        background: #F6DD5C;
        border-radius: 50%;
        margin-right: 8px;
        display: inline-block;
      }
      .bsp-arrows {
        display: flex;
        gap: 16px;
      }
      .bsp-arrow-btn {
        background: none;
        border: none;
        border-radius: 50%;
        cursor: pointer;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background 0.18s;
        padding: 0;
      }
      .bsp-arrow-btn-dark {
        background: #232A23;
      }
      .bsp-arrow-btn-dark svg circle {
        stroke: none;
      }
      .bsp-title {
        text-align: center;
        color: #232A23;
        font-size: 4.25rem;
        font-weight: 400;
        margin: 34px 0 38px 0;
        letter-spacing: -1px;
        line-height: 1.18;
      }
      .bsp-list {
        display: flex;
        gap: 32px;
        justify-content: center;
        max-width: 1200px;
        margin: 0 auto 0 auto;
        padding: 0 36px 46px 36px;
        flex-wrap: wrap;
      }
      .bsp-card {
        background: #f9faf6;
        border-radius: 18px;
        box-shadow: 0 4px 32px rgba(50,80,50,0.07);
        width: 330px;
        max-width: 92vw;
        min-width: 220px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        transition: box-shadow 0.17s;
      }
      .bsp-card:hover {
        box-shadow: 10px 10px 40px rgba(43,63,43,0.12);
        transform: translateY(-4px);
      }
      .bsp-img-wrap {
        width: 100%;
        aspect-ratio: 1 / 1.18;
        min-height: 240px;
        border-radius: 14px 14px 0 0;
        overflow: hidden;
        background: #edece9;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .bsp-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .bsp-card-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 18px 14px 18px;
        background: #f8fbf5;
        border-radius: 0 0 14px 14px;
      }
      .bsp-card-title {
        font-size: 1.08rem;
        font-weight: 500;
        color: #232A23;
        margin-bottom: 3px;
      }
      .bsp-card-price {
        color: #8c9784;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.06em;
      }
      .bsp-cart-btn {
        background: #e7eee1;
        border: none;
        border-radius: 15px;
        width: 42px;
        height: 36px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: background 0.16s;
        outline: none;
      }
      .bsp-cart-btn:hover {
        background: #fff;
      }

      /* Tablet Responsive */
      @media (max-width: 1000px) {
        .bsp-header-row, .bsp-list {
          padding-left: 4vw;
          padding-right: 4vw;
        }
        .bsp-list {
          gap: 18px;
        }
        .bsp-card {
          width: 260px;
        }
      }

      /* Mobile Responsive */
      @media (max-width: 700px) {
        .bsp-header-row {
          flex-direction: column;
          align-items: flex-start;
          gap: 18px;
          padding-top: 24px;
          padding-bottom: 0;
        }
        .bsp-title {
          font-size: 1.18rem;
          margin: 24px 0 22px 0;
        }
        .bsp-list {
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding-bottom: 24px;
        }
        .bsp-card {
          width: 90vw;
          min-width: 0;
        }
        .bsp-img-wrap {
          min-height: 180px;
        }
      }
      @media (max-width: 400px) {
        .bsp-header-row, .bsp-list {
          padding-left: 1vw;
          padding-right: 1vw;
        }
        .bsp-title {
          font-size: 2rem;
        }
      }
    `}</style>
  </div>
);

export default BestSellingProducts;