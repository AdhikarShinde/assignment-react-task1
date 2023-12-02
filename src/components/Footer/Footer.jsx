import React from "react";
import Logo from "../../assets/images/logo-white.svg";
import Button from "../common/Button/Button";
import styles from "./Footer.module.css";
import { footerProps } from "../../helper/constants";

const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.LogoSection}>
        <img src={Logo} alt="" className={styles.footerLogo} />
      </div>
      <div className={styles.linksContainer}>
        {footerProps.map((section, index) => (
          <div key={index} className={styles.footerSection}>
            <h3 className={styles.footerHeading}>{section.header}</h3>
            <div className={styles.list}>
              {section.items.map((item, i) => (
                <Button key={i} label={item} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
