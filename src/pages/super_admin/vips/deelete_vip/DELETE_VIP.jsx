import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { get_super_admin_centers_data, get_super_admin_status, get_super_admin_token, get_super_admin_vips_data } from "../../../../../redux/selectors";
import { delete_vip_request } from "../../../../../redux/reducers/thunks/delete_vip";

export default function DeleteVip() {
  const dispatch=useDispatch()
  const vips=useSelector(get_super_admin_vips_data)
 const message=useSelector(get_super_admin_status)?.message
 const token=useSelector(get_super_admin_token)
  const [id, set_id] = useState(); // Simplified to a string


  const handleDeleteSubmit = async (e) => {
    e.preventDefault();
    dispatch(delete_vip_request({token,id}))
  };

  return status =="pending" ? (
    <h1 className={styles.loading}>Loading...</h1>
  ) : (
    <section className={styles.container}>
      <h1 className={styles.title}>Select the VIP to remove:</h1>

      <div className={styles.selectContainer}>
        <select
          name="removeVip"
          id="remove_Vip"
          className={styles.select}
          onChange={(e) => set_id(e.target.value)}
        >
          <option value="" disabled>
            Please select a VIP
          </option>
          {vips.length > 0 ? (
            vips.map((item) => (
              <option key={item._id} value={item._id}>
                Name: {item.firstname} | Username: {item.username}
              </option>
            ))
          ) : (
            <option value="loading">No VIPs available</option>
          )}
        </select>
      </div>

      <button onClick={handleDeleteSubmit} className={styles.submitButton}>
        Submit
      </button>

      {message && <span className={styles.message}>{message}</span>}
    </section>
  );
}
