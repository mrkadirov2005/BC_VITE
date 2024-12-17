"use client";
import React, { Suspense, useEffect, useState } from 'react';
import SuperAdminAddAdminForm from './add_admin/AddAdminComp';
import styles from './styles.module.css';  // Import the CSS Module
import { useDispatch, useSelector } from 'react-redux';
import { get_super_admin_admins_data, get_super_admin_message, get_super_admin_status, get_super_admin_token } from '../../../../redux/selectors';
import { get_admins_request } from '../../../../redux/reducers/thunks/get_admins';
import { delete_admin_request } from '../../../../redux/reducers/thunks/delete_admin';
export default function SuperAdminAdminsPage() {
  const dispatch=useDispatch()
  const token=useSelector(get_super_admin_token)
  const adminData=useSelector(get_super_admin_admins_data)
 const status=useSelector(get_super_admin_status)
 const message=useSelector(get_super_admin_message)
  const [page, setPage] = useState();


  const load_data_function=(e)=>{
    e.preventDefault()
dispatch(get_admins_request({token}))
  }

  const handle_delete_admin=(e)=>{
dispatch(delete_admin_request({token,_id:e.target.id}))
dispatch(get_admins_request({token}))

// console.log(e.target.id)
  }


  return (
    <div className={`${styles.container} min-h-screen bg-gray-100 p-6`}>
      <div className={styles.container}>
        {/* Header */}
        {page === 0 || !page ? (
          <header className={styles.header}>
            <h1 className={styles.headerTitle}>Admin Management</h1>
            <p className={styles.headerSubTitle}>Manage and monitor all admins</p>
          </header>
        ) 
         : null}

        {/* Admin List Section */}
        <div className="flex justify-between items-center my-8">
        <div>  <h1 className="text-3xl font-bold text-gray-800">List of Admins</h1> <button onClick={(e)=>{load_data_function(e)}}> load data</button></div>
        
        </div>

        {/* Admins Table */}
        {status =="pending" ? (
          <h1 className={styles.noDataText}>Loading...</h1>
        ) : (
          <Suspense fallback={<h1 className={styles.noDataText}>Loading admins...</h1>}>
            <div className={styles.tableContainer}>
              <table className={styles.table}>
                {/* Table Header */}
                <thead className={styles.tableHeader}>
                  <tr>
                    <th className={styles.tableHeaderCell}>ID</th>
                    <th className={styles.tableHeaderCell}>Name</th>
                    <th className={styles.tableHeaderCell}>Username</th>
                    <th className={styles.tableHeaderCell}>Email</th>
                    <th className={styles.tableHeaderCell}>Center_id</th>
                    <th className={styles.tableHeaderCell}>Actions</th>
                  </tr>
                </thead>
                {/* Table Body */}
                <tbody>
                  {adminData ? (
                    adminData.map((user) => (
                      <tr key={user._id} className={styles.tableRow}>
                        <td className={styles.tableCell}>{user._id}</td>
                        <td className={styles.tableCell}>
                          {user.firstname} {user.lastname}
                        </td>
                        <td className={styles.tableCell}>{user.username}</td>
                        <td className={styles.tableCell}>{user.email}</td>
                        <td className={styles.tableCell}>{user.center_id}</td>

                        <td className={styles.tableCell}>
                          {/* <Link href={`/super_admin/admin/${user._id}`} className="text-indigo-600 hover:text-indigo-900">Details</Link> */}
                          <button
                          id={user._id}
                          onClick={(e)=>handle_delete_admin(e)}
                          >
                          Delete
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={5} className={styles.noDataText}>No admins found</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </Suspense>
        )}
        {<div className={styles.message}>{typeof message=="string"?message:message.message}</div>}
      </div>
    </div>
  );
}
