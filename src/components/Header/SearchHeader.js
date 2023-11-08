import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import classes from "./SearchHeader.module.css";
import Button from "../UI/Button";

const SearchHeader = () => {
  return (
    <div className={classes.container}>
      <form>
        <input type="text" placeholder="Search..." className={classes.input} />
        <Button type="submit" className={classes.button}>
          <FontAwesomeIcon icon={faSearch} />
        </Button>
      </form>
    </div>
  );
};

export default SearchHeader;
