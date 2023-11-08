import React, { useState } from 'react';
import Button from "../UI/Button";
import Card from "../UI/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";

import classes from './FilterButton.module.css';

const FilterButton = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  const genres = [
    "Action",
    "Adventure",
    "Animation",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Science Fiction",
    "Thriller",
    "War",
    "Western",
  ];

  return (
    <Card  className={classes.container}>
      <Button className={classes.btn} onClick={() => setIsFilterVisible(!isFilterVisible)}>
        <FontAwesomeIcon icon={faFilter} />
      </Button>
      {isFilterVisible && (
        <Card>
          {genres.map((genre, index) => (
            <Button className={classes.button} key={index}>
              {genre}
            </Button>
          ))}
        </Card>
      )}
    </Card>
  );
};

export default FilterButton;
