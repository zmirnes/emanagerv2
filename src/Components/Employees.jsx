import { useContext, useEffect, useState } from "react";
import classes from "./Employees.module.css";
import EmployeesTable from "./EmployeesTable";
import { GlobalContext } from "../GlobalContext/GlobalContext";

const Employees = () => {
  const { users, selectedUsers, deleteUsers, sortUsers } =
    useContext(GlobalContext);

  const [deleteDisabled, setDeleteDisabled] = useState(true);

  useEffect(() => {
    selectedUsers.length > 0 && setDeleteDisabled(false);
    selectedUsers.length === 0 && setDeleteDisabled(true);
  }, [selectedUsers]);

  return (
    <div className={classes.employeesContainer}>
      <div className={classes.employeesNumber}>
        <span>Broj zaposlenih: {`${users.length}`}</span>
        <button
          className={classes.deleteUsersBtn}
          disabled={deleteDisabled}
          onClick={() => deleteUsers(selectedUsers)}
        >
          Izbriši odabrane
        </button>
      </div>
      <button className={classes.sortBtn} onClick={() => sortUsers()}>
        Sortiraj
      </button>
      <EmployeesTable />
    </div>
  );
};

export default Employees;
