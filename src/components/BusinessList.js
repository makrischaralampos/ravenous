import React from "react";
import styles from "./BusinessList.module.css";
import Business from "./Business";

function BusinessList({ businesses }) {
  return (
    <div className={styles.businessList}>
      {businesses.map((business) => (
        <Business key={business.id} business={business} />
      ))}
    </div>
  );
}

export default BusinessList;
