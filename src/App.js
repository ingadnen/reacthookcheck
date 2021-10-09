import React, { useState } from 'react';
import Filter from './Components/Filter';
import AddMovie from './Components/AddMovie';
import data from './Components/MovieList';
import './Components/App.css';

function App () {
  /*const [ movies, setMovies ] = useState(data);
  const addMovie = (userInput ) => {
      let copy = [...movies];
      copy = [...copy, { id: movies.length + 1, title: userInput, description: "" }];
      setMovies(copy);
       <AddMovie addMovie={addMovie}/>
    }
   */
    return (
      <div>
        
        <Filter/> 
      
      </div>
    );
  
}

export default App;
