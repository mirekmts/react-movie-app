import React, { Component } from 'react';
import {
  withAuth, Pagination, Table, Filters,
} from './components';
import * as api from './helpers/moviesApi';
import './App.scss';

class App extends Component {
  state = {
    movies: [],
    currentPage: 1,
    totalItems: undefined,
    pageLimit: 3,
    loading: true,
    error: false,
    sortBy: '_id',
    sortDir: 1,
  };

  componentDidMount() {
    this.getData();
  }

  apiFilters = () => {
    const {
      sortBy, sortDir, pageLimit, currentPage,
    } = this.state;
    return {
      sortBy,
      sortDir,
      limit: pageLimit,
      page: currentPage,
    };
  }

  handleChangeFilters = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    }, this.getData());
  };

  getData = () => {
    api.getAllMovies({ ...this.apiFilters() })
      .then((res) => {
        this.setState({
          movies: res.collection,
          totalItems: res.total,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  }

  onPageChanged = (data) => {
    const { currentPage } = data;

    api.getAllMovies({ ...this.apiFilters(), page: currentPage })
      .then((res) => {
        this.setState({
          movies: res.collection,
          currentPage,
          totalItems: res.total,
          loading: false,
          error: false,
        });
      })
      .catch(() => {
        this.setState({
          error: true,
          loading: false,
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>;
    }

    if (this.state.error) {
      return <div>An error occurred. Please try again.</div>;
    }

    const columns = {
      ordinal: 'No.',
      title: 'Title',
      year: 'Year',
      metascore: 'Metascore',
    };

    const movies = this.state.movies.map((movie, index) => {
      movie.ordinal = index + 1 + ((this.state.currentPage - 1) * this.state.pageLimit);
      return movie;
    });

    return (
      <div className="App">
        <h1>Movies App</h1>
        <Filters onChange={this.handleChangeFilters} />
        <Table columns={columns} rows={movies} />
        <div className="flex">
          <Pagination
            totalRecords={this.state.totalItems}
            pageLimit={this.state.pageLimit}
            pageNeighbours={1}
            onPageChanged={this.onPageChanged}
          />
        </div>
      </div>
    );
  }
}

export default withAuth(App);
