import React from "react";
import styles from "./styles.module.css";

export default function VIPPage({ data }) {
  const v = data[0];

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>VIP User Details</h1>
        <div className={styles.grid}>
          <DetailItem label="First Name" value={v.firstname} />
          <DetailItem label="Last Name" value={v.lastname} />
          <DetailItem label="Username" value={v.username} />
          <DetailItem label="Age" value={v.age} />
          <DetailItem label="Email" value={v.email} />
          <DetailItem label="Phone Number" value={v.phone_number} />
          <DetailItem label="Address" value={v.address} />
          <DetailItem label="Center ID" value={v.center_id} />
          <div className={styles.fullWidth}>
            <p className={styles.label}>Logged In:</p>
            <p className={styles.value}>{v.loggedIn ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function DetailItem({ label, value }) {
  return (
    <div className={styles.detailItem}>
      <p className={styles.label}>{label}:</p>
      <p className={styles.value}>{value}</p>
    </div>
  );
}
