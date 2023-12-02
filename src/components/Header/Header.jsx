import React from "react";
import LogoImg from "../../assets/images/logo-white.svg";
import menu from "../../assets/images/menu.svg";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";
import { headerProps } from "../../helper/constants";
import Logo from "../common/Logo/Logo";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <Logo image={LogoImg} altText="Logo" /> |
          <span className="developersText">Developers</span>
        </div>
        <div className={styles.buttonsContainer}>
          {headerProps.map((button) => (
            <Button key={button.label} {...button} />
          ))}
        </div>
        <img className={styles.menuIcon} src={menu} alt="" />
      </div>
    </>
  );
};

export default Header;
