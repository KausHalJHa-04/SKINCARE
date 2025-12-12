import React, { useState } from "react";
import img8 from '../assets/img8.jpg';
import headphone from '../assets/headphone.png';

const faqs = [
  {
    question: "Are your products safe for sensitive skin?",
    answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "Are your products cruelty-free?",
    answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "What's your return policy?",
    answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
  {
    question: "How do I choose the right product?",
    answer: "Absolutely! All our products are cruelty-free, and most are vegan. Check individual product details for specifics.",
  },
];

const SkincareFAQ = () => {
  const [openIndex, setOpenIndex] = useState(1); // 1 means second FAQ is open

  return (
    <div className="faq-root">
      <div className="faq-content">
        <div className="faq-left">
          <div className="faq-img-wrap">
            <img src={img8} alt="Nécessaire The Body Lotion" />
            <div className="faq-support-badge">
              <span className="faq-support-icon">
               <img src={headphone} alt="headphone" height={20} width={20} />
              </span>
              <span>24/7 We're Here<br />to Help You</span>
            </div>
          </div>
        </div>
        <div className="faq-right">
          <button className="faq-badge">
            <span className="faq-dot"></span>
            Frequently Asked Question
          </button>
          <h2 className="faq-title">
            Answers to Your Skincare Questions, All in One Place.
          </h2>
          <div className="faq-list">
            {faqs.map((item, idx) => (
              <div
                className={`faq-item${openIndex === idx ? " open" : ""}`}
                key={idx}
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                tabIndex={0}
                role="button"
                aria-expanded={openIndex === idx}
                style={{ cursor: "pointer" }}
              >
                <div className="faq-q-row">
                  <span>{item.question}</span>
                  <span className="faq-toggle">
                    {openIndex === idx ? "—" : "+"}
                  </span>
                </div>
                {openIndex === idx && item.answer && (
                  <div className="faq-answer">{item.answer}</div>
                )}
              </div> 
            ))}
          </div><br />
        </div>
      </div>
      <style>{`
        .faq-root {
        //   background: #FAFCF4;
          min-height: 100vh;
          width: 98vw;
          font-family: 'Inter', Arial, sans-serif;
        }
        .faq-content {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-start;
          max-width: 1180px;
          margin: 0 auto;
          padding: 48px 0 0 0;
          gap: 36px;
        }
        .faq-left {
          flex: 1 1 0;
          max-width: 470px;
          min-width: 290px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .faq-img-wrap {
          background: #fff;
          border-radius: 22px;
          overflow: hidden;
          box-shadow: 0 8px 48px rgba(50,80,50,0.09);
          width: 100%;
          max-width: 420px;
          aspect-ratio: 1/1;
          min-height: 330px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          height: 520px;
        }
        .faq-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .faq-support-badge {
          position: absolute;
          left: 22px;
          bottom: 20px;
          background: #EAF3DD;
          border-radius: 24px;
          padding: 8px 22px 8px 10px;
          box-shadow: 0 2px 16px rgba(120,120,120,0.09);
          font-size: 15px;
          color: #232A23;
          font-weight: 400;
          display: flex;
          align-items: center;
          gap: 12px;
          max-width: 220px;
          margin-left: 85px;
        }
        .faq-support-icon {
          width: 38px;
          height: 38px;
          background: #000;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        .faq-right {
          flex: 1.3 1 0;
          min-width: 320px;
          max-width: 550px;
          padding-top: 10px;
        }
        .faq-badge {
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
          margin-bottom: 29px;
        }
        .faq-dot {
          width: 13px;
          height: 13px;
          background: #232A23;
          border-radius: 50%;
          margin-right: 8px;
          display: inline-block;
        }
        .faq-title {
          font-size: 2.2rem;
          font-weight: 400;
          letter-spacing: -0.5px;
          color: #232A23;
          margin-bottom: 34px;
          margin-top: 0;
          line-height: 1.18;
        }
        .faq-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .faq-item {
          background: #fff;
          border: 1.3px solid #D7DDD0;
          border-radius: 7px;
          padding: 0;
          transition: border 0.16s;
        }
        .faq-item.open {
          border: 1.8px solid #232A23;
          background: #F8FDF3;
        }
        .faq-q-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 17px;
          font-weight: 400;
          color: #232A23;
          padding: 18px 22px 18px 18px;
        }
        .faq-toggle {
          font-size: 2rem;
          line-height: 1;
          font-weight: 400;
          color: #8f998a;
          margin-left: 14px;
          user-select: none;
        }
        .faq-item.open .faq-toggle {
          color: #232A23;
        }
        .faq-answer {
          color: #232A23;
          font-size: 15px;
          padding: 0 22px 16px 22px;
          margin-top: -9px;
          line-height: 1.5;
        }
        @media (max-width: 900px) {
          .faq-content {
            flex-direction: column;
            align-items: center;
            gap: 16px;
            padding-top: 28px;
          }
          .faq-left, .faq-right {
            max-width: 98vw;
            min-width: unset;
            padding: 0 8vw;
          }
          .faq-img-wrap {
            max-width: 99vw;
            min-height: 220px;
            aspect-ratio: 1/1;
          }
          .faq-right {
            padding-top: 18px;
          }
        }
        @media (max-width: 600px) {
          .faq-title {
            font-size: 1.18rem;
          }
          .faq-support-badge {
            font-size: 12px;
            padding: 5px 12px 5px 7px;
            border-radius: 14px;
            gap: 7px;
            max-width: 120px;
          }
          .faq-support-icon {
            width: 22px;
            height: 22px;
          }
          .faq-badge {
            font-size: 13px;
            padding: 6px 12px;
            border-radius: 13px;
          }
          .faq-q-row {
            font-size: 13px;
            padding: 12px 10px 12px 10px;
          }
          .faq-answer {
            font-size: 12px;
            padding: 0 12px 10px 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default SkincareFAQ;