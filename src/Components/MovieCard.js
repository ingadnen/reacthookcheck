import React from 'react';
import './App.css';
class MovieCard extends React.Component {
    render() {
      const { title, description, rate, posterURL } = this.props.movie;
      return (
        <div className="info">
        <figure>
          <img src={posterURL} alt="im"/>
          <figcaption>
            <h4 className="title">{title}</h4>
            <p className="alignleft">{description.join(' ')}</p>
            <p className="alignright">{rate}</p>
            
          </figcaption>
        </figure>
        </div>
      );
    }
  }
  export default MovieCard;