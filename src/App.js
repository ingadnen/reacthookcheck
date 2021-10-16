import React, { useState } from 'react';
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';
import {movies} from './Components/MovieList';

import './Components/App.css';

function App () {
  const [ moviesL, setMoviesL ] = useState(movies);
  
  const addMovie = (moviesN) => setMoviesL([...moviesL, moviesN]);
  /*const addMovie = (moviesN ) => {
      let copy = [...moviesL];
      copy.push = [{ id: movies.length + 1, title: moviesN.title, description: moviesN.description }];
      setMoviesL(copy);
      
    }*/
   
    return (
      <div>
        <Filter
        moviesArray={moviesL}/> 
       
        <AddMovie addAdd={addMovie}/>
      </div>
    );
  
}

export default App;
