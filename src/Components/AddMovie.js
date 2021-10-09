import React, { useState } from 'react';

const AddMovie = ({ addMovie }) => {

    const [ userInput, setUserInput ] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addMovie(userInput);
        setUserInput("");
    }
    return (
        <form onSubmit={handleSubmit}>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter Movie Title Here..."/>
            <button>Submit</button>
        </form>
    );
};

export default AddMovie;