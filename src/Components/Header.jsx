import React from "react";
import classes from "./Header.module.css";
import searchImage from "../assets/search.svg";
import { useState, useContext, useRef } from "react";
import { GlobalContext } from "../GlobalContext/GlobalContext";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const type = useRef();
  const fieldName = useRef();

  const { addField, addUser, filterUsers } = useContext(GlobalContext);

  const [showAddForm, setShowAddForm] = useState(false);

  const showFormHandler = () => {
    setShowAddForm((prev) => !prev);
  };

  const submitForm = (e) => {
    e.preventDefault();
    addField(fieldName.current.value, type.current.value);
    setShowAddForm((prev) => !prev);
  };

  return (
    <div className={classes.header}>
      <div className={classes.logoContainer}>
        <h1 className={classes.logo}>Emplyoees</h1>
      </div>
      <div className={classes.actions}>
        <div className={classes.searchField}>
          <img src={searchImage} alt="Search" />
          <input
            type="text"
            className={classes.search}
            placeholder="Pretraži korisnike po imenu ili prezimenu"
            onChange={(e) => filterUsers(e.target.value)}
          />
        </div>
        <button className={classes.addBtn} onClick={showFormHandler}>
          + Dodaj kolonu
        </button>
        <button className={classes.addBtn} onClick={addUser}>
          + Dodaj radnika
        </button>
        {showAddForm && (
          <AnimatePresence>
            <div className={classes.addField}>
              <motion.form
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className={classes.form}
                onSubmit={submitForm}
              >
                <input placeholder="Ime polja" ref={fieldName}></input>
                <select placeholder="Tip polja" ref={type}>
                  <option value="text">Tekst</option>
                  <option value="number">Broj</option>
                  <option value="date">Datum</option>
                </select>
                <div className={classes.formActions}>
                  <button className={classes.formAddBtn} type="submit">
                    Dodaj kolonu
                  </button>
                  <button
                    className={classes.formCancelBtn}
                    onClick={showFormHandler}
                  >
                    Odustani
                  </button>
                </div>
              </motion.form>
            </div>
          </AnimatePresence>
        )}
      </div>
    </div>
  );
};

export default Header;
