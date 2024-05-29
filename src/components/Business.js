import React from "react";
import styles from "./Business.module.css";

function Business({ business }) {
  return (
    <div className={styles.business}>
      <div className={styles.imageContainer}>
        <img src={business.imageSrc} alt={styles.businessName} />
      </div>
      <h2>{business.name}</h2>
      <div className={styles.businessInformation}>
        <div className={styles.businessAddress}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>
            {business.state} {business.zipcode}
          </p>
        </div>
        <div className={styles.businessReviews}>
          <h3>{business.category}</h3>
          <h3 className={styles.rating}>{business.rating} stars</h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
}

export default Business;
