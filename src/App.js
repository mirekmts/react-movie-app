import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  withAuth, Pagination, Table, Filters, LoadingSpinner,
} from './components';
import './App.scss';
import {
  fetchMovies,
} from './redux/actions';

class App extends Component {
  state = { ...this.props.filters }

  getData = () => {
    this.props.fetchMovies({ ...this.props.filters });
  }

  componentDidMount() {
    this.getData();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.filters.page !== this.props.filters.page
      || prevProps.filters.limit !== this.props.filters.limit
      || prevProps.filters.sortBy !== this.props.filters.sortBy
      || prevProps.filters.sortDir !== this.props.filters.sortDir) {
      this.getData();
    }
  }

  renderContent = () => {
    const columns = {
      ordinal: 'No.',
      title: 'Title',
      year: 'Year',
      metascore: 'Metascore',
    };

    const movies = this.props.movies.map((movie, index) => {
      movie.ordinal = index + 1 + ((this.props.filters.page - 1) * this.props.filters.limit);
      return movie;
    });

    return (
      <React.Fragment>
        <Filters />
        <Table columns={columns} rows={movies} />
        <div className="flex">
          <Pagination
            totalRecords={this.props.total}
            pageLimit={this.props.filters.limit}
            pageNeighbours={1}
          />
        </div>
      </React.Fragment>
    );
  }

  renderLoading = () => <LoadingSpinner />

  render() {
    if (this.props.error) {
      return <div>An error occurred. Please try again.</div>;
    }

    return (
      <div className="App">
        <h1>Movies App</h1>
        {this.props.loading ? this.renderLoading() : this.renderContent()}
      </div>
    );
  }
}


const mapStateToProps = state => ({
  movies: state.movies.movies,
  loading: state.movies.loading,
  error: state.movies.error,
  total: state.movies.total,
  filters: state.filters,
});

const mapDispatchToProps = dispatch => ({
  fetchMovies: (filters) => {
    dispatch(fetchMovies(filters));
  },
});

export default withAuth(connect(mapStateToProps, mapDispatchToProps)(App));
