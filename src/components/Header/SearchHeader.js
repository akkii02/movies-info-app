import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchHeader.module.css";

const SearchHeader = () => {
  return (
    <div className={classes.container}>
      <form>
        <input type="text" placeholder="Search..." className={classes.input} />
        <button type="submit" className={classes.button}>
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </form>
    </div>
  );
};

export default SearchHeader;
