import React from "react";
import styles from "./CardBlock.module.css";

const CardBlock = ({ imgSrc, altText, title, subtitle }) => {
  return (
    <div className={styles.cardBlock}>
      <img src={imgSrc} alt={altText} className={styles.image} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.subtitle}>{subtitle}</p>
    </div>
  );
};

export default CardBlock;
