import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { LoadingSpinner, ErrorMessage, withAuth } from '../../components';
import {
  fetchSingleMovie,
} from '../../redux/actions';
import './SingleMovie.scss';

export class SingleMovie extends Component {
  componentDidMount() {
    this.props.fetchSingleMovie(this.props.match.params.movieId);
  }

  renderContent = () => {
    const { movie } = this.props;

    return (
      <div className="single-page-container">
        <img src={movie.posterUrl} alt="poster" />
        <div className="text-data-container">
          <p>
            <span>Title:</span>
            <a rel="noopener noreferrer" target="_blank" href={`https://www.imdb.com/title/${movie.imdbId}`}>
              {movie.title}
            </a>
          </p>
          <p><span>Director:</span>{movie.director}</p>
          <p><span>Year:</span>{movie.year}</p>
          <p><span>Metascore:</span>{movie.metascore}</p>
          <ul>
            <span className="bold ">Actors list</span>
            {movie.actors.map(actor => (
              <li key={actor.imdbId}>
                <Link to={`/actor/${actor.imdbId}`} key={actor.name}>
                  {actor.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
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

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(SingleMovie));
