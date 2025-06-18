import React, { useState } from "react";



const NAV_LINKS = [
  { label: "All Products", href: "#" },
  { label: "Serum", href: "#" },
  { label: "Sunscreen", href: "#" },
  { label: "Bundle", href: "#" },
];

const SkincareNavbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="skincare-navbar-root">
      <div className="skincare-navbar-inner">
        <div className="skincare-navbar-logo">SKINCARE</div>
        <button
          className="skincare-navbar-hamburger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Open navigation"
        >
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
            <rect y="8" width="36" height="2.5" rx="1.25" fill="#232A23"/>
            <rect y="16.75" width="36" height="2.5" rx="1.25" fill="#232A23"/>
            <rect y="25.5" width="36" height="2.5" rx="1.25" fill="#232A23"/>
          </svg>
        </button>
        <div className="skincare-navbar-links">
          {NAV_LINKS.map((l) => (
            <a href={l.href} key={l.label}>{l.label}</a>
          ))}
        </div>
        <div className="skincare-navbar-actions">
          <a href="#" className="skincare-navbar-cart">
            <span className="skincare-navbar-icon-bg">
              {/* Cart icon */}
              <svg width="22" height="22" viewBox="0 0 22 22">
                <g fill="none" stroke="#232A23" strokeWidth="1.5">
                  <circle cx="8.5" cy="18" r="1"/>
                  <circle cx="15.5" cy="18" r="1"/>
                  <path d="M2 3h2.5l2.7 10.39a2 2 0 002 1.61h5.6a2 2 0 002-1.61L20 6.5H6.5"/>
                </g>
              </svg>
            </span>
            <span className="skincare-navbar-cart-text">Cart (1)</span>
          </a>
          <a href="#" className="skincare-navbar-icon-bg" aria-label="Favorites">
            {/* Heart icon */}
            <svg width="22" height="22" viewBox="0 0 22 22">
              <path d="M11 18s-5.5-4.59-7.5-7.09c-1.49-1.86-1.21-4.66.76-6.02A4.2 4.2 0 0 1 11 6.2a4.2 4.2 0 0 1 6.74-1.31c1.97 1.36 2.25 4.16.76 6.02C16.5 13.41 11 18 11 18z" fill="none" stroke="#232A23" strokeWidth="1.4"/>
            </svg>
          </a>
          <a href="#" className="skincare-navbar-icon-bg" aria-label="Account">
            {/* User icon */}
            <svg width="22" height="22" viewBox="0 0 22 22">
              <circle cx="11" cy="8" r="4" fill="none" stroke="#232A23" strokeWidth="1.4"/>
              <path d="M4 18c0-2.67 3.58-4 7-4s7 1.33 7 4" fill="none" stroke="#232A23" strokeWidth="1.4"/>
            </svg>
          </a>
        </div>
      </div>
      {/* Mobile Menu Overlay */}
      <div className={`skincare-navbar-mobile-menu${mobileOpen ? " open" : ""}`}>
        <div className="skincare-navbar-mobile-inner">
          <button
            className="skincare-navbar-mobile-close"
            onClick={() => setMobileOpen(false)}
            aria-label="Close navigation"
          >
            <svg width="32" height="32" viewBox="0 0 36 36" fill="none">
              <rect x="7.05" y="8.46" width="28" height="2.5" rx="1.25" transform="rotate(45 7.05 8.46)" fill="#232A23"/>
              <rect x="8.46" y="28.95" width="28" height="2.5" rx="1.25" transform="rotate(-45 8.46 28.95)" fill="#232A23"/>
            </svg>
          </button>
          <div className="skincare-navbar-mobile-links">
            {NAV_LINKS.map((l) => (
              <a href={l.href} key={l.label} onClick={() => setMobileOpen(false)}>{l.label}</a>
            ))}
          </div>
          <div className="skincare-navbar-mobile-actions">
            <a href="#">Cart (1)</a>
            <a href="#">Favorites</a>
            <a href="#">Account</a>
          </div>
        </div>
      </div>
      <style>{`
        .skincare-navbar-root {
          background: #F6F9E7;
        //   border-bottom: 2px solid #232A23;
          width: 99vw;
          padding: 0;
          margin: 0;
          font-family: 'Inter', Arial, sans-serif;
          position: relative;
        }
        .skincare-navbar-inner {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 2vw;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 62px;
        }
        .skincare-navbar-logo {
          font-size: 2.18rem;
          font-weight: 700;
          color: #232A23;
          letter-spacing: 1px;
        }
        .skincare-navbar-links {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .skincare-navbar-links a {
          color: #232A23;
          font-size: 15px;
          text-decoration: none;
          font-weight: 400;
          transition: color 0.16s;
        }
        .skincare-navbar-links a:hover {
          color: #758e6b;
          text-decoration: underline;
        }
        .skincare-navbar-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .skincare-navbar-cart {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #232A23;
          text-decoration: none;
          font-size: 15px;
          font-weight: 400;
        }
        .skincare-navbar-icon-bg {
          background: #f8fbe9;
          border-radius: 50%;
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.18s;
        }
        .skincare-navbar-icon-bg:hover {
          background: #e2eac6;
        }
        .skincare-navbar-cart-text {
          display: inline-block;
        }
        .skincare-navbar-hamburger {
          display: none;
          background: none;
          border: none;
          padding: 0;
          margin-left: 6px;
          cursor: pointer;
        }
        /* MOBILE MENU */
        .skincare-navbar-mobile-menu {
          display: none;
        }
        /* Responsive */
        @media (max-width: 900px) {
          .skincare-navbar-links {
            display: none;
          }
          .skincare-navbar-actions {
            display: none;
          }
          .skincare-navbar-hamburger {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .skincare-navbar-inner {
            min-height: 56px;
          }
          .skincare-navbar-logo {
            font-size: 1.08rem;
          }
          /* Mobile Menu */
          .skincare-navbar-mobile-menu {
            display: ${'block'};
            position: fixed;
            z-index: 1000;
            top: 0; left: 0; right: 0; bottom: 0;
            background: rgba(246,249,231, 0.98);
            transform: translateY(-100%);
            transition: transform 0.25s cubic-bezier(.36,1.16,.8,1);
            pointer-events: none;
          }
          .skincare-navbar-mobile-menu.open {
            transform: translateY(0);
            pointer-events: auto;
          }
          .skincare-navbar-mobile-inner {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            margin: 0 auto;
            max-width: 380px;
            padding: 28px 8vw 0 8vw;
            min-height: 100vh;
            background: none;
          }
          .skincare-navbar-mobile-close {
            background: none;
            border: none;
            align-self: flex-end;
            margin-bottom: 26px;
            cursor: pointer;
          }
          .skincare-navbar-mobile-links {
            display: flex;
            flex-direction: column;
            gap: 24px;
            width: 100%;
            margin-bottom: 38px;
          }
          .skincare-navbar-mobile-links a {
            color: #232A23;
            font-size: 1.09rem;
            text-decoration: none;
            font-weight: 500;
            padding-bottom: 3px;
            border-bottom: 1.5px solid #e2eac6;
            transition: color 0.16s;
          }
          .skincare-navbar-mobile-actions {
            display: flex;
            flex-direction: column;
            gap: 18px;
            width: 100%;
          }
          .skincare-navbar-mobile-actions a {
            color: #232A23;
            text-decoration: none;
            font-size: 1.01rem;
            padding: 7px 0 2px 0;
          }
        }
        @media (max-width: 600px) {
          .skincare-navbar-logo {
            font-size: 0.97rem;
          }
          .skincare-navbar-inner {
            padding: 0 2vw;
          }
          .skincare-navbar-mobile-inner {
            max-width: 98vw;
            padding-left: 5vw;
            padding-right: 5vw;
            padding-top: 18px;
          }
        }
      `}</style>
    </nav>
  );
};

export default SkincareNavbar;