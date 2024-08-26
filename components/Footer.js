import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section subscribe">
          <h3>BE THE FIRST TO KNOW</h3>
          <p>Sign up for updates from mettä muse.</p>
          <div className="subscribe-form">
            <input type="email" placeholder="Enter your e-mail..." />
            <button>SUBSCRIBE</button>
          </div>
        </div>
        <div className="footer-section">
          <h3>mettā muse</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#stories">Stories</a></li>
            <li><a href="#artisans">Artisans</a></li>
            <li><a href="#boutiques">Boutiques</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#compliance">EU Compliances Docs</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul>
            <li><a href="#orders">Orders & Shipping</a></li>
            <li><a href="#join">Join/Login as a Seller</a></li>
            <li><a href="#payment">Payment & Pricing</a></li>
            <li><a href="#returns">Return & Refunds</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms & Conditions</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>CONTACT US</h3>
          <p>+44 221 133 5360</p>
          <p>customercare@mettamuse.com</p>
          <h4>CURRENCY</h4>
          <p>🇺🇸 USD</p>
          <p>Transactions will be completed in Euros and a currency reference is available on hover.</p>
        </div>
        <div className="footer-section">
          <h3>FOLLOW US</h3>
          <div className="social-icons">
            <a href="#linkedin"><i className="fab fa-linkedin"></i></a>
            <a href="#instagram"><i className="fab fa-instagram"></i></a>
          </div>
          <h3>mettā muse ACCEPTS</h3>
          <div className="payment-icons">
            <i className="fab fa-google-pay"></i>
            <i className="fab fa-cc-visa"></i>
            <i className="fab fa-cc-mastercard"></i>
            <i className="fab fa-cc-amex"></i>
            <i className="fab fa-cc-paypal"></i>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright © 2023 mettamuse. All rights reserved.</p>
      </div>
    </footer>
  );
}
