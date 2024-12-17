"use client";
import React, { useEffect, useState } from "react";
import AddVipPage from "./add_vip/ADD_VIP";
import DeleteVip from "./deelete_vip/DELETE_VIP";
import SuperAdminPageVIPComp from "./VIP/SINGLE_PAGE";
import styles from "./VIPpage.module.css";
import { get_super_admin_token, get_super_admin_vips_data } from "../../../../redux/selectors";
import { useDispatch, useSelector } from "react-redux";
import { getVipsData } from "../../../../redux/reducers/thunks/load_vips_data";

export default function VIPPage() {
  const vips_data=useSelector(get_super_admin_vips_data)
  const [page, setPage] = useState(0); // 0 is home page by default
  const [VIPdata, setVIPsData] = useState(vips_data);
  const [status, setStatus] = useState(0);
  const [VIP, setVIP] = useState(); // Used for single VIP page
  const [message, setMessage] = useState("");
 
  const dispatch=useDispatch()
  const token=useSelector(get_super_admin_token)
  // useEffect(() => {
  //   getVIPSData({ setMessage, setStatus, setVIPsData });
  // }, []);

  const renderPageContent = () => {
    switch (page) {
      case 1:
        return <AddVipPage />;
      case 2:
        return <DeleteVip />;
      case 3:
        return VIP ? <SuperAdminPageVIPComp data={[VIP]} /> : <p>Loading VIP data...</p>;
      default:
        return (
          <div className={styles.defaultPage}>
            <h1 className={styles.title}>Default Page</h1>
            <p>Welcome to the default VIP page. Click the button above to add a VIP.</p>
          </div>
        );
    }
  };

const load_vips_data=(e)=>{
  e.preventDefault(); 
  dispatch(getVipsData(token))
}
  return (
    <main className={styles.container}>
      <div className={styles.pageContent}>{renderPageContent()}</div>

      <div className={styles.buttonContainer}>
        <button
          onClick={() => setPage(page === 1 ? 0 : 1)}
          className={`${styles.button} ${page === 1 ? styles.active : styles.addButton}`}
        >
          {page === 1 ? "Go Back" : "Add VIP"}
        </button>
        <button
          onClick={() => setPage(page === 2 ? 0 : 2)}
          className={`${styles.button} ${page === 2 ? styles.active : styles.deleteButton}`}
        >
          {page === 2 ? "Go Back" : "Delete VIP"}
        </button>
        <button
          onClick={(e) => load_vips_data(e)}
          className={`${styles.button} ${page === 2 ? styles.active : styles.deleteButton}`}
        >
          {"Load Data"}
        </button>
      </div>

      <section className={styles.vipList}>
        { 
          VIPdata?.map((item) => (
      <div
        key={item._id}
        onClick={() => {
          setVIP(item);
          setPage(3);
        }}
        className={styles.vipItem}
      >
        <h1 className={styles.vipDetail}>Firstname: {item.firstname}</h1>
        <h1 className={styles.vipDetail}>Lastname: {item.lastname}</h1>
        <h1 className={styles.vipDetail}>Username: {item.username}</h1>
      </div>
    ))}
      </section>

      <span className={styles.message}>{message}</span>
    </main>
  );
}
