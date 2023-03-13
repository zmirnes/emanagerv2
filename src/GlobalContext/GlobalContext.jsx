import { createContext, useState, useEffect } from "react";
import { uid } from "uid";

export const GlobalContext = createContext();

export const GlobalContextProvider = ({ children }) => {
  const unChangeableFields = [
    {
      id: uid(),
      value: "Odaberi",
      type: "checkbox",
      editable: false,
    },
    {
      id: "ime",
      value: "Ime i prezime",
      type: "text",
      editable: false,
    },
    {
      id: "radiOd",
      value: "Radi od",
      type: "date",
      editable: false,
    },
    {
      id: "pozicija",
      value: "Pozicija",
      type: "text",
      editable: false,
    },
    {
      id: "satnica",
      value: "Satnica",
      type: "number",
      editable: false,
    },
  ];

  const [users, setUsers] = useState(
    JSON.parse(localStorage.getItem("users")) === null
      ? []
      : JSON.parse(localStorage.getItem("users"))
  );
  const [fields, setFields] = useState(
    JSON.parse(localStorage.getItem("fields")) === null
      ? unChangeableFields
      : JSON.parse(localStorage.getItem("fields"))
  );
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [sortOrder, setSortOrder] = useState(1);
  const [filteredUsers, setFilteredUsers] = useState(users);

  // Funkcija za dodavanje kolone

  const addField = (name, type) => {
    const id = uid();
    setFields((prev) => [
      ...prev,
      { id: id, value: name, type: type, editable: true },
    ]);
    if (users.length > 0) {
      setUsers((prev) =>
        prev.map((user) => {
          user[id] = { value: "", type: type };
          return user;
        })
      );
    }
  };

  // Funkcija za dodavanje korisnika

  const addUser = () => {
    let newUser = {};
    fields.forEach((field) => {
      newUser[field.id] = {
        value: "",
        type: field.type,
      };
    });
    setUsers((prev) => [...prev, { id: uid(), ...newUser }]);
  };

  const onChangeData = (field, userID, value) => {
    if (value.target.type === "checkbox") {
      if (value.target.checked === true) {
        setSelectedUsers((prev) => [...prev, userID]);
      } else {
        setSelectedUsers((prev) => prev.filter((user) => user !== userID));
      }
    }

    setUsers((prev) =>
      prev.map((user) => {
        if (user.id === userID) {
          user[field].value = value.target.value;
          if (user[field].value === "") {
            user[field].value = "Nema informacije!";
            return user;
          }
        }
        return user;
      })
    );
  };

  const onFieldNameChange = (fieldID, value) => {
    console.log(fieldID, value);
    setFields((prev) =>
      prev.map((field) => {
        if (field.id === fieldID) {
          field.value = value;
          if (field.value === "") {
            field.value = "Neimenovano polje!";
            return field;
          }
          return field;
        }

        return field;
      })
    );
  };

  const deleteUsers = (selectedUsers) => {
    selectedUsers.forEach((id) => {
      setUsers((prev) => prev.filter((user) => user.id !== id));
    });
    setSelectedUsers([]);
  };

  const sortUsers = () => {
    setSortOrder(sortOrder * -1);
    setUsers((prev) =>
      [...prev].sort((a, b) => {
        const nameA = a.ime.value.toLowerCase();
        const nameB = b.ime.value.toLowerCase();

        if (nameA < nameB) {
          return -1 * sortOrder;
        }
        if (nameA > nameB) {
          return 1 * sortOrder;
        }
        return 0;
      })
    );
  };

  const filterUsers = (value) => {
    setFilteredUsers(() =>
      users.filter((user) =>
        user.ime.value.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const deleteField = (value) => {
    console.log(value);
    setFields((prev) => prev.filter((field) => field.id !== value));
    if (users.length > 0) {
      setUsers((prev) => {
        return [
          ...prev.map((user) => {
            delete user[value];
            return user;
          }),
        ];
      });
    }
  };

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("fields", JSON.stringify(fields));
    setFilteredUsers(users);
  }, [users, fields]);

  return (
    <GlobalContext.Provider
      value={{
        users,
        fields,
        addField,
        addUser,
        onChangeData,
        onFieldNameChange,
        deleteUsers,
        deleteField,
        selectedUsers,
        sortUsers,
        filterUsers,
        filteredUsers,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
