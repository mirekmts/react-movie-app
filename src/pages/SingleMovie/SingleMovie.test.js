import React from 'react';
import { shallow } from 'enzyme';
import { SingleMovie } from './SingleMovie';
import { singleMovie } from '../../data/fixtures';

describe('<SingleMovie/>', () => {
  let wrapper;

  const mochFetchSingleMovie = jest.fn();

  const props = {
    movie: singleMovie,
    loading: false,
    error: false,
    fetchSingleMovie: mochFetchSingleMovie,
    match: { params: { actorId: singleMovie._id } },
  };

  beforeEach(() => {
    wrapper = shallow(<SingleMovie {...props} />);
  });

  it('render SingleMovie page container', () => {
    expect(wrapper.find('div').first().hasClass('single-page-container')).toBe(true);
  });

  it('render SingleMovie text data container', () => {
    expect(wrapper.find('div').at(1).hasClass('text-data-container')).toBe(true);
  });

  it('render img with photoUrl src', () => {
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').props().src).toEqual(singleMovie.posterUrl);
  });

  it('render tag a with imdbId href and proper text', () => {
    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.find('a').props().href).toEqual(`https://www.imdb.com/title/${singleMovie.imdbId}`);
    expect(wrapper.find('a').text()).toEqual(singleMovie.title);
  });

  it('render a actors list', () => {
    expect(wrapper.find('li')).toHaveLength(singleMovie.actors.length);
  });

  it('actors list as clickable Link', () => {
    expect(wrapper.find('li Link')).toHaveLength(singleMovie.actors.length);
    expect(wrapper.find('li Link').first().props().to).toEqual(`/actor/${singleMovie.actors[0].imdbId}`);
    expect(wrapper.find('li Link').first().props().children).toEqual(singleMovie.actors[0].name);
  });

  it('render Loading Spinner when loading true', () => {
    wrapper.setProps({ loading: true });

    expect(wrapper.find('LoadingSpinner').exists()).toBe(true);
    expect(wrapper.find('div').exists()).toBe(false);
  });

  it('render ErrorMessage when error true', () => {
    wrapper.setProps({ error: true });

    expect(wrapper.find('ErrorMessage').exists()).toBe(true);
    expect(wrapper.find('div').exists()).toBe(false);
  });
});
