import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer-container">
      <h1>about</h1>
      <h4>socails:</h4>
      <FaInstagram
        onClick={() => open("https://www.instagram.com/kamel_taha12/")}
        className="logo"
      />
      <FaTiktok
        onClick={() => open("https://www.tiktok.com/@kameltaha11?lang=en")}
        className="logo"
      />
      <CiLinkedin
        onClick={() =>
          open("https://www.linkedin.com/in/kamel-taha-6bb090303/")
        }
        className="logo"
      />
      <FaGithub
        onClick={() => open("https://github.com/tahok057")}
        className="logo"
      />

      <br />
    </div>
  );
};

export default Footer;
