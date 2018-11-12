import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  setFilter,
} from '../../redux/actions';
import './Filters.scss';

class Filters extends Component {
  handleChangeFilters = (event) => {
    const value = event.target.name === 'sortBy' ? event.target.value : parseInt(event.target.value, 10);
    this.props.setFilter(event.target.name, value);
  };

  render() {
    const { sortBy, sortDir, limit } = this.props;

    return (
      <div>
        <div className="custom-dropdown">
          <select name="sortBy" onChange={this.handleChangeFilters} value={sortBy}>
            <option value="title">Title</option>
            <option value="year">Year</option>
            <option value="metascore">Metascore</option>
          </select>
        </div>
        <div className="custom-dropdown">
          <select name="limit" onChange={this.handleChangeFilters} value={limit}>
            <option value={2}>2</option>
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={20}>20</option>
          </select>
        </div>
        <div className="custom-dropdown">
          <select name="sortDir" onChange={this.handleChangeFilters} value={sortDir}>
            <option value={1}>Ascending</option>
            <option value={-1}>Descending</option>
          </select>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  sortDir: state.filters.sortDir,
  limit: state.filters.limit,
  sortBy: state.filters.sortBy,
});

const mapDispatchToProps = dispatch => ({
  setFilter: (name, value) => {
    dispatch(setFilter(name, value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Filters);
