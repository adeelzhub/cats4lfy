import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__menu">
        {/* Column1 */}
        <div className="footer__col">
          <h4>CONTACT</h4>
          <ul className="footer__list">
            <li>650-876-1212</li>
            <li>St Petersburg, Russia</li>
            <li>123 South Street</li>
          </ul>
        </div>
        {/* Column2 */}
        <div className="footer__col">
          <h4>HELP</h4>
          <ul className="footer__list">
            <li>NO RETURNS</li>
            <li>NO HUMANS WORK HERE</li>
            <li>18 HOUR PHONE DELAYS</li>
          </ul>
        </div>
        {/* Column3 */}
        <div className="footer__col">
          <h4>SOCIALS</h4>
          <ul className="footer__list">
            <li>Instagram</li>
            <li>Facebook</li>
            <li>Twitter</li>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p className="copyright">
          &copy;{new Date().getFullYear()} CATS 4 LYF | All Rights Reserved |
          Terms of Service | Privacy
        </p>
      </div>
    </div>
  );
};

export default Footer;
