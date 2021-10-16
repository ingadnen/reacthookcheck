import React, { useState } from 'react';
//import MovieCard from './MovieCard';
import mov from './MovieList';
import {
  Button,
  InputGroup,
  Label,
  Input,
} from 'reactstrap';
//import {movies} from './MovieList.js'
const AddMovie = ({ addAdd }) => {

    const [ moviesN, setMoviesN ] = useState(mov,
    {title: '',
    description: '',
    urlPoster: '',
    rate: 0,}
    );

 const handleChange = (e) =>
    setMoviesN({ ...moviesN, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    addAdd(moviesN);
    setMoviesN({ movies: mov });
  };



    return (
        
        <div>
            <header>
                <div className="container">
                    <div className="inner-content">
                        <div className="nav-links">
                            <form onSubmit={handleSubmit}>
                             <InputGroup row>
                                    <Label for='Title' sm={2}>
                                    Title:
                                    </Label>
                                    <Input
                                    type='text'
                                    name='title'
                                    placeholder='Title'
                                    onChange={handleChange}
                                    />
                                </InputGroup>
                                <InputGroup row>
                                    <Label for='Poster' sm={2}>
                                    Poster:
                                    </Label>
                                    <Input
                                    type='url'
                                    name='posterUrl'
                                    placeholder='Poster URL '
                                    onChange={handleChange}
                                    />
                                </InputGroup>
                                <InputGroup row>
                                    <Label for='Description' sm={2}>
                                    Description:
                                    </Label>
                                    <Input
                                    type='textarea'
                                    name='description'
                                    placeholder='Description '
                                    onChange={handleChange}
                                    />
                                </InputGroup>
                                <InputGroup row>
                                    <Label for='rate' sm={2}>
                                    Rate:
                                    </Label>
                                    <Input
                                    type='text'
                                    name='rate'
                                    placeholder='Rate '
                                    onChange={handleChange}
                                    />
                                </InputGroup>
                                <Button
                                    color='primary'
                                    onClick={(e) => {
                                    handleSubmit(e);
                                    }}
                                >
                                    Add
                                </Button>{' '}
         
          
                            </form>
                            
                        </div>
                    </div>
                </div>
            </header>
                       
        </div>
       
    
      
                            
    );
};

export default AddMovie;