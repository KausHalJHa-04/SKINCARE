import React from 'react'

export const Descriptiontext = () => {
  return (
    <>
      <div className="description-text">
       <pre> Experience the ultimate in skincare with our expertly formulated products, <br />
        crafted to nourish, protect, and rejuvenate your skin. Combining the finest <br />
        natural ingredients with <span> advanced science, our collection ensures every <br />
        skin type can achieve a radiant, healthy glow. Embrace your beauty with <br />
        confidence every day. Experience the ultimate in skincare with our <br />
        expertly formulated products, crafted to nourish, protect, and rejuvenate <br />
        your skin. <br /> <br />
        </span>
      </pre>
      </div>

      <style>{`
        .description-text {
          font-size: clamp(1.5rem, 4vw, 3.0rem);
          line-height: 1.5;
          color: #333;
          height: 100%;
          width: 100%;
          margin-top: 50px;
          justify-content: center;
          display: flex;
          gap: 20px;
          background-color: #fefff4;
        }
        .description-text span {
          color: rgb(202, 195, 195); /* Green color for emphasis */
          // font-weight: bold;
        }
        @media (max-width: 600px) {
          .description-text {
            font-size: 1rem;
            margin-top: 20px;
            padding: 0 10px;
            text-align: left;
          }
        }
      `}</style>
    </>
  );
};
