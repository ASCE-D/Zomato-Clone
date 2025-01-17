import React from "react";
import "./Footer.scss";
import App from "../../assets/images/App-Store.png";
import Phone from "../../assets/images/Google-Play.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="top1">
          <h2>Shopping</h2>
          <div className="lang">
            <select>
              <option value="India">India</option>
              <option value="Australia">Australia</option>
              <option value="London">London</option>
              <option value="America">America</option>
              <option value="France">France</option>
              <option value="Brazil">Brazil</option>
              <option value="England">England</option>
              <option value="South Africa">South Africa</option>
              <option value="Rusia">Rusia</option>
            </select>
            <select>
              <option value="English">English</option>
              <option value="Hindi">Hindi</option>
              <option value="Polish">Polish</option>
            </select>
          </div>
        </div>
        <div className="bottom1">
          <div className="bottomContent">
            <h4>ABOUT Shopping</h4>
            <p>who we are</p>
            <p>blog</p>
            <p>work with us</p>
            <p>Investor Relations</p>
            <p>Report Fraud</p>
            <p>Contact Us</p>
          </div>
          <div className="bottomContent">
            <h4>SHOPVERSE</h4>
            <p>Shopping</p>
            <p>Blinkit</p>
            
            <p>HyperPure</p>
            
          </div>
          
          <div className="bottomContent">
            <h4>LEARN MORE</h4>
            <p>Privecy</p>
            <p>Security</p>
            <p>Terms</p>
            <p>Sitemap</p>
          </div>
          <div className="bottomContent">
            <h4>SOCIAL LINKS</h4>
            <div className="links">
              <LinkedInIcon />
              <TwitterIcon />
              <InstagramIcon />
              <YouTubeIcon />
              <FacebookIcon />
            </div>
            <img src={App} alt="app" />
            <img src={Phone} alt="app" />
          </div>
        </div>
      </div>
      <hr />
      <div className="bottom">
        <p>
          By continuing past this page, you agree to our Terms of Service,
          Cookie Policy, Privacy Policy and Content Policies. All trademarks are
          properties of their respective owners. 2008-2022 © Shopping™ Ltd. All
          rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
