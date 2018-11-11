import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Table.scss';

class Table extends Component {
  renderHeader = () => {
    const columns = Object.values(this.props.columns).map(column => <th key={column}>{column}</th>);

    return <tr>{columns}</tr>;
  }

  renderRows = () => this.props.rows.map((row) => {
    const values = Object.keys(this.props.columns).map(column => <td key={row._id + column}>{row[column]}</td>);

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
