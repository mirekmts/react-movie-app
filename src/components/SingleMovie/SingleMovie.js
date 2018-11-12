import React, { Component } from 'react';
import { connect } from 'react-redux';

class SingleMovie extends Component {
  componentDidMount() {
    if (!this.props.movie) {
      this.props.history.replace('/');
    }
  }

  render() {
    if (!this.props.movie) {
      return null;
    }

    const { movie } = this.props;

    return (
      <div>
        <div>
          Title:
          <a rel="noopener noreferrer" target="_blank" href={`https://www.imdb.com/title/${movie.imdbId}`}>
            {movie.title}
          </a>
        </div>
        <div>Director: {movie.director}</div>
        <div>Year: {movie.year}</div>
        <div>Metascore: {movie.metascore}</div>
        <ul>
          Actors list {movie.actors.map(actor => <li key={actor.name}>{actor.name}</li>)}
        </ul>
        <img src={movie.posterUrl} alt="poster" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  movie: state.movies.selectedMovie,
});

export default connect(mapStateToProps, null)(SingleMovie);
