import React from "react";
import styles from "./Business.module.css";

function Business(props) {
  return (
    <div className={styles.business}>
      <div className={styles.imageContainer}>
        <img src={props.business.imageSrc} alt={props.business.name} />
      </div>
      <h2>{props.business.name}</h2>
      <div className={styles.businessInformation}>
        <div className={styles.businessAddress}>
          <p>{props.business.address}</p>
          <p>{props.business.city}</p>
          <p>{`${props.business.state} ${props.business.zipCode}`}</p>
        </div>
        <div className={styles.businessReviews}>
          <h3>{props.business.category}</h3>
          <h3 className={styles.rating}>{`${props.business.rating} stars`}</h3>
          <p>{`${props.business.reviewCount} reviews`}</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
