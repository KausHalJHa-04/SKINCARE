import React from "react";
import img7 from '../assets/img7.jpg';
import img8 from '../assets/img8.jpg';
import img6 from '../assets/img6.jpg';
import cart from '../assets/cart.png';

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

const filters = [
  { label: "NEW ARRIVAL", active: true },
  { label: "CLEANSING", active: false },
  { label: "ACNE FIGHTER", active: false },
  { label: "ANTI AGING", active: false },
];

const FeelBeautifulProducts = () => (
  <div className="fbp-root">
    <h2 className="fbp-title">
      Feel Beautiful Inside and Out <br />
      with Every Product.
    </h2>
    <div className="fbp-filters">
      {filters.map((filter, i) => (
        <button
          key={i}
          className={`fbp-filter-btn${filter.active ? " active" : ""}`}
        >
          {filter.label}
        </button>
      ))}
    </div>
    <div className="fbp-list">
      {products.map((p, i) => (
        <div className="fbp-card" key={i}>
          <div className="fbp-img-wrap">
            <img src={p.image} alt={p.name} />
          </div>
          <div className="fbp-card-bottom">
            <div>
              <div className="fbp-card-title">{p.name}</div>
              <div className="fbp-card-price">{p.price}</div>
            </div>
            <button className="fbp-cart-btn">
              <img src={cart} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
    <style>{`
      .fbp-root {
        // background: #FAFCF4;
        min-height: 100vh;
        padding: 0;
        font-family: 'Inter', Arial, sans-serif;
        width: 98vw;
      }
      .fbp-title {
        text-align: center;
        color: #232A23;
        font-size: 4.3rem;
        font-weight: 400;
        margin: 38px 0 30px 0;
        letter-spacing: -1px;
        line-height: 1.18;
      }
      .fbp-filters {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 12px;
        margin-bottom: 38px;
        flex-wrap: wrap;
      }
      .fbp-filters button:hover {
        background: #232A23;
        color: #fff;
      }
      .fbp-filter-btn {
        background: #fff;
        border: 1.5px solid #232A23;
        border-radius: 21px;
        padding: 9px 24px;
        font-size: 15px;
        font-weight: 500;
        color: #232A23;
        cursor: pointer;
        transition: background 0.19s, color 0.19s, border 0.18s;
        outline: none;
        margin-bottom: 7px;
      }
      .fbp-filter-btn.active {
        background: #232A23;
        color: #fff;
        border: 1.5px solid #232A23;
      }
      .fbp-filter-btn.active:hover {
        background: #fff;
        color: #000;
        border: 1.5px solid #232A23;
      }
      .fbp-list {
        display: flex;
        gap: 32px;
        justify-content: center;
        max-width: 1200px;
        margin: 0 auto 0 auto;
        padding: 0 36px 46px 36px;
        flex-wrap: wrap;
      }
      .fbp-card {
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
      .fbp-card:hover {
        box-shadow: 0 8px 40px rgba(43,63,43,0.12);
        transform: scale(1.05);
      }
      .fbp-img-wrap {
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
      .fbp-img-wrap img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        display: block;
      }
      .fbp-card-bottom {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 16px 18px 14px 18px;
        background: #f8fbf5;
        border-radius: 0 0 14px 14px;
      }
      .fbp-card-title {
        font-size: 1.08rem;
        font-weight: 500;
        color: #232A23;
        margin-bottom: 3px;
      }
      .fbp-card-price {
        color: #8c9784;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.06em;
      }
      .fbp-cart-btn {
        background: #000;
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
      .fbp-cart-btn:hover {
        background: #00f;
        color: #fff;
      }

      /* Tablet Responsive */
      @media (max-width: 1050px) {
        .fbp-list {
          padding-left: 4vw;
          padding-right: 4vw;
          gap: 18px;
        }
        .fbp-card {
          width: 260px;
        }
      }

      /* Mobile Responsive */
      @media (max-width: 700px) {
        .fbp-title {
          font-size: 1.1rem;
          margin: 22px 0 18px 0;
        }
        .fbp-list {
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding-bottom: 24px;
        }
        .fbp-card {
          width: 90vw;
          min-width: 0;
        }
        .fbp-img-wrap {
          min-height: 130px;
        }
      }
      @media (max-width: 400px) {
        .fbp-list {
          padding-left: 1vw;
          padding-right: 1vw;
        }
        .fbp-title {
          font-size: 1.97rem;
        }
      }
    `}</style>
  </div>
);

export default FeelBeautifulProducts;