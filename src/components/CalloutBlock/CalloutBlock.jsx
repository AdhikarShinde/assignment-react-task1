import React from "react";
import styles from "./CalloutBlock.module.css";

const CalloutBlock = ({ title, subtitle }) => {
  return (
    <>
      <div className={styles.calloutBlockContainer}>
        <div className={styles.calloutAlignContainer}>
          <h1 className={styles.calloutBlockTitle}>{title}</h1>
          <p className={styles.calloutBlockSubtitle}>{subtitle}</p>
        </div>
      </div>
    </>
  );
};

export default CalloutBlock;
