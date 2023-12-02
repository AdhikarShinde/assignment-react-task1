import React from "react";
import styles from "./SplitBanner.module.css";
import Button from "../common/Button/Button";

const SplitBanner = ({
  heading,
  subheading,
  buttons,
  imageSrc,
  altText,
  swap,
}) => {
  return (
    <>
      <div
        className={`${styles.splitBannerContainer} ${swap ? styles.swap : ""}`}
      >
        <div className={styles.splitBannerContent}>
          <h2 className={styles.splitBannerHeading}>{heading}</h2>
          <p className={styles.splitBannerSubheading}>{subheading}</p>
          <div className={styles.splitBannerButtonContainer}>
            {buttons.map((button, index) => (
              <Button key={index} {...button} />
            ))}
          </div>
        </div>
        <img
          src={imageSrc}
          alt={altText}
          className={styles.illustrationImage}
        />
      </div>
    </>
  );
};

export default SplitBanner;
