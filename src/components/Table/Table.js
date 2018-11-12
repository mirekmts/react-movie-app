import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Table.scss';

class Table extends Component {
  renderHeader = () => {
    const columns = Object.values(this.props.columns).map(column => <th key={column}>{column}</th>);

    return <tr>{columns}</tr>;
  }

  renderRows = () => this.props.rows.map((row) => {
    const values = Object.keys(this.props.columns).map(column => (
      <td key={row._id + column}>
        {<Link to={`/movie/${row.imdbId}`}>{row[column]}</Link>}
      </td>
    ));

    return <tr key={row._id}>{values}</tr>;
  })

  render() {
    return (
      <table className="responsive-table">
        <thead>
          {this.renderHeader()}
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </table>
    );
  }
}

Table.propTypes = {
  columns: PropTypes.object.isRequired,
  rows: PropTypes.array.isRequired,
};

export default Table;
