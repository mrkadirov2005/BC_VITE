import React, { useState } from "react";
import AddCenterForm from "./add_center/add_component";
import SuperAdminDeleteCenter from "./delete_center/Delete_center_comp";
import styles from "./SuperAdminCentersPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getCentersData } from "../../../../redux/reducers/thunks/get_centers_data";
import { get_super_admin_centers_data, get_super_admin_token } from "../../../../redux/selectors";
import { Button } from "@mui/material";

export default function SuperAdminCentersPage() {
  const dispatch = useDispatch();
  const token = useSelector(get_super_admin_token);
  const data = useSelector(get_super_admin_centers_data);
  const [page, setPage] = useState("home");

  return (
    <main className={`${styles.container}`}>
      <h1 className={`${styles.title}`}>Super Admin Centers Management</h1>

      <div className={`${styles.contentWrapper}`}>
        <section className={`${styles.mainSection}`}>
          <div className={`${styles.welcomeText}`}>
            Welcome to the Admin Page. Manage Centers Below.
          </div>

          <div className={`${styles.buttonGroup}`}>
            <button
              className={`${styles.button} ${
                page === "add_page" ? styles.activeAddButton : styles.addButton
              }`}
              onClick={() =>
                setPage(page === "add_page" ? "home" : "add_page")
              }
            >
              {page === "add_page" ? "Back to Home" : "Add Center"}
            </button>

            <button
              className={`${styles.button} ${
                page === "delete_page"
                  ? styles.activeDeleteButton
                  : styles.deleteButton
              }`}
              onClick={() =>
                setPage(page === "delete_page" ? "home" : "delete_page")
              }
            >
              {page === "delete_page" ? "Back to Home" : "Delete Center"}
            </button>
          </div>
          <section>
            {page === "home" ? (
              " "
            ) : page === "add_page" ? (
              <AddCenterForm />
            ) : page === "delete_page" ? (
              <SuperAdminDeleteCenter />
            ) : (
              ""
            )}
          </section>
          <section className={`${styles.centerList}`}>
            <Button onClick={() => dispatch(getCentersData({token}))}>
              Load centers data
            </Button>
            <h1 className={`${styles.centerListTitle}`}>Centers List:</h1>
            <div className={`${styles.centerListContent}`}>
              {data && data.length > 0 ? (
                data.map((item) => (
                  <div key={item.UID} className={`${styles.centerItem}`}>
                    <h2 className={`${styles.centerText}`}>
                      Name: {item.name}
                    </h2>
                    <h2 className={`${styles.centerText}`}>
                      ID: {item.UID}
                    </h2>
                    <a
                      href={`/super_admin/centers/${item._id}`}
                      className={`${styles.centerLink}`}
                    >
                      ...
                    </a>
                  </div>
                ))
              ) : (
                "No data loaded"
              )}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}
