import React, { useEffect, useState } from "react";

/**
 * Usage:
 * 1. Place <LoadingScreen /> at the root/top of your App component.
 * 2. The loading screen will show for about 1.5 seconds, then fade out.
 * 3. You can adjust the loading time by changing the setTimeout value.
 */

const LoadingScreen = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setHide(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`loading-screen${hide ? " hide" : ""}`}>
      <div className="loading-logo">SKINCARE</div>
      <div className="loading-spinner">
        <span />
        <span />
        <span />
      </div>
      <style>{`
        .loading-screen {
          position: fixed;
          z-index: 9999;
          inset: 0;
          width: 100vw;
          height: 100vh;
          background: #FAFCF4;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          transition: opacity 0.7s cubic-bezier(.42,.0,.58,1), visibility 0.7s;
          opacity: 1;
          visibility: visible;
        }
        .loading-screen.hide {
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
        }
        .loading-logo {
          font-size: 2.2rem;
          font-weight: 700;
          letter-spacing: 2px;
          color: #232A23;
          margin-bottom: 38px;
          font-family: 'Inter', Arial, sans-serif;
        }
        .loading-spinner {
          display: flex;
          gap: 8px;
        }
        .loading-spinner span {
          display: block;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #232A23;
          opacity: 0.17;
          animation: loading-bounce 1s infinite alternate;
        }
        .loading-spinner span:nth-child(2) {
          animation-delay: 0.2s;
          opacity: 0.35;
        }
        .loading-spinner span:nth-child(3) {
          animation-delay: 0.4s;
          opacity: 0.55;
        }
        @keyframes loading-bounce {
          0%   { transform: translateY(0);}
          100% { transform: translateY(-18px);}
        }
        @media (max-width: 600px) {
          .loading-logo {
            font-size: 1.13rem;
            margin-bottom: 22px;
          }
          .loading-spinner span {
            width: 11px;
            height: 11px;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;