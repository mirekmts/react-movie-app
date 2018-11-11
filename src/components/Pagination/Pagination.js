import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { range } from '../../helpers/utils';
import './Pagination.css';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

class Pagination extends Component {
  constructor(props) {
    super(props);
    const { totalRecords = null, pageLimit = 10, pageNeighbours = 0 } = props;

    this.pageLimit = typeof pageLimit === 'number' ? pageLimit : 10;
    this.totalRecords = typeof totalRecords === 'number' ? totalRecords : 0;

    this.pageNeighbours = typeof pageNeighbours === 'number'
      ? Math.max(0, Math.min(pageNeighbours, 2))
      : 0;

    this.totalPages = Math.ceil(this.totalRecords / this.pageLimit);

    this.state = { currentPage: 1 };
  }

  componentDidMount() {
    this.gotoPage(1);
  }

  gotoPage = (page) => {
    const { onPageChanged = f => f } = this.props;

    const currentPage = Math.max(0, Math.min(page, this.totalPages));

    const paginationData = {
      currentPage,
      totalPages: this.totalPages,
      pageLimit: this.pageLimit,
      totalRecords: this.totalRecords,
    };

    this.setState({ currentPage }, () => onPageChanged(paginationData));
  }

  handleClick = page => (evt) => {
    evt.preventDefault();
    this.gotoPage(page);
  }

  handleMoveLeft = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage - (this.pageNeighbours * 2) - 1);
  }

  handleMoveRight = (evt) => {
    evt.preventDefault();
    this.gotoPage(this.state.currentPage + (this.pageNeighbours * 2) + 1);
  }

  fetchPageNumbers = () => {
    const { totalPages, pageNeighbours } = this;
    const { currentPage } = this.state;
    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage - pageNeighbours);
      const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

      let pages = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
  }

  emptyFunc = () => {}

  render() {
    if (!this.totalRecords || this.totalPages === 1) return null;

    const { currentPage } = this.state;
    const pages = this.fetchPageNumbers();

    return (
      <Fragment>
        <ul className="pagination">
          { pages.map((page) => {
            if (page === LEFT_PAGE) {
              return (
                <li key={LEFT_PAGE} className="page-item">
                  <button className="page-link" type="button" onClick={this.handleMoveLeft}>
                    <span>&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </button>
                </li>
              );
            }

            if (page === RIGHT_PAGE) {
              return (
                <li key={RIGHT_PAGE} className="page-item">
                  <button className="page-link" type="button" onClick={this.handleMoveRight}>
                    <span>&raquo;</span>
                    <span className="sr-only">Next</span>
                  </button>
                </li>
              );
            }

            return (
              <li key={page} className={`page-item${currentPage === page ? ' active' : ''}`}>
                <button
                  className="page-link"
                  type="button"
                  onClick={currentPage !== page ? this.handleClick(page) : this.emptyFunc}
                >
                  { page }
                </button>
              </li>
            );
          }) }

        </ul>
      </Fragment>
    );
  }
}

Pagination.propTypes = {
  totalRecords: PropTypes.number.isRequired,
  pageLimit: PropTypes.number,
  pageNeighbours: PropTypes.number,
  onPageChanged: PropTypes.func,
};

export default Pagination;
