import classes from "./EmployeesTable.module.css";
import { useContext } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import deleteFieldIcon from "../assets/deleteField.svg";
import { motion } from "framer-motion";

const EmployeesList = () => {
  const {
    fields,
    onChangeData,
    onFieldNameChange,
    filteredUsers,
    deleteField,
  } = useContext(GlobalContext);

  return (
    <div className={classes.tableContainer}>
      <table className={classes.employeesTable}>
        <tbody>
          <tr>
            {fields.map((field) => (
              <td className={classes.fieldName} key={field.id}>
                <input
                  type="text"
                  defaultValue={field.value}
                  disabled={!field.editable}
                  onChange={(e) => onFieldNameChange(field.id, e.target.value)}
                />
                {field.editable && (
                  <img
                    src={deleteFieldIcon}
                    alt="Delete field"
                    className={classes.deleteFieldBtn}
                    onClick={(e) => deleteField(field.id)}
                  />
                )}
              </td>
            ))}
          </tr>

          {filteredUsers.map((user) => {
            return (
              <motion.tr
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                key={user.id}
              >
                {Object.entries(user)
                  .filter(([key, value]) => key !== "id")
                  .map(([key, value]) => {
                    return (
                      <td key={key}>
                        <input
                          type={value.type}
                          defaultValue={
                            value.value === "" && value.type !== "checkbox"
                              ? "Nema informacije!"
                              : value.value
                          }
                          onChange={(e) => onChangeData(key, user.id, e)}
                        />
                      </td>
                    );
                  })}
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeesList;
