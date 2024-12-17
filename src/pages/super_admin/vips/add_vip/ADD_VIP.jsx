"use client";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { get_super_admin_centers_data, get_super_admin_token } from "../../../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { add_vip_request } from "../../../../../redux/reducers/thunks/add_vips";

export default function AddVIP() {
  const data=useSelector(get_super_admin_centers_data)
  const [formData, setFormData] = useState({});
  const [responseFB, setResponseFB] = useState({ statusText: "", color: "gray" });
  const [status, setStatus] = useState("idle");
 const dispatch=useDispatch()
 const token=useSelector(get_super_admin_token)
  const handleSubmitForm = async () => {
    formData.token=token;
    dispatch(add_vip_request(formData))
  
  };



  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Add VIP</h1>

      {/* Firstname */}
      <div className={styles.formGroup}>
        <label htmlFor="vip_firstname" className={styles.label}>
          Firstname:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
          type="text"
          id="vip_firstname"
          className={styles.input}
          required
        />
      </div>

      {/* Lastname */}
      <div className={styles.formGroup}>
        <label htmlFor="vip_lastname" className={styles.label}>
          Lastname:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
          type="text"
          id="vip_lastname"
          className={styles.input}
          required
        />
      </div>

      {/* Username */}
      <div className={styles.formGroup}>
        <label htmlFor="vip_username" className={styles.label}>
          Username:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, username: e.target.value })}
          type="text"
          id="vip_username"
          className={styles.input}
          required
        />
      </div>

      {/* Age */}
      <div className={styles.formGroup}>
        <label htmlFor="vip_age" className={styles.label}>
          Age:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, age: e.target.value })}
          type="number"
          id="vip_age"
          className={styles.input}
          required
        />
      </div>

      {/* Email */}
      <div className={styles.formGroup}>
        <label htmlFor="vip_email" className={styles.label}>
          VIP Email:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          type="email"
          id="vip_email"
          className={styles.input}
          required
        />
      </div>

      {/* Password */}
      <div className={styles.formGroup}>
        <label htmlFor="vip_password" className={styles.label}>
          VIP Password:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          type="password"
          id="vip_password"
          className={styles.input}
          required
        />
      </div>

      {/* Address */}
      <div className={styles.formGroup}>
        <label htmlFor="vip_address" className={styles.label}>
          VIP Address:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
          type="text"
          id="vip_address"
          className={styles.input}
          required
        />
      </div>

      {/* Phone Number */}
      <div className={styles.formGroup}>
        <label htmlFor="vip_phone_number" className={styles.label}>
          VIP Phone Number:
        </label>
        <input
          onChange={(e) => setFormData({ ...formData, phone_number: e.target.value })}
          type="number"
          id="vip_phone_number"
          className={styles.input}
          required
        />
      </div>

      {/* Center Selection */}
      <div className={styles.formGroup}>
        <label htmlFor="vip_center_ID" className={styles.label}>
          Select Center:
        </label>
        <select
        
          onChange={(e) => setFormData({ ...formData, center_id: e.target.value })}
          id="vip_center_ID"
          className={styles.input}
          required
        >
          <option>{status === "loading" ? "Loading..." : "Select a Center"}</option>
          {data?.map((item) => (
            <option key={item.UID} value={item.UID}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <button onClick={handleSubmitForm} className={styles.submitButton}>
        Submit
      </button>

      <span className={`${styles.responseMessage} ${styles[responseFB.color]}`}>
        {responseFB.statusText}
      </span>
    </section>
  );
}
