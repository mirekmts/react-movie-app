import React from 'react';
import { shallow } from 'enzyme';
import { Actor } from './Actor';
import { singleActor } from '../../data/fixtures';

describe('<Actor/>', () => {
  let wrapper;

  const mochFetchActor = jest.fn();

  const props = {
    actor: singleActor,
    loading: false,
    error: false,
    fetchActor: mochFetchActor,
    match: { params: { actorId: singleActor._id } },
  };

  beforeEach(() => {
    wrapper = shallow(<Actor {...props} />);
  });

  it('render Actor page container', () => {
    expect(wrapper.find('div').first().hasClass('single-page-container')).toBe(true);
  });

  it('render Actor text data container', () => {
    expect(wrapper.find('div').at(1).hasClass('text-data-container')).toBe(true);
  });

  it('render img with photoUrl src', () => {
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').props().src).toEqual(singleActor.photoUrl);
  });

  it('render tag a with imdbId href', () => {
    expect(wrapper.find('a').exists()).toBe(true);
    expect(wrapper.find('a').props().href).toEqual(`https://www.imdb.com/name/${singleActor.imdbId}`);
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
