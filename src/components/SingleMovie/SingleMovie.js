import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadingSpinner, ErrorMessage } from '../index';
import {
  fetchSingleMovie,
} from '../../redux/actions';

class SingleMovie extends Component {
  componentDidMount() {
    this.props.fetchSingleMovie(this.props.match.params.movieId);
  }

  renderContent = () => {
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
          Actors list
          {movie.actors.map(actor => (
            <li key={actor.imdbId}>
              <Link to={`/actor/${actor.imdbId}`} key={actor.name}>
                {actor.name}
              </Link>
            </li>
          ))}
        </ul>
        <img src={movie.posterUrl} alt="poster" />
      </div>
    );
  }

  render() {
    if (this.props.error) {
      return <ErrorMessage />;
    }

    return this.props.loading || !this.props.movie ? <LoadingSpinner /> : this.renderContent();
  }
}

SingleMovie.propTypes = {
  fetchSingleMovie: PropTypes.func,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  movie: PropTypes.shape({
    imdbId: PropTypes.string,
    title: PropTypes.string,
    director: PropTypes.string,
    metascore: PropTypes.number,
    year: PropTypes.number,
    posterUrl: PropTypes.string,
    actors: PropTypes.arrayOf(PropTypes.object),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      movieId: PropTypes.string,
    }),
  }),
};

const mapStateToProps = state => ({
  movie: state.movies.selectedMovie,
  loading: state.movies.loading,
  error: state.movies.error,
});

const mapDispatchToProps = dispatch => ({
  fetchSingleMovie: (id) => {
    dispatch(fetchSingleMovie(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleMovie);
