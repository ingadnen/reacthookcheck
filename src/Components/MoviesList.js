
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import React from 'react';
import './App.css';


const MoviesList = ({ moviesArray }) => {
  return (
    
    <section>
      {moviesArray.map((movie, key) => (
        <MovieCard movie={movie} key={key} />
      ))}
      </section>
   
  );
};

MoviesList.propTypes = {
  moviesArray: PropTypes.array.isRequired,
};

export default MoviesList;