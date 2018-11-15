import React from 'react';
import { shallow } from 'enzyme';
import { Home } from './Home';
import { movies } from '../../data/fixtures';

describe('<Home/>', () => {
  let wrapper;

  const mochFetchMovies = jest.fn();

  const props = {
    movies,
    loading: false,
    error: false,
    fetchMovies: mochFetchMovies,
    filters: {},
  };

  beforeEach(() => {
    wrapper = shallow(<Home {...props} />);
  });

  it('render Home page container', () => {
    expect(wrapper.find('div').first().hasClass('App')).toBe(true);
  });

  it('render App title', () => {
    expect(wrapper.find('h1').text()).toEqual('Movies App');
  });

  it('render Filters', () => {
    expect(wrapper.find('Connect(Filters)').exists()).toBe(true);
  });

  it('render Table', () => {
    expect(wrapper.find('Table').exists()).toBe(true);
  });

  it('render Pagination', () => {
    expect(wrapper.find('Connect(Pagination)').exists()).toBe(true);
  });

  it('render Loading Spinner when loading true', () => {
    wrapper.setProps({ loading: true });

    expect(wrapper.find('LoadingSpinner').exists()).toBe(true);
  });

  it('render ErrorMessage when error true', () => {
    wrapper.setProps({ error: true });

    expect(wrapper.find('ErrorMessage').exists()).toBe(true);
    expect(wrapper.find('div').exists()).toBe(false);
  });
});
