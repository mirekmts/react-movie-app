import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { LoadingSpinner, ErrorMessage, withAuth } from '../../components';
import {
  fetchActor,
} from '../../redux/actions';
import './Actor.scss';

class Actor extends Component {
  componentDidMount() {
    this.props.fetchActor(this.props.match.params.actorId);
  }

  renderContent = () => {
    const { actor } = this.props;
    const date = new Date(actor.birthday);
    const birthdayDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

    return (
      <div className="single-page-container">
        <img src={actor.photoUrl} alt="actor" />
        <div className="text-data-container">
          <p>
            <span>Name:</span>
            <a rel="noopener noreferrer" target="_blank" href={`https://www.imdb.com/name/${actor.imdbId}`}>
              {actor.name}
            </a>
          </p>
          <p><span>Country:</span>{actor.country}</p>
          <p><span>Birthday:</span>{birthdayDate}</p>
        </div>
      </div>
    );
  }

  render() {
    if (this.props.error) {
      return <ErrorMessage />;
    }

    return this.props.loading ? <LoadingSpinner /> : this.renderContent();
  }
}

Actor.propTypes = {
  fetchActor: PropTypes.func,
  error: PropTypes.bool,
  loading: PropTypes.bool,
  actor: PropTypes.shape({
    imdbId: PropTypes.string,
    name: PropTypes.string,
    country: PropTypes.string,
    photoUrl: PropTypes.string,
    birthday: PropTypes.string,
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      actorId: PropTypes.string,
    }),
  }),
};

const mapStateToProps = state => ({
  actor: state.actor.actor,
  loading: state.actor.loading,
  error: state.actor.error,
});

const mapDispatchToProps = dispatch => ({
  fetchActor: (id) => {
    dispatch(fetchActor(id));
  },
});

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(Actor));
