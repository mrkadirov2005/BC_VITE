"use client";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { get_super_admin_centers_data, get_super_admin_message, get_super_admin_status, get_super_admin_token, get_super_admin_vips_data } from "../../../../../redux/selectors";
import { add_admin_request } from "../../../../../redux/reducers/thunks/add_new_admin";
import { get_admins_request } from "../../../../../redux/reducers/thunks/get_admins";
const SuperAdminAddAdminForm = () => {
  const message=useSelector(get_super_admin_message)
  const status=useSelector(get_super_admin_status)
  const vipsData=useSelector(get_super_admin_vips_data)
  const data=useSelector(get_super_admin_centers_data)
  const dispatch=useDispatch()
  const token=useSelector(get_super_admin_token)
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    age: 0,
    email: "",
    address: "",
    password: "",
    phone_number: "",
    center_id: "",
    vip_id: "",
    loggedIn: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const submit_add_admin=(e)=>{
    e.preventDefault();
    formData.token=token
    dispatch(add_admin_request({formData}))
    dispatch(get_admins_request({token}))
  }

  return (
    <div className={styles.container}>
      <div className={styles.formWrapper}>
        <h2 className={styles.formTitle}>User Registration</h2>
        <form className="space-y-4">
          {/* First Name */}
          <div>
            <label htmlFor="firstname" className={styles.inputLabel}>
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastname" className={styles.inputLabel}>
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </div>

          {/* Username */}
          <div>
            <label htmlFor="username" className={styles.inputLabel}>
              Username <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </div>

          {/* Age */}
          <div>
            <label htmlFor="age" className={styles.inputLabel}>
              Age <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              min="0"
              required
              className={styles.inputField}
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className={styles.inputLabel}>
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </div>

          {/* Address */}
          <div>
            <label htmlFor="address" className={styles.inputLabel}>
              Address <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className={styles.inputField}
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className={styles.inputLabel}>
              Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              minLength={6}
              className={styles.inputField}
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone_number" className={styles.inputLabel}>
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phone_number"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
              placeholder="e.g., 1234567890"
              required
              className={styles.inputField}
            />
          </div>

          {/* Center ID */}
          <div>
            <label htmlFor="center_id" className={styles.inputLabel}>
              Center ID <span className="text-red-500">*</span>
            </label>
            <select
              name="center_id"
              value={formData.center_id}
              onChange={handleChange}
              required
              className={styles.inputField}
            >
              <option>{status === 0 ? "Loading" : "Select one of below"}</option>
              {status !== 0
                ? data.map((item) => (
                    <option key={item.UID} value={item.UID}>
                      {item.name}
                    </option>
                  ))
                : "loading"}
            </select>
          </div>

          {/* VIP ID */}
          <div>
            <label htmlFor="vip_id" className={styles.inputLabel}>
              VIP ID <span className="text-red-500">*</span>
            </label>
            <select
              id="vip_id"
              name="vip_id"
              value={formData.vip_id}
              onChange={handleChange}
              required
              className={styles.inputField}
            >
              <option value={"loading"}>Select from list below</option>
              {vipsData.map((item) => (
                <option key={item._id} value={item._id}>
                  {item.firstname} | {item.username} | {item.email}
                </option>
              ))}
            </select>
          </div>

          {/* Logged In (Optional) */}
          <div className={styles.checkboxWrapper}>
            <input
              type="checkbox"
              id="loggedIn"
              name="loggedIn"
              checked={formData.loggedIn}
              onChange={handleChange}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor="loggedIn" className={styles.checkboxLabel}>
              Is logged in?
            </label>
          </div>

          {/* Error Message */}
          {message && <div className={styles.errorMessage}>{message}</div>}

          {/* Submit Button */}
          <button type="submit" className={styles.submitButton} onClick={(e)=>submit_add_admin(e)}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SuperAdminAddAdminForm;
