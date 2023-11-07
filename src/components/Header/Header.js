import React from "react";
import classes from "./Header.module.css";
import SearchHeader from "./SearchHeader";

const Header = () => {
      return(
            <div className={classes.header}>
                  <h1>Movie</h1>
                  <SearchHeader/>
            </div>
      );
};

export default Header;