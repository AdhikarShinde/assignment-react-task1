import React from "react";
import logo from "../../assets/images/logo-white.svg";
import menu from "../../assets/images/menu.svg";
import Button from "../common/Button/Button";
import styles from "./Header.module.css";
import { headerProps } from "../../helper/constants";

const Header = () => {
  return (
    <>
      <div className={styles.headerContainer}>
        <div className={styles.headerContent}>
          <img src={logo} alt="" className="logo" /> |
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
