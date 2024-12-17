import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { get_super_admin_status, get_super_admin_teachers, get_super_admin_token } from "../../../../redux/selectors";
import { get_teachers_request } from "../../../../redux/reducers/thunks/get_teachers";

export default function SuperAdminTeachersComp() {

  const dispatch=useDispatch()
  const token=useSelector(get_super_admin_token)
  const [page, setPage] = useState(0);
  const [message, setMessage] = useState("");
  const status=useSelector(get_super_admin_status)
const Teachers=useSelector(get_super_admin_teachers)


  // const handleDeleteTeacher = (_id) => {
  // };

  const RenderTeachers = () => {
    return (
      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Email</th>
              <th>Username</th>
              <th>Phone Number</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Teachers.length > 0 ? (
              Teachers.map((teacher, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{teacher.firstname}</td>
                  <td>{teacher.lastname}</td>
                  <td>{teacher.email}</td>
                  <td>{teacher.username}</td>
                  <td>{teacher.phone_number}</td>
                  <td>
                    <button
                      // onClick={() => handleDeleteTeacher(teacher._id)}
                      className={styles.deleteButton}
                    >
                      {/* <FaTrash /> */}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" className={styles.noData}>
                  No data loaded yet
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <section className={styles.section}>
      {/* Page Title */}
      <header className={styles.header}>
        <h1>Welcome to Teachers Page!</h1>
      </header>

      {/* Subheading */}
      <h2 className={styles.subheading}>Manage the Teachers Efficiently</h2>
      {/* Add Teacher Button */}
      <div className={styles.buttonContainer}>
<button onClick={()=>{dispatch(get_teachers_request({token}))}}>load data</button>
    
      </div>

      {/* Conditional Rendering */}
      {status =="pending" ? (
        <div className={styles.loading}>Loading...</div>
      ) : (
        <>
          {/* Add Teacher Form */}
          {page === 1 && (
            <SuperAdminAddTeacherPage
              setStatus={setStatus}
            />
          )}

          {/* Teachers Table */}
          <RenderTeachers />

          {/* Message Notification */}
          {message && (
            <div
              className={`${styles.message} ${
                message ? styles.messageSuccess : styles.messageError
              }`}
            >
              {message}
            </div>
          )}
        </>
      )}
    </section>
  );
}
