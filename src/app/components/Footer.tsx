import Link from "next/link";
import React from "react";
import style from "../styles/footer.module.css"

const Footer = () => {

  return (
    <div className={style.footer}>
      <nav className={style.footerContent}>
        <Link legacyBehavior href={"mailto:roberto.silva.oli@outlook.com?subject=subject text"} >
          <a  target="_blank" rel="noopener noreferrer">
          <i className="symbol">alternate_email</i>
          <h3 className="logo">Send me an email</h3>
          </a>
        </Link>
        <Link legacyBehavior href={"https://www.linkedin.com/in/roberto-silva-ufpb/"} >
          <a target="_blank" rel="noopener noreferrer">
          <i className="symbol">contact_page</i>
          <h3 className="logo">My LinkedIn profile</h3>
          </a>
        </Link>
      </nav>
    </div>
  );
};

export default Footer;