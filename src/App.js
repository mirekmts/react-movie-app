import React, { Component } from 'react';
import { withAuth, Pagination } from './components';
import * as api from './helpers/moviesApi';
import './App.css';

class App extends Component {
  state = {
    movies: [],
    currentPage: 1,
    totalItems: undefined,
    pageLimit: 1,
    loading: true,
    error: false,
  };

  componentDidMount() {
    api.getAllMovies({ limit: this.state.pageLimit })
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

    api.getAllMovies({ page: currentPage, limit: this.state.pageLimit })
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

    return (
      <div className="App">
        <table>
          <thead>
            <tr>
              <th>Lp.</th>
              <th>Title</th>
              <th>Year</th>
              <th>Meta Score</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => (
              <tr key={movie._id}>
                <td>{index + 1 + ((this.state.currentPage - 1) * this.state.pageLimit)}</td>
                <td>{movie.title}</td>
                <td>{movie.year}</td>
                <td>{movie.metascore}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
