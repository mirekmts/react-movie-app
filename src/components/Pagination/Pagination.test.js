import React from 'react';
import { shallow } from 'enzyme';
import { Pagination, mapDispatchToProps } from './Pagination';
import * as actions from '../../redux/actions';

describe('<Pagination />', () => {
  let wrapper;

  const mochSetPage = jest.fn();

  const props = {
    totalRecords: 22,
    pageLimit: 5,
    setPage: mochSetPage,
    currentPage: 2,
  };

  beforeEach(() => {
    wrapper = shallow(<Pagination {...props} />);
  });

  it('render Pagination correctly', () => {
    expect(wrapper.find('ul').exists()).toBe(true);
    expect(wrapper.find('ul').hasClass('pagination')).toBe(true);
  });

  it('render specific number of li elements correctly', () => {
    expect(wrapper.find('ul li')).toHaveLength(Math.ceil(props.totalRecords / props.pageLimit));
  });

  it('render active page correctly', () => {
    expect(wrapper.find('ul li').at(props.currentPage - 1).hasClass('active')).toBe(true);
    expect(wrapper.find('ul li').at(props.currentPage).hasClass('active')).toBe(false);
  });

  it('check prevent from clicking active page', () => {
    wrapper.find('ul li button').at(props.currentPage - 1).simulate('click', { preventDefault() {} });
    expect(mochSetPage).toHaveBeenCalledTimes(0);
  });

  it('check clicking next page', () => {
    wrapper.find('ul li button').at(props.currentPage).simulate('click', { preventDefault() {} });
    expect(mochSetPage).toHaveBeenCalledWith(props.currentPage + 1);
  });

  it('check clicking back page', () => {
    wrapper.find('ul li button').at(props.currentPage - 2).simulate('click', { preventDefault() {} });
    expect(mochSetPage).toHaveBeenCalledWith(props.currentPage - 1);
  });

  it('no render pagiantion when dont need', () => {
    const newWrapper = shallow(<Pagination pageLimit={5} currentPage={1} totalRecords={5} />);
    expect(newWrapper.find('ul').exists()).toBe(false);
  });

  it('should setFilter', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).setPage(2);
    expect(dispatch.mock.calls[0][0]).toEqual({ type: actions.SET_PAGE, payload: { page: 2 } });
  });

  describe('Renders button LEFT/RIGHT', () => {
    let textButtonWrapper;

    const textButtonWrapperProps = {
      totalRecords: 10,
      pageLimit: 1,
      setPage: mochSetPage,
      currentPage: 5,
      pageNeighbours: 0,
    };

    beforeEach(() => {
      textButtonWrapper = shallow(<Pagination {...textButtonWrapperProps} />);
    });

    it('render pagiantion with LEFT/RIGHT button', () => {
      expect(textButtonWrapper.find('ul li').at(1).text()).toEqual('«Previous');
      expect(textButtonWrapper.find('ul li').at(3).text()).toEqual('»Next');
    });

    it('should call setPage with page 4', () => {
      textButtonWrapper.find('ul li button').at(1).simulate('click', { preventDefault() {} });
      expect(mochSetPage).toHaveBeenCalledWith(textButtonWrapperProps.currentPage - 1);
    });

    it('should call setPage with page 6', () => {
      textButtonWrapper.find('ul li button').at(3).simulate('click', { preventDefault() {} });
      expect(mochSetPage).toHaveBeenCalledWith(textButtonWrapperProps.currentPage + 1);
    });
  });
});
