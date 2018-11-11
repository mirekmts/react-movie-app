import React, { Component } from 'react';

class Filters extends Component {
  render() {
    return (
      <div>
        <select name="sortBy" onChange={this.props.onChange}>
          <option value="_id">Id</option>
          <option value="title">Title</option>
          <option value="director">Director</option>
          <option value="year">Year</option>
          <option value="metascore">Metascore</option>
        </select>
        <select name="limit" onChange={this.props.onChange}>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
        <select name="sortDir" onChange={this.props.onChange}>
          <option value="1">Ascending</option>
          <option value="-1">Descending</option>
        </select>
      </div>
    );
  }
}

export default Filters;
