import React from "react";


const SkincareFooter = () => (
  <footer className="skincare-footer-root">
    <div className="skincare-footer-content">
      <div className="skincare-footer-block skincare-footer-block-left">
        <div className="skincare-footer-title">
          Join The Skincare<br />Community Now.
        </div>
        <div className="skincare-footer-socials">
          <a href="#" className="skincare-footer-link">Facebook</a>
          <a href="#" className="skincare-footer-link">Instagram</a>
          <a href="#" className="skincare-footer-link">YouTube</a>
        </div>
      </div>
      <div className="skincare-footer-block skincare-footer-block-right">
        <div className="skincare-footer-contact-label">Get in Touch</div>
        <div className="skincare-footer-contact">
          <a href="mailto:contact@skincare.com" className="skincare-footer-contact-link">
            contact.skincare.com
          </a>
        </div> <br /> <br />
        <div className="skincare-footer-policies">
          <a href="#" className="skincare-footer-link skincare-footer-policy"><span>Terms of Service</span></a>
          <a href="#" className="skincare-footer-link skincare-footer-policy"><span>Privacy Policy</span></a>
          <a href="#" className="skincare-footer-link skincare-footer-policy"><span>Cookies Policy</span></a>
        </div>
      </div>
    </div>
    <div className="skincare-footer-bg-text">SKINCARE</div>
    <style>{`
      .skincare-footer-root {
        background: #333E39;
        color: #F9F9F9;
        padding: 0;
        margin: 0;
        // min-height: 100vh;
        position: relative;
        width: 99vw;
        overflow: hidden;
        font-family: 'Inter', Arial, sans-serif;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 600px;
      }
      .skincare-footer-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 40px;
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        padding: 64px 5vw 0 5vw;
        position: relative;
        z-index: 2;
      }
      .skincare-footer-block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
      }
      .skincare-footer-block-left {
        align-items: flex-start;
      }
      .skincare-footer-block-right {
        align-items: flex-start;
        text-align: right;
      }
      .skincare-footer-title {
        font-size: 4rem;
        font-weight: 400;
        line-height: 1.18;
        margin-bottom: 90px;
        color: #F9F9F9;
      }
      .skincare-footer-socials {
        display: flex;
        flex-direction: row;
        gap: 38px;
        margin-top: 36px;
      }
      .skincare-footer-link {
        color: #F9F9F9;
        font-size: 15px;
        text-decoration: none;
        font-weight: 400;
        transition: color 0.16s;
      }
      .skincare-footer-link:hover {
        color: #F6DD5C;
      }
      .skincare-footer-contact-label {
        font-size: 4.1rem;
        color: #fff;
        font-weight: 400;
        // margin-bottom: 6px;
      }
      .skincare-footer-contact {
        color: #F9F9F9;
        font-size: 2rem;
        font-weight: 400;
        margin-bottom: 90px;
        line-height: 1.18;
      }
      .skincare-footer-contact-link {
        color: #F9F9F9;
        text-decoration: none;
        font-size: 3rem;
        font-weight: 400;
      }
      .skincare-footer-contact-link:hover {
        color: #F6DD5C;
      }
      .skincare-footer-policies {
        display: flex;
        flex-direction: row;
        gap: 38px;
      }
      .skincare-footer-policy span {
        font-size: 14px;
        font-style: italic;
        font-weight: 400;
      }
      .skincare-footer-bg-text {
        position: absolute;
        top: 250px;
        right: 50px;
        font-size: 8vw;
        color: #47544E;
        font-weight: 700;
        letter-spacing: -2px;
        opacity: 0.25;
        width: 100vw;
        text-align: center;
        z-index: 1;
        user-select: none;
        pointer-events: none;
        font-size: 400px;
      }
      @media (min-width: 1440px) {
        .skincare-footer-root {
          height: 700px;
        }
        .skincare-footer-bg-text {
          font-size: 450px;
          top: 300px;
        }
        .skincare-footer-title {
          font-size: 4.5rem;
        }
        .skincare-footer-contact-label {
          font-size: 4.6rem;
        }
        .skincare-footer-contact-link {
          font-size: 3.5rem;
        }
        .skincare-footer-content {
          max-width: 1400px;
        }
      }
      @media (max-width: 1200px) {
        .skincare-footer-root {
          height: 500px;
        }
        .skincare-footer-bg-text {
          font-size: 350px;
          top: 200px;
        }
        .skincare-footer-title {
          font-size: 3.5rem;
        }
        .skincare-footer-contact-label {
          font-size: 3.5rem;
        }
        .skincare-footer-contact-link {
          font-size: 2.5rem;
        }
      }
      @media (max-width: 900px) {
        .skincare-footer-content {
          grid-template-columns: 1fr;
          align-items: flex-start;
          padding: 42px 4vw 0 4vw;
          gap: 60px;
        }
        .skincare-footer-block-right {
          align-items: flex-start;
          text-align: left;
        }
        .skincare-footer-title, .skincare-footer-contact {
          margin-bottom: 38px;
        }
        .skincare-footer-policies {
          margin-top: 28px;
          gap: 24px;
        }
        .skincare-footer-bg-text {
          font-size: 300px;
          top: 150px;
        }
      }
      @media (max-width: 768px) {
        .skincare-footer-root {
          height: 400px;
        }
        .skincare-footer-content {
          padding: 32px 3vw 0 3vw;
          gap: 40px;
        }
        .skincare-footer-title {
          font-size: 2.5rem;
          margin-bottom: 30px;
        }
        .skincare-footer-contact-label {
          font-size: 2.8rem;
        }
        .skincare-footer-contact-link {
          font-size: 2rem;
        }
        .skincare-footer-socials {
          flex-direction: column;
          gap: 20px;
          margin-top: 20px;
        }
        .skincare-footer-policies {
          flex-direction: column;
          gap: 16px;
          margin-top: 20px;
        }
        .skincare-footer-bg-text {
          font-size: 250px;
          top: 100px;
        }
      }
      @media (max-width: 600px) {
        .skincare-footer-content {
          padding: 28px 3vw 0 3vw;
        }
        .skincare-footer-title,
        .skincare-footer-contact {
          font-size: 1.2rem;
          margin-bottom: 22px;
        }
        .skincare-footer-contact-link {
          font-size: 1.2rem;
        }
        .skincare-footer-socials,
        .skincare-footer-policies {
          gap: 18px;
        }
        .skincare-footer-bg-text {
          font-size: 15vw;
        }
      }
      @media (max-width: 400px) {
        .skincare-footer-content {
          padding: 16px 1vw 0 1vw;
        }
        .skincare-footer-bg-text {
          font-size: 20vw;
        }
        .skincare-footer-root {
          height: 300px;
        }
        .skincare-footer-title {
          font-size: 1rem;
        }
        .skincare-footer-contact-label {
          font-size: 1.5rem;
        }
        .skincare-footer-contact-link {
          font-size: 1rem;
        }
      }
    `}</style>
  </footer>
);

export default SkincareFooter;